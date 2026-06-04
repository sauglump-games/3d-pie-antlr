import { CharStreams, CommonTokenStream } from "antlr4ts";

import { PIE4Lexer } from "./g4/PIE4Lexer";
import {
  PIE4Parser,
  PieFileContext,
  LevelSectionContext,
  PointsSectionContext,
  PolygonsSectionContext,
  AnimObjectSectionContext,
  ConnectorSectionContext,
  NumberContext,
} from "./g4/PIE4Parser";
import type {
  PIEHeader,
  PIELevel,
  PIEParseResult,
  PIEPolygon,
  PIEAnimObject,
} from "./pie-model";
import {
  assertCount,
  attachErrorCollector,
  throwIfSyntaxErrors,
} from "./parse-error";

function numberValue(ctx: NumberContext): number {
  return parseFloat(ctx.text);
}

function stringValue(text: string): string {
  if (text.length >= 2 && text.startsWith('"') && text.endsWith('"')) {
    return text.slice(1, -1);
  }
  return text;
}

/**
 * Walks a parsed PIE4 tree into a {@link PIEHeader} plus a list of
 * {@link PIELevel}s.
 *
 * PIE4 differs structurally from PIE3:
 *  - The first level lives inside `LEVELS n` (`levelsSection.levelSection()`);
 *    any further levels are file-level `levelSection`s after it.
 *  - A level body may contain MULTIPLE `POLYGONS` sections (interleaved with
 *    `ANIMOBJECT` blocks); all of their polygons are concatenated.
 *  - CONNECTORS are file-level (after `LEVELS`) rather than per-level; they are
 *    appended to the first level.
 */
export class PIE4ModelBuilder {
  private readonly header: PIEHeader = {
    version: 4,
    type: 0,
    textures: [],
    events: [],
    levelCount: 0,
  };
  private readonly builtLevels: PIELevel[] = [];

  build(ctx: PieFileContext): PIEParseResult {
    const typeSection = ctx.typeSection();
    if (typeSection) {
      this.header.type = parseInt(typeSection.number().text, 10);
    }

    const interpolateSection = ctx.interpolateSection();
    if (interpolateSection) {
      this.header.interpolate = parseInt(interpolateSection.number().text, 10);
    }

    for (const texture of ctx.textureSection()) {
      const numbers = texture.number();
      this.header.textures.push({
        id: parseInt(numbers[0].text, 10),
        filename: stringValue(texture.STRING().text),
        width: numbers.length >= 3 ? parseInt(numbers[1].text, 10) : undefined,
        height: numbers.length >= 3 ? parseInt(numbers[2].text, 10) : undefined,
      });
    }

    // tcmaskSection has no field on the model; intentionally ignored.

    const levelsSection = ctx.levelsSection();
    this.header.levelCount = parseInt(levelsSection.number().text, 10);

    // The first level is nested inside LEVELS; the rest are file-level.
    this.buildLevel(levelsSection.levelSection());
    for (const level of ctx.levelSection()) {
      this.buildLevel(level);
    }

    // PIE4 CONNECTORS are file-level; attach them to the first level.
    const connectorSection = ctx.connectorSection();
    if (connectorSection) {
      this.buildConnectors(connectorSection);
    }

    assertCount("LEVELS", this.header.levelCount, this.builtLevels.length);
    return { header: this.header, levels: this.builtLevels };
  }

  private buildLevel(ctx: LevelSectionContext): void {
    const level: PIELevel = {
      points: [],
      polygons: [],
      connectors: [],
      normals: [],
      animObjects: [],
    };
    this.builtLevels.push(level);

    const content = ctx.subLevelContent();
    // Per-level typeSection/textureSection are ignored; the file-level
    // directives are authoritative.

    this.buildPoints(content.pointsSection(), level);

    for (const polygons of content.polygonsSection()) {
      this.buildPolygons(polygons, level);
    }

    for (const anim of content.animObjectSection()) {
      this.buildAnimObject(anim, level);
    }
  }

  private buildPoints(ctx: PointsSectionContext, level: PIELevel): void {
    const declared = parseInt(ctx.number().text, 10);
    const coordinates = ctx.pointCoordinate();
    for (const coordinate of coordinates) {
      const n = coordinate.number();
      level.points.push({
        x: numberValue(n[0]),
        y: numberValue(n[1]),
        z: numberValue(n[2]),
      });
    }
    assertCount("POINTS", declared, coordinates.length);
  }

  private buildPolygons(ctx: PolygonsSectionContext, level: PIELevel): void {
    const declared = parseInt(ctx.number().text, 10);
    const polygons = ctx.polygon();
    for (const polygon of polygons) {
      const n = polygon.number().map(numberValue);
      const flags = n[0];
      const count = n[1];
      const vertexIndices = n.slice(2, 2 + count);
      const uvCoordinates = n.slice(2 + count);
      const result: PIEPolygon = { type: flags, vertexIndices };
      if (uvCoordinates.length > 0) {
        result.uvCoordinates = uvCoordinates;
      }
      level.polygons.push(result);
    }
    assertCount("POLYGONS", declared, polygons.length);
  }

  private buildAnimObject(ctx: AnimObjectSectionContext, level: PIELevel): void {
    const header = ctx.number().map((n) => parseInt(n.text, 10));
    const anim: PIEAnimObject = { header, frames: [] };
    for (const frame of ctx.animFrame()) {
      const n = frame.number().map(numberValue);
      anim.frames.push({ frame: n[0], data: n.slice(1) });
    }
    level.animObjects!.push(anim);
  }

  private buildConnectors(ctx: ConnectorSectionContext): void {
    const declared = parseInt(ctx.number().text, 10);
    const connectors = ctx.connector();
    const level = this.builtLevels[0];
    for (const connector of connectors) {
      const n = connector.number();
      level.connectors.push({
        x: numberValue(n[0]),
        y: numberValue(n[1]),
        z: numberValue(n[2]),
      });
    }
    assertCount("CONNECTORS", declared, connectors.length);
  }
}

/** Lex, parse and build a PIE4 document into header + levels. */
export function parsePIE4(data: string): PIEParseResult {
  const inputStream = CharStreams.fromString(data);
  const lexer = new PIE4Lexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new PIE4Parser(tokenStream);
  const collector = attachErrorCollector(lexer, parser);
  const tree = parser.pieFile();
  throwIfSyntaxErrors(collector);
  return new PIE4ModelBuilder().build(tree);
}
