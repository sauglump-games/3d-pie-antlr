import { CharStreams, CommonTokenStream } from "antlr4ts";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

import { PIE3Lexer } from "./g4/PIE3Lexer";
import {
  PIE3Parser,
  PieFileContext,
  PieHeaderContext,
  LevelsHeaderContext,
  LevelContext,
  PointContext,
  PolygonContext,
  ConnectorContext,
  NumberContext,
} from "./g4/PIE3Parser";
import { PIE3Visitor } from "./g4/PIE3Visitor";
import type { PIEHeader, PIELevel, PIEPolygon } from "./pie-model";

/** Parsed value of a `number` rule (INT, FLOAT, scientific, negative). */
function numberValue(ctx: NumberContext): number {
  // Whitespace is skipped by the PIE3 lexer, so the rule text is the bare
  // literal and parseFloat handles every numeric variant uniformly.
  return parseFloat(ctx.text);
}

/** STRING tokens may be bare (page-1.png) or double-quoted ("page 1.png"). */
function stringValue(text: string): string {
  if (text.length >= 2 && text.startsWith('"') && text.endsWith('"')) {
    return text.slice(1, -1);
  }
  return text;
}

/**
 * Walks a parsed PIE3 tree and accumulates it into a {@link PIEHeader} plus a
 * list of {@link PIELevel}s. A new level container is opened on every `LEVEL`
 * rule, and point/polygon/connector rules append to whichever level is current.
 */
export class PIE3ModelBuilder
  extends AbstractParseTreeVisitor<void>
  implements PIE3Visitor<void>
{
  private version = 3;
  private type = 0;
  private readonly textureFilenames: string[] = [];
  private declaredLevelCount = 0;
  private readonly builtLevels: PIELevel[] = [];
  private currentLevel: PIELevel | undefined;

  protected defaultResult(): void {
    return;
  }

  build(ctx: PieFileContext): { header: PIEHeader; levels: PIELevel[] } {
    this.visit(ctx);
    const header: PIEHeader = {
      version: this.version,
      type: this.type,
      textureCount: this.textureFilenames.length,
      textureFilenames: this.textureFilenames,
      levelCount: this.declaredLevelCount,
    };
    return { header, levels: this.builtLevels };
  }

  visitPieHeader(ctx: PieHeaderContext): void {
    this.version = parseInt(ctx.pieVersion().INT().text, 10);

    const typeInfo = ctx.typeInfo();
    if (typeInfo) {
      this.type = parseInt(typeInfo.INT().text, 10);
    }

    const textureInfo = ctx.textureInfo();
    if (textureInfo) {
      this.textureFilenames.push(stringValue(textureInfo.STRING().text));
    }
    // pieHeader is fully consumed here; do not descend into children.
  }

  visitLevelsHeader(ctx: LevelsHeaderContext): void {
    this.declaredLevelCount = parseInt(ctx.INT().text, 10);
  }

  visitLevel(ctx: LevelContext): void {
    this.currentLevel = { points: [], polygons: [], connectors: [] };
    this.builtLevels.push(this.currentLevel);
    this.visitChildren(ctx);
  }

  visitPoint(ctx: PointContext): void {
    const n = ctx.number();
    this.currentLevel!.points.push({
      x: numberValue(n[0]),
      y: numberValue(n[1]),
      z: numberValue(n[2]),
    });
  }

  visitPolygon(ctx: PolygonContext): void {
    // polygon: INT INT cornerData (number number)*
    //   INT(0) = flags, INT(1) = corner count, cornerData = vertex indices,
    //   trailing numbers = UV coordinate pairs.
    const flags = parseInt(ctx.INT(0).text, 10);
    const vertexIndices = ctx
      .cornerData()
      .INT()
      .map((token) => parseInt(token.text, 10));
    const uvCoordinates = ctx.number().map(numberValue);

    const polygon: PIEPolygon = { type: flags, vertexIndices };
    if (uvCoordinates.length > 0) {
      polygon.uvCoordinates = uvCoordinates;
    }
    this.currentLevel!.polygons.push(polygon);
  }

  visitConnector(ctx: ConnectorContext): void {
    const n = ctx.number();
    this.currentLevel!.connectors.push({
      x: numberValue(n[0]),
      y: numberValue(n[1]),
      z: numberValue(n[2]),
    });
  }
}

/** Lex, parse and build a PIE3 document into header + levels. */
export function parsePIE3(data: string): {
  header: PIEHeader;
  levels: PIELevel[];
} {
  const inputStream = CharStreams.fromString(data);
  const lexer = new PIE3Lexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new PIE3Parser(tokenStream);
  const tree = parser.pieFile();
  return new PIE3ModelBuilder().build(tree);
}
