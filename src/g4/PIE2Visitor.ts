// Generated from ./g4/PIE2.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PieFileContext } from "./PIE2Parser";
import { TypeSectionContext } from "./PIE2Parser";
import { TextureSectionContext } from "./PIE2Parser";
import { LevelsSectionContext } from "./PIE2Parser";
import { LevelSectionContext } from "./PIE2Parser";
import { PointsSectionContext } from "./PIE2Parser";
import { PointCoordinateContext } from "./PIE2Parser";
import { PolygonsSectionContext } from "./PIE2Parser";
import { PolygonContext } from "./PIE2Parser";
import { ConnectorSectionContext } from "./PIE2Parser";
import { ConnectorContext } from "./PIE2Parser";
import { NumberContext } from "./PIE2Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PIE2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PIE2Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PIE2Parser.pieFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPieFile?: (ctx: PieFileContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.typeSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSection?: (ctx: TypeSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.textureSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextureSection?: (ctx: TextureSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.levelsSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelsSection?: (ctx: LevelsSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.levelSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelSection?: (ctx: LevelSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.pointsSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointsSection?: (ctx: PointsSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.pointCoordinate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointCoordinate?: (ctx: PointCoordinateContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.polygonsSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygonsSection?: (ctx: PolygonsSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.polygon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygon?: (ctx: PolygonContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.connectorSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectorSection?: (ctx: ConnectorSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.connector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnector?: (ctx: ConnectorContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE2Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
}

