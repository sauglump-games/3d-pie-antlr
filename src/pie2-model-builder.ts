import { CharStreams, CommonTokenStream } from "antlr4ts";

import { PIE2Lexer } from "./g4/PIE2Lexer";
import {
  PIE2Parser,
  AnimObjectSectionContext,
  ConnectorSectionContext,
  LevelSectionContext,
  NumberContext,
  PieFileContext,
  PointsSectionContext,
  PolygonsSectionContext,
} from "./g4/PIE2Parser";
import type {
  PIEHeader,
  PIELevel,
  PIEParseResult,
  PIEPolygon,
  PIEAnimObject,
  PIEVector3,
} from "./pie-model";
import {
  assertCount,
  attachErrorCollector,
  throwIfSyntaxErrors,
} from "./parse-error";

function numberValue(ctx: NumberContext): number {
  return parseFloat(ctx.text);
}

function intValue(ctx: NumberContext): number {
  return parseInt(ctx.text, 10);
}

function stringValue(text: string): string {
  if (text.length >= 2 && text.startsWith('"') && text.endsWith('"')) {
    return text.slice(1, -1);
  }
  return text;
}

function newLevel(): PIELevel {
  return {
    points: [],
    polygons: [],
    connectors: [],
    normals: [],
    animObjects: [],
  };
}

/**
 * Walks a parsed PIE2 tree into a {@link PIEHeader} plus a list of
 * {@link PIELevel}s. PIE2 has no INTERPOLATE and no NORMALS; CONNECTORS may
 * appear per-level (inside a LEVEL) and/or once at file level (appended to the
 * first level).
 */
export class PIE2ModelBuilder {
  private readonly header: PIEHeader = {
    version: 2,
    type: 0,
    textures: [],
    events: [],
    levelCount: 0,
  };
  private readonly levels: PIELevel[] = [];

  build(ctx: PieFileContext): PIEParseResult {
    this.visitFile(ctx);
    assertCount("LEVELS", this.header.levelCount, this.levels.length);
    return { header: this.header, levels: this.levels };
  }

  private visitFile(ctx: PieFileContext): void {
    const typeSection = ctx.typeSection();
    if (typeSection) {
      this.header.type = intValue(typeSection.number());
    }

    const textureSection = ctx.textureSection();
    if (textureSection) {
      const numbers = textureSection.number();
      this.header.textures.push({
        id: intValue(numbers[0]),
        filename: stringValue(textureSection.STRING().text),
        width: intValue(numbers[1]),
        height: intValue(numbers[2]),
      });
    }

    for (const event of ctx.eventSection()) {
      this.header.events.push({
        type: intValue(event.number()),
        filename: stringValue(event.STRING().text),
      });
    }

    const levelsSection = ctx.levelsSection();
    this.header.levelCount = intValue(levelsSection.number());
    for (const levelCtx of levelsSection.levelSection()) {
      this.visitLevel(levelCtx);
    }

    // A file-level CONNECTORS block (after LEVELS) attaches to the first level.
    const fileConnectors = ctx.connectorSection();
    if (fileConnectors && this.levels.length > 0) {
      this.appendConnectors(this.levels[0], fileConnectors);
    }
  }

  private visitLevel(ctx: LevelSectionContext): void {
    const level = newLevel();
    this.levels.push(level);

    this.visitPoints(level, ctx.pointsSection());
    this.visitPolygons(level, ctx.polygonsSection());

    for (const connectorSection of ctx.connectorSection()) {
      this.appendConnectors(level, connectorSection);
    }
    for (const animObjectSection of ctx.animObjectSection()) {
      this.visitAnimObject(level, animObjectSection);
    }
  }

  private visitPoints(level: PIELevel, ctx: PointsSectionContext): void {
    const declared = intValue(ctx.number());
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

  private visitPolygons(level: PIELevel, ctx: PolygonsSectionContext): void {
    const declared = intValue(ctx.number());
    const polygons = ctx.polygon();
    for (const polygon of polygons) {
      const n = polygon.number();
      const flags = intValue(n[0]);
      const count = intValue(n[1]);
      const vertexIndices = n.slice(2, 2 + count).map(intValue);
      const uvCoordinates = n.slice(2 + count).map(numberValue);
      const result: PIEPolygon = { type: flags, vertexIndices };
      if (uvCoordinates.length > 0) {
        result.uvCoordinates = uvCoordinates;
      }
      level.polygons.push(result);
    }
    assertCount("POLYGONS", declared, polygons.length);
  }

  private appendConnectors(level: PIELevel, ctx: ConnectorSectionContext): void {
    const declared = intValue(ctx.number());
    const connectors = ctx.connector();
    for (const connector of connectors) {
      const n = connector.number();
      const point: PIEVector3 = {
        x: numberValue(n[0]),
        y: numberValue(n[1]),
        z: numberValue(n[2]),
      };
      level.connectors.push(point);
    }
    assertCount("CONNECTORS", declared, connectors.length);
  }

  private visitAnimObject(level: PIELevel, ctx: AnimObjectSectionContext): void {
    const header = ctx.number().map(intValue);
    const anim: PIEAnimObject = { header, frames: [] };
    for (const frame of ctx.animFrame()) {
      const n = frame.number();
      anim.frames.push({
        frame: intValue(n[0]),
        data: n.slice(1).map(numberValue),
      });
    }
    level.animObjects!.push(anim);
  }
}

/** Lex, parse and build a PIE2 document into header + levels. */
export function parsePIE2(data: string): PIEParseResult {
  const inputStream = CharStreams.fromString(data);
  const lexer = new PIE2Lexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new PIE2Parser(tokenStream);
  const collector = attachErrorCollector(lexer, parser);
  const tree = parser.pieFile();
  throwIfSyntaxErrors(collector);
  return new PIE2ModelBuilder().build(tree);
}
