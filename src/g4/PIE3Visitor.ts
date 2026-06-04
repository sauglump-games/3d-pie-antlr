// Generated from ./g4/PIE3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PieFileContext } from "./PIE3Parser";
import { PieHeaderContext } from "./PIE3Parser";
import { PieBodyContext } from "./PIE3Parser";
import { LevelsHeaderContext } from "./PIE3Parser";
import { LevelListContext } from "./PIE3Parser";
import { LevelContext } from "./PIE3Parser";
import { PieVersionContext } from "./PIE3Parser";
import { TypeInfoContext } from "./PIE3Parser";
import { InterpolateInfoContext } from "./PIE3Parser";
import { EventInfoContext } from "./PIE3Parser";
import { TextureInfoContext } from "./PIE3Parser";
import { NormalMapContext } from "./PIE3Parser";
import { SpecularMapContext } from "./PIE3Parser";
import { PointsDataContext } from "./PIE3Parser";
import { PointListContext } from "./PIE3Parser";
import { PointContext } from "./PIE3Parser";
import { NormalsDataContext } from "./PIE3Parser";
import { NormalsListContext } from "./PIE3Parser";
import { NormalContext } from "./PIE3Parser";
import { NumberContext } from "./PIE3Parser";
import { PolygonsDataContext } from "./PIE3Parser";
import { PolygonListContext } from "./PIE3Parser";
import { PolygonContext } from "./PIE3Parser";
import { CornerDataContext } from "./PIE3Parser";
import { ConnectorDataContext } from "./PIE3Parser";
import { ConnectorListContext } from "./PIE3Parser";
import { ConnectorContext } from "./PIE3Parser";
import { AnimObjectDataContext } from "./PIE3Parser";
import { AnimFrameListContext } from "./PIE3Parser";
import { AnimFrameContext } from "./PIE3Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PIE3Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PIE3Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PIE3Parser.pieFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPieFile?: (ctx: PieFileContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.pieHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPieHeader?: (ctx: PieHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.pieBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPieBody?: (ctx: PieBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.levelsHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelsHeader?: (ctx: LevelsHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.levelList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelList?: (ctx: LevelListContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.level`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel?: (ctx: LevelContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.pieVersion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPieVersion?: (ctx: PieVersionContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.typeInfo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeInfo?: (ctx: TypeInfoContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.interpolateInfo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolateInfo?: (ctx: InterpolateInfoContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.eventInfo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventInfo?: (ctx: EventInfoContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.textureInfo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextureInfo?: (ctx: TextureInfoContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.normalMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalMap?: (ctx: NormalMapContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.specularMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecularMap?: (ctx: SpecularMapContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.pointsData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointsData?: (ctx: PointsDataContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.pointList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointList?: (ctx: PointListContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.point`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoint?: (ctx: PointContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.normalsData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalsData?: (ctx: NormalsDataContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.normalsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalsList?: (ctx: NormalsListContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.normal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormal?: (ctx: NormalContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.polygonsData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygonsData?: (ctx: PolygonsDataContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.polygonList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygonList?: (ctx: PolygonListContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.polygon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygon?: (ctx: PolygonContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.cornerData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCornerData?: (ctx: CornerDataContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.connectorData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectorData?: (ctx: ConnectorDataContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.connectorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectorList?: (ctx: ConnectorListContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.connector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnector?: (ctx: ConnectorContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.animObjectData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimObjectData?: (ctx: AnimObjectDataContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.animFrameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimFrameList?: (ctx: AnimFrameListContext) => Result;

	/**
	 * Visit a parse tree produced by `PIE3Parser.animFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimFrame?: (ctx: AnimFrameContext) => Result;
}

