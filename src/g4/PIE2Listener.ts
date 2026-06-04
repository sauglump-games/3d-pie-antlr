// Generated from ./g4/PIE2.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PIE2Parser`.
 */
export interface PIE2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PIE2Parser.pieFile`.
	 * @param ctx the parse tree
	 */
	enterPieFile?: (ctx: PieFileContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.pieFile`.
	 * @param ctx the parse tree
	 */
	exitPieFile?: (ctx: PieFileContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.typeSection`.
	 * @param ctx the parse tree
	 */
	enterTypeSection?: (ctx: TypeSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.typeSection`.
	 * @param ctx the parse tree
	 */
	exitTypeSection?: (ctx: TypeSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.textureSection`.
	 * @param ctx the parse tree
	 */
	enterTextureSection?: (ctx: TextureSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.textureSection`.
	 * @param ctx the parse tree
	 */
	exitTextureSection?: (ctx: TextureSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.levelsSection`.
	 * @param ctx the parse tree
	 */
	enterLevelsSection?: (ctx: LevelsSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.levelsSection`.
	 * @param ctx the parse tree
	 */
	exitLevelsSection?: (ctx: LevelsSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.levelSection`.
	 * @param ctx the parse tree
	 */
	enterLevelSection?: (ctx: LevelSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.levelSection`.
	 * @param ctx the parse tree
	 */
	exitLevelSection?: (ctx: LevelSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.pointsSection`.
	 * @param ctx the parse tree
	 */
	enterPointsSection?: (ctx: PointsSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.pointsSection`.
	 * @param ctx the parse tree
	 */
	exitPointsSection?: (ctx: PointsSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.pointCoordinate`.
	 * @param ctx the parse tree
	 */
	enterPointCoordinate?: (ctx: PointCoordinateContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.pointCoordinate`.
	 * @param ctx the parse tree
	 */
	exitPointCoordinate?: (ctx: PointCoordinateContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.polygonsSection`.
	 * @param ctx the parse tree
	 */
	enterPolygonsSection?: (ctx: PolygonsSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.polygonsSection`.
	 * @param ctx the parse tree
	 */
	exitPolygonsSection?: (ctx: PolygonsSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.polygon`.
	 * @param ctx the parse tree
	 */
	enterPolygon?: (ctx: PolygonContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.polygon`.
	 * @param ctx the parse tree
	 */
	exitPolygon?: (ctx: PolygonContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.connectorSection`.
	 * @param ctx the parse tree
	 */
	enterConnectorSection?: (ctx: ConnectorSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.connectorSection`.
	 * @param ctx the parse tree
	 */
	exitConnectorSection?: (ctx: ConnectorSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.connector`.
	 * @param ctx the parse tree
	 */
	enterConnector?: (ctx: ConnectorContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.connector`.
	 * @param ctx the parse tree
	 */
	exitConnector?: (ctx: ConnectorContext) => void;

	/**
	 * Enter a parse tree produced by `PIE2Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `PIE2Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
}

