// Generated from ./g4/PIE3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PIE3Parser`.
 */
export interface PIE3Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PIE3Parser.pieFile`.
	 * @param ctx the parse tree
	 */
	enterPieFile?: (ctx: PieFileContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.pieFile`.
	 * @param ctx the parse tree
	 */
	exitPieFile?: (ctx: PieFileContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.pieHeader`.
	 * @param ctx the parse tree
	 */
	enterPieHeader?: (ctx: PieHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.pieHeader`.
	 * @param ctx the parse tree
	 */
	exitPieHeader?: (ctx: PieHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.pieBody`.
	 * @param ctx the parse tree
	 */
	enterPieBody?: (ctx: PieBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.pieBody`.
	 * @param ctx the parse tree
	 */
	exitPieBody?: (ctx: PieBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.levelsHeader`.
	 * @param ctx the parse tree
	 */
	enterLevelsHeader?: (ctx: LevelsHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.levelsHeader`.
	 * @param ctx the parse tree
	 */
	exitLevelsHeader?: (ctx: LevelsHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.levelList`.
	 * @param ctx the parse tree
	 */
	enterLevelList?: (ctx: LevelListContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.levelList`.
	 * @param ctx the parse tree
	 */
	exitLevelList?: (ctx: LevelListContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.level`.
	 * @param ctx the parse tree
	 */
	enterLevel?: (ctx: LevelContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.level`.
	 * @param ctx the parse tree
	 */
	exitLevel?: (ctx: LevelContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.pieVersion`.
	 * @param ctx the parse tree
	 */
	enterPieVersion?: (ctx: PieVersionContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.pieVersion`.
	 * @param ctx the parse tree
	 */
	exitPieVersion?: (ctx: PieVersionContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.typeInfo`.
	 * @param ctx the parse tree
	 */
	enterTypeInfo?: (ctx: TypeInfoContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.typeInfo`.
	 * @param ctx the parse tree
	 */
	exitTypeInfo?: (ctx: TypeInfoContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.interpolateInfo`.
	 * @param ctx the parse tree
	 */
	enterInterpolateInfo?: (ctx: InterpolateInfoContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.interpolateInfo`.
	 * @param ctx the parse tree
	 */
	exitInterpolateInfo?: (ctx: InterpolateInfoContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.eventInfo`.
	 * @param ctx the parse tree
	 */
	enterEventInfo?: (ctx: EventInfoContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.eventInfo`.
	 * @param ctx the parse tree
	 */
	exitEventInfo?: (ctx: EventInfoContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.textureInfo`.
	 * @param ctx the parse tree
	 */
	enterTextureInfo?: (ctx: TextureInfoContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.textureInfo`.
	 * @param ctx the parse tree
	 */
	exitTextureInfo?: (ctx: TextureInfoContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.normalMap`.
	 * @param ctx the parse tree
	 */
	enterNormalMap?: (ctx: NormalMapContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.normalMap`.
	 * @param ctx the parse tree
	 */
	exitNormalMap?: (ctx: NormalMapContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.specularMap`.
	 * @param ctx the parse tree
	 */
	enterSpecularMap?: (ctx: SpecularMapContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.specularMap`.
	 * @param ctx the parse tree
	 */
	exitSpecularMap?: (ctx: SpecularMapContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.pointsData`.
	 * @param ctx the parse tree
	 */
	enterPointsData?: (ctx: PointsDataContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.pointsData`.
	 * @param ctx the parse tree
	 */
	exitPointsData?: (ctx: PointsDataContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.pointList`.
	 * @param ctx the parse tree
	 */
	enterPointList?: (ctx: PointListContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.pointList`.
	 * @param ctx the parse tree
	 */
	exitPointList?: (ctx: PointListContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.point`.
	 * @param ctx the parse tree
	 */
	enterPoint?: (ctx: PointContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.point`.
	 * @param ctx the parse tree
	 */
	exitPoint?: (ctx: PointContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.normalsData`.
	 * @param ctx the parse tree
	 */
	enterNormalsData?: (ctx: NormalsDataContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.normalsData`.
	 * @param ctx the parse tree
	 */
	exitNormalsData?: (ctx: NormalsDataContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.normalsList`.
	 * @param ctx the parse tree
	 */
	enterNormalsList?: (ctx: NormalsListContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.normalsList`.
	 * @param ctx the parse tree
	 */
	exitNormalsList?: (ctx: NormalsListContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.normal`.
	 * @param ctx the parse tree
	 */
	enterNormal?: (ctx: NormalContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.normal`.
	 * @param ctx the parse tree
	 */
	exitNormal?: (ctx: NormalContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.polygonsData`.
	 * @param ctx the parse tree
	 */
	enterPolygonsData?: (ctx: PolygonsDataContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.polygonsData`.
	 * @param ctx the parse tree
	 */
	exitPolygonsData?: (ctx: PolygonsDataContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.polygonList`.
	 * @param ctx the parse tree
	 */
	enterPolygonList?: (ctx: PolygonListContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.polygonList`.
	 * @param ctx the parse tree
	 */
	exitPolygonList?: (ctx: PolygonListContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.polygon`.
	 * @param ctx the parse tree
	 */
	enterPolygon?: (ctx: PolygonContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.polygon`.
	 * @param ctx the parse tree
	 */
	exitPolygon?: (ctx: PolygonContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.cornerData`.
	 * @param ctx the parse tree
	 */
	enterCornerData?: (ctx: CornerDataContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.cornerData`.
	 * @param ctx the parse tree
	 */
	exitCornerData?: (ctx: CornerDataContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.connectorData`.
	 * @param ctx the parse tree
	 */
	enterConnectorData?: (ctx: ConnectorDataContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.connectorData`.
	 * @param ctx the parse tree
	 */
	exitConnectorData?: (ctx: ConnectorDataContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.connectorList`.
	 * @param ctx the parse tree
	 */
	enterConnectorList?: (ctx: ConnectorListContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.connectorList`.
	 * @param ctx the parse tree
	 */
	exitConnectorList?: (ctx: ConnectorListContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.connector`.
	 * @param ctx the parse tree
	 */
	enterConnector?: (ctx: ConnectorContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.connector`.
	 * @param ctx the parse tree
	 */
	exitConnector?: (ctx: ConnectorContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.animObjectData`.
	 * @param ctx the parse tree
	 */
	enterAnimObjectData?: (ctx: AnimObjectDataContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.animObjectData`.
	 * @param ctx the parse tree
	 */
	exitAnimObjectData?: (ctx: AnimObjectDataContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.animFrameList`.
	 * @param ctx the parse tree
	 */
	enterAnimFrameList?: (ctx: AnimFrameListContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.animFrameList`.
	 * @param ctx the parse tree
	 */
	exitAnimFrameList?: (ctx: AnimFrameListContext) => void;

	/**
	 * Enter a parse tree produced by `PIE3Parser.animFrame`.
	 * @param ctx the parse tree
	 */
	enterAnimFrame?: (ctx: AnimFrameContext) => void;
	/**
	 * Exit a parse tree produced by `PIE3Parser.animFrame`.
	 * @param ctx the parse tree
	 */
	exitAnimFrame?: (ctx: AnimFrameContext) => void;
}

