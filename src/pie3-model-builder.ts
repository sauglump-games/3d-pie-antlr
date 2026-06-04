import { CharStreams, CommonTokenStream } from "antlr4ts";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

import { PIE3Lexer } from "./g4/PIE3Lexer";
import {
  PIE3Parser,
  PieFileContext,
  PieHeaderContext,
  LevelsHeaderContext,
  LevelContext,
  PointsDataContext,
  PolygonsDataContext,
  NormalsDataContext,
  ConnectorDataContext,
  AnimObjectDataContext,
  NumberContext,
} from "./g4/PIE3Parser";
import { PIE3Visitor } from "./g4/PIE3Visitor";
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
 * Walks a parsed PIE3 tree into a {@link PIEHeader} plus a list of
 * {@link PIELevel}s. A new level is opened on every `LEVEL` rule, and the data
 * sections append to whichever level is current.
 */
export class PIE3ModelBuilder
  extends AbstractParseTreeVisitor<void>
  implements PIE3Visitor<void>
{
  private header: PIEHeader = {
    version: 3,
    type: 0,
    textures: [],
    events: [],
    levelCount: 0,
  };
  private readonly builtLevels: PIELevel[] = [];
  private currentLevel: PIELevel | undefined;

  protected defaultResult(): void {
    return;
  }

  build(ctx: PieFileContext): PIEParseResult {
    this.visit(ctx);
    assertCount("LEVELS", this.header.levelCount, this.builtLevels.length);
    return { header: this.header, levels: this.builtLevels };
  }

  visitPieHeader(ctx: PieHeaderContext): void {
    this.header.version = parseInt(ctx.pieVersion().INT().text, 10);

    const typeInfo = ctx.typeInfo();
    if (typeInfo) {
      this.header.type = parseInt(typeInfo.INT().text, 10);
    }

    const interpolateInfo = ctx.interpolateInfo();
    if (interpolateInfo) {
      this.header.interpolate = parseInt(interpolateInfo.INT().text, 10);
    }

    const textureInfo = ctx.textureInfo();
    if (textureInfo) {
      const ints = textureInfo.INT();
      this.header.textures.push({
        id: parseInt(ints[0].text, 10),
        filename: stringValue(textureInfo.STRING().text),
        width: ints.length >= 3 ? parseInt(ints[1].text, 10) : undefined,
        height: ints.length >= 3 ? parseInt(ints[2].text, 10) : undefined,
      });
    }

    for (const event of ctx.eventInfo()) {
      this.header.events.push({
        type: parseInt(event.INT().text, 10),
        filename: stringValue(event.STRING().text),
      });
    }
  }

  visitLevelsHeader(ctx: LevelsHeaderContext): void {
    this.header.levelCount = parseInt(ctx.INT().text, 10);
  }

  visitLevel(ctx: LevelContext): void {
    this.currentLevel = {
      points: [],
      polygons: [],
      connectors: [],
      normals: [],
      animObjects: [],
    };
    this.builtLevels.push(this.currentLevel);
    this.visitChildren(ctx);
  }

  visitPointsData(ctx: PointsDataContext): void {
    const declared = parseInt(ctx.INT().text, 10);
    const points = ctx.pointList().point();
    for (const p of points) {
      const n = p.number();
      this.currentLevel!.points.push({
        x: numberValue(n[0]),
        y: numberValue(n[1]),
        z: numberValue(n[2]),
      });
    }
    assertCount("POINTS", declared, points.length);
  }

  visitNormalsData(ctx: NormalsDataContext): void {
    const declared = parseInt(ctx.INT().text, 10);
    const rows = ctx.normalsList().normal();
    for (const row of rows) {
      this.currentLevel!.normals!.push(row.number().map(numberValue));
    }
    assertCount("NORMALS", declared, rows.length);
  }

  visitPolygonsData(ctx: PolygonsDataContext): void {
    const declared = parseInt(ctx.INT().text, 10);
    const polygons = ctx.polygonList().polygon();
    for (const polygon of polygons) {
      // polygon: INT INT cornerData (number number)*
      const flags = parseInt(polygon.INT(0).text, 10);
      const vertexIndices = polygon
        .cornerData()
        .INT()
        .map((token) => parseInt(token.text, 10));
      const uvCoordinates = polygon.number().map(numberValue);
      const result: PIEPolygon = { type: flags, vertexIndices };
      if (uvCoordinates.length > 0) {
        result.uvCoordinates = uvCoordinates;
      }
      this.currentLevel!.polygons.push(result);
    }
    assertCount("POLYGONS", declared, polygons.length);
  }

  visitConnectorData(ctx: ConnectorDataContext): void {
    const declared = parseInt(ctx.INT().text, 10);
    const connectors = ctx.connectorList().connector();
    for (const connector of connectors) {
      const n = connector.number();
      this.currentLevel!.connectors.push({
        x: numberValue(n[0]),
        y: numberValue(n[1]),
        z: numberValue(n[2]),
      });
    }
    assertCount("CONNECTORS", declared, connectors.length);
  }

  visitAnimObjectData(ctx: AnimObjectDataContext): void {
    const header = ctx.INT().map((token) => parseInt(token.text, 10));
    const anim: PIEAnimObject = { header, frames: [] };
    for (const frame of ctx.animFrameList().animFrame()) {
      anim.frames.push({
        frame: parseInt(frame.INT().text, 10),
        data: frame.number().map(numberValue),
      });
    }
    this.currentLevel!.animObjects!.push(anim);
  }
}

/** Lex, parse and build a PIE3 document into header + levels. */
export function parsePIE3(data: string): PIEParseResult {
  const inputStream = CharStreams.fromString(data);
  const lexer = new PIE3Lexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new PIE3Parser(tokenStream);
  const collector = attachErrorCollector(lexer, parser);
  const tree = parser.pieFile();
  throwIfSyntaxErrors(collector);
  return new PIE3ModelBuilder().build(tree);
}
