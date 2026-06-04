// Generated from ./g4/PIE4.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PieFileContext } from "./PIE4Parser";
import { PieHeaderContext } from "./PIE4Parser";
import { TypeSectionContext } from "./PIE4Parser";
import { InterpolateSectionContext } from "./PIE4Parser";
import { TextureSectionContext } from "./PIE4Parser";
import { TcmaskSectionContext } from "./PIE4Parser";
import { LevelsSectionContext } from "./PIE4Parser";
import { LevelSectionContext } from "./PIE4Parser";
import { SubLevelContentContext } from "./PIE4Parser";
import { PointsSectionContext } from "./PIE4Parser";
import { PointCoordinateContext } from "./PIE4Parser";
import { PolygonsSectionContext } from "./PIE4Parser";
import { PolygonContext } from "./PIE4Parser";
import { AnimObjectSectionContext } from "./PIE4Parser";
import { AnimFrameContext } from "./PIE4Parser";
import { ConnectorSectionContext } from "./PIE4Parser";
import { ConnectorContext } from "./PIE4Parser";
import { NumberContext } from "./PIE4Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PIE4Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PIE4Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PIE4Parser.pieFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPieFile?: (ctx: PieFileContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.pieHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPieHeader?: (ctx: PieHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.typeSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSection?: (ctx: TypeSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.interpolateSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolateSection?: (ctx: InterpolateSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.textureSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextureSection?: (ctx: TextureSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.tcmaskSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTcmaskSection?: (ctx: TcmaskSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.levelsSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelsSection?: (ctx: LevelsSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.levelSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelSection?: (ctx: LevelSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.subLevelContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubLevelContent?: (ctx: SubLevelContentContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.pointsSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointsSection?: (ctx: PointsSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.pointCoordinate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointCoordinate?: (ctx: PointCoordinateContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.polygonsSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygonsSection?: (ctx: PolygonsSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.polygon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygon?: (ctx: PolygonContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.animObjectSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimObjectSection?: (ctx: AnimObjectSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.animFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimFrame?: (ctx: AnimFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.connectorSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectorSection?: (ctx: ConnectorSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.connector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnector?: (ctx: ConnectorContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE4Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
}

