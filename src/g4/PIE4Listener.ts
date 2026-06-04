// Generated from ./g4/PIE4.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PIE4Parser`.
 */
export interface PIE4Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PIE4Parser.pieFile`.
	 * @param ctx the parse tree
	 */
	enterPieFile?: (ctx: PieFileContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.pieFile`.
	 * @param ctx the parse tree
	 */
	exitPieFile?: (ctx: PieFileContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.pieHeader`.
	 * @param ctx the parse tree
	 */
	enterPieHeader?: (ctx: PieHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.pieHeader`.
	 * @param ctx the parse tree
	 */
	exitPieHeader?: (ctx: PieHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.typeSection`.
	 * @param ctx the parse tree
	 */
	enterTypeSection?: (ctx: TypeSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.typeSection`.
	 * @param ctx the parse tree
	 */
	exitTypeSection?: (ctx: TypeSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.interpolateSection`.
	 * @param ctx the parse tree
	 */
	enterInterpolateSection?: (ctx: InterpolateSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.interpolateSection`.
	 * @param ctx the parse tree
	 */
	exitInterpolateSection?: (ctx: InterpolateSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.textureSection`.
	 * @param ctx the parse tree
	 */
	enterTextureSection?: (ctx: TextureSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.textureSection`.
	 * @param ctx the parse tree
	 */
	exitTextureSection?: (ctx: TextureSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.tcmaskSection`.
	 * @param ctx the parse tree
	 */
	enterTcmaskSection?: (ctx: TcmaskSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.tcmaskSection`.
	 * @param ctx the parse tree
	 */
	exitTcmaskSection?: (ctx: TcmaskSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.levelsSection`.
	 * @param ctx the parse tree
	 */
	enterLevelsSection?: (ctx: LevelsSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.levelsSection`.
	 * @param ctx the parse tree
	 */
	exitLevelsSection?: (ctx: LevelsSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.levelSection`.
	 * @param ctx the parse tree
	 */
	enterLevelSection?: (ctx: LevelSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.levelSection`.
	 * @param ctx the parse tree
	 */
	exitLevelSection?: (ctx: LevelSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.subLevelContent`.
	 * @param ctx the parse tree
	 */
	enterSubLevelContent?: (ctx: SubLevelContentContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.subLevelContent`.
	 * @param ctx the parse tree
	 */
	exitSubLevelContent?: (ctx: SubLevelContentContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.pointsSection`.
	 * @param ctx the parse tree
	 */
	enterPointsSection?: (ctx: PointsSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.pointsSection`.
	 * @param ctx the parse tree
	 */
	exitPointsSection?: (ctx: PointsSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.pointCoordinate`.
	 * @param ctx the parse tree
	 */
	enterPointCoordinate?: (ctx: PointCoordinateContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.pointCoordinate`.
	 * @param ctx the parse tree
	 */
	exitPointCoordinate?: (ctx: PointCoordinateContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.polygonsSection`.
	 * @param ctx the parse tree
	 */
	enterPolygonsSection?: (ctx: PolygonsSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.polygonsSection`.
	 * @param ctx the parse tree
	 */
	exitPolygonsSection?: (ctx: PolygonsSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.polygon`.
	 * @param ctx the parse tree
	 */
	enterPolygon?: (ctx: PolygonContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.polygon`.
	 * @param ctx the parse tree
	 */
	exitPolygon?: (ctx: PolygonContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.animObjectSection`.
	 * @param ctx the parse tree
	 */
	enterAnimObjectSection?: (ctx: AnimObjectSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.animObjectSection`.
	 * @param ctx the parse tree
	 */
	exitAnimObjectSection?: (ctx: AnimObjectSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.animFrame`.
	 * @param ctx the parse tree
	 */
	enterAnimFrame?: (ctx: AnimFrameContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.animFrame`.
	 * @param ctx the parse tree
	 */
	exitAnimFrame?: (ctx: AnimFrameContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.connectorSection`.
	 * @param ctx the parse tree
	 */
	enterConnectorSection?: (ctx: ConnectorSectionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.connectorSection`.
	 * @param ctx the parse tree
	 */
	exitConnectorSection?: (ctx: ConnectorSectionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.connector`.
	 * @param ctx the parse tree
	 */
	enterConnector?: (ctx: ConnectorContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.connector`.
	 * @param ctx the parse tree
	 */
	exitConnector?: (ctx: ConnectorContext) => void;

	/**
	 * Enter a parse tree produced by `PIE4Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `PIE4Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
}

