// Generated from ./g4/PIE4.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PIE4Listener } from "./PIE4Listener";
import { PIE4Visitor } from "./PIE4Visitor";


export class PIE4Parser extends Parser {
	public static readonly PIE_HEADER = 1;
	public static readonly TYPE_HEADER = 2;
	public static readonly INTERPOLATE_HEADER = 3;
	public static readonly TEXTURE_HEADER = 4;
	public static readonly TCMASK_HEADER = 5;
	public static readonly LEVELS_HEADER = 6;
	public static readonly LEVEL_HEADER = 7;
	public static readonly POINTS_HEADER = 8;
	public static readonly POLYGONS_HEADER = 9;
	public static readonly CONNECTORS_HEADER = 10;
	public static readonly ANIMOBJECT_HEADER = 11;
	public static readonly SCIENTIFIC = 12;
	public static readonly FLOAT = 13;
	public static readonly INTEGER = 14;
	public static readonly IDENTIFIER = 15;
	public static readonly STRING = 16;
	public static readonly NL = 17;
	public static readonly WS = 18;
	public static readonly LINE_COMMENT = 19;
	public static readonly COMMENT_TOKEN = 20;
	public static readonly RULE_pieFile = 0;
	public static readonly RULE_pieHeader = 1;
	public static readonly RULE_typeSection = 2;
	public static readonly RULE_interpolateSection = 3;
	public static readonly RULE_textureSection = 4;
	public static readonly RULE_tcmaskSection = 5;
	public static readonly RULE_levelsSection = 6;
	public static readonly RULE_levelSection = 7;
	public static readonly RULE_subLevelContent = 8;
	public static readonly RULE_pointsSection = 9;
	public static readonly RULE_pointCoordinate = 10;
	public static readonly RULE_polygonsSection = 11;
	public static readonly RULE_polygon = 12;
	public static readonly RULE_animObjectSection = 13;
	public static readonly RULE_animFrame = 14;
	public static readonly RULE_connectorSection = 15;
	public static readonly RULE_connector = 16;
	public static readonly RULE_number = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"pieFile", "pieHeader", "typeSection", "interpolateSection", "textureSection", 
		"tcmaskSection", "levelsSection", "levelSection", "subLevelContent", "pointsSection", 
		"pointCoordinate", "polygonsSection", "polygon", "animObjectSection", 
		"animFrame", "connectorSection", "connector", "number",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PIE_HEADER", "TYPE_HEADER", "INTERPOLATE_HEADER", "TEXTURE_HEADER", 
		"TCMASK_HEADER", "LEVELS_HEADER", "LEVEL_HEADER", "POINTS_HEADER", "POLYGONS_HEADER", 
		"CONNECTORS_HEADER", "ANIMOBJECT_HEADER", "SCIENTIFIC", "FLOAT", "INTEGER", 
		"IDENTIFIER", "STRING", "NL", "WS", "LINE_COMMENT", "COMMENT_TOKEN",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PIE4Parser._LITERAL_NAMES, PIE4Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PIE4Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PIE4.g4"; }

	// @Override
	public get ruleNames(): string[] { return PIE4Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PIE4Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PIE4Parser._ATN, this);
	}
	// @RuleVersion(0)
	public pieFile(): PieFileContext {
		let _localctx: PieFileContext = new PieFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PIE4Parser.RULE_pieFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.pieHeader();
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PIE4Parser.TYPE_HEADER) {
				{
				this.state = 37;
				this.typeSection();
				}
			}

			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PIE4Parser.INTERPOLATE_HEADER) {
				{
				this.state = 40;
				this.interpolateSection();
				}
			}

			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE4Parser.TEXTURE_HEADER) {
				{
				{
				this.state = 43;
				this.textureSection();
				}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE4Parser.TCMASK_HEADER) {
				{
				{
				this.state = 49;
				this.tcmaskSection();
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 55;
			this.levelsSection();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PIE4Parser.CONNECTORS_HEADER) {
				{
				this.state = 56;
				this.connectorSection();
				}
			}

			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE4Parser.LEVEL_HEADER) {
				{
				{
				this.state = 59;
				this.levelSection();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 65;
			this.match(PIE4Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pieHeader(): PieHeaderContext {
		let _localctx: PieHeaderContext = new PieHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PIE4Parser.RULE_pieHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(PIE4Parser.PIE_HEADER);
			this.state = 68;
			this.match(PIE4Parser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSection(): TypeSectionContext {
		let _localctx: TypeSectionContext = new TypeSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PIE4Parser.RULE_typeSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(PIE4Parser.TYPE_HEADER);
			this.state = 71;
			this.number();
			this.state = 72;
			this.match(PIE4Parser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interpolateSection(): InterpolateSectionContext {
		let _localctx: InterpolateSectionContext = new InterpolateSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PIE4Parser.RULE_interpolateSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(PIE4Parser.INTERPOLATE_HEADER);
			this.state = 75;
			this.number();
			this.state = 76;
			this.match(PIE4Parser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public textureSection(): TextureSectionContext {
		let _localctx: TextureSectionContext = new TextureSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PIE4Parser.RULE_textureSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(PIE4Parser.TEXTURE_HEADER);
			this.state = 79;
			this.number();
			this.state = 80;
			this.match(PIE4Parser.STRING);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE4Parser.SCIENTIFIC) | (1 << PIE4Parser.FLOAT) | (1 << PIE4Parser.INTEGER))) !== 0)) {
				{
				this.state = 81;
				this.number();
				this.state = 82;
				this.number();
				}
			}

			this.state = 86;
			this.match(PIE4Parser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tcmaskSection(): TcmaskSectionContext {
		let _localctx: TcmaskSectionContext = new TcmaskSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PIE4Parser.RULE_tcmaskSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(PIE4Parser.TCMASK_HEADER);
			this.state = 89;
			this.number();
			this.state = 90;
			this.match(PIE4Parser.STRING);
			this.state = 91;
			this.match(PIE4Parser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public levelsSection(): LevelsSectionContext {
		let _localctx: LevelsSectionContext = new LevelsSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PIE4Parser.RULE_levelsSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(PIE4Parser.LEVELS_HEADER);
			this.state = 94;
			this.number();
			this.state = 95;
			this.match(PIE4Parser.NL);
			this.state = 96;
			this.levelSection();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public levelSection(): LevelSectionContext {
		let _localctx: LevelSectionContext = new LevelSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PIE4Parser.RULE_levelSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(PIE4Parser.LEVEL_HEADER);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE4Parser.SCIENTIFIC) | (1 << PIE4Parser.FLOAT) | (1 << PIE4Parser.INTEGER) | (1 << PIE4Parser.IDENTIFIER) | (1 << PIE4Parser.STRING))) !== 0)) {
				{
				this.state = 102;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PIE4Parser.SCIENTIFIC:
				case PIE4Parser.FLOAT:
				case PIE4Parser.INTEGER:
					{
					this.state = 99;
					this.number();
					}
					break;
				case PIE4Parser.IDENTIFIER:
					{
					this.state = 100;
					this.match(PIE4Parser.IDENTIFIER);
					}
					break;
				case PIE4Parser.STRING:
					{
					this.state = 101;
					this.match(PIE4Parser.STRING);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE4Parser.COMMENT_TOKEN) {
				{
				{
				this.state = 107;
				this.match(PIE4Parser.COMMENT_TOKEN);
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 113;
			this.match(PIE4Parser.NL);
			this.state = 114;
			this.subLevelContent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subLevelContent(): SubLevelContentContext {
		let _localctx: SubLevelContentContext = new SubLevelContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PIE4Parser.RULE_subLevelContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE4Parser.TYPE_HEADER || _la === PIE4Parser.TEXTURE_HEADER) {
				{
				this.state = 118;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PIE4Parser.TYPE_HEADER:
					{
					this.state = 116;
					this.typeSection();
					}
					break;
				case PIE4Parser.TEXTURE_HEADER:
					{
					this.state = 117;
					this.textureSection();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this.pointsSection();
			this.state = 124;
			this.polygonsSection();
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE4Parser.ANIMOBJECT_HEADER) {
				{
				{
				this.state = 125;
				this.animObjectSection();
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PIE4Parser.POLYGONS_HEADER) {
					{
					this.state = 126;
					this.polygonsSection();
					}
				}

				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointsSection(): PointsSectionContext {
		let _localctx: PointsSectionContext = new PointsSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PIE4Parser.RULE_pointsSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(PIE4Parser.POINTS_HEADER);
			this.state = 135;
			this.number();
			this.state = 136;
			this.match(PIE4Parser.NL);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 137;
				this.pointCoordinate();
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE4Parser.SCIENTIFIC) | (1 << PIE4Parser.FLOAT) | (1 << PIE4Parser.INTEGER))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointCoordinate(): PointCoordinateContext {
		let _localctx: PointCoordinateContext = new PointCoordinateContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PIE4Parser.RULE_pointCoordinate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.number();
			this.state = 143;
			this.number();
			this.state = 144;
			this.number();
			this.state = 145;
			this.match(PIE4Parser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public polygonsSection(): PolygonsSectionContext {
		let _localctx: PolygonsSectionContext = new PolygonsSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PIE4Parser.RULE_polygonsSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(PIE4Parser.POLYGONS_HEADER);
			this.state = 148;
			this.number();
			this.state = 149;
			this.match(PIE4Parser.NL);
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 150;
				this.polygon();
				}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE4Parser.SCIENTIFIC) | (1 << PIE4Parser.FLOAT) | (1 << PIE4Parser.INTEGER))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public polygon(): PolygonContext {
		let _localctx: PolygonContext = new PolygonContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PIE4Parser.RULE_polygon);
		let _la: number;
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 155;
				this.number();
				this.state = 156;
				this.number();
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 157;
					this.number();
					}
					}
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE4Parser.SCIENTIFIC) | (1 << PIE4Parser.FLOAT) | (1 << PIE4Parser.INTEGER))) !== 0));
				this.state = 162;
				_la = this._input.LA(1);
				if (!(_la === PIE4Parser.EOF || _la === PIE4Parser.NL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 164;
				this.number();
				this.state = 165;
				this.number();
				this.state = 166;
				this.number();
				this.state = 167;
				this.number();
				this.state = 168;
				this.number();
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 169;
					this.number();
					}
					}
					this.state = 172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE4Parser.SCIENTIFIC) | (1 << PIE4Parser.FLOAT) | (1 << PIE4Parser.INTEGER))) !== 0));
				this.state = 174;
				_la = this._input.LA(1);
				if (!(_la === PIE4Parser.EOF || _la === PIE4Parser.NL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public animObjectSection(): AnimObjectSectionContext {
		let _localctx: AnimObjectSectionContext = new AnimObjectSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PIE4Parser.RULE_animObjectSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(PIE4Parser.ANIMOBJECT_HEADER);
			this.state = 179;
			this.number();
			this.state = 180;
			this.number();
			this.state = 181;
			this.number();
			this.state = 182;
			this.match(PIE4Parser.NL);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 183;
				this.animFrame();
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE4Parser.SCIENTIFIC) | (1 << PIE4Parser.FLOAT) | (1 << PIE4Parser.INTEGER))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public animFrame(): AnimFrameContext {
		let _localctx: AnimFrameContext = new AnimFrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PIE4Parser.RULE_animFrame);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.number();
			this.state = 189;
			this.number();
			this.state = 190;
			this.number();
			this.state = 191;
			this.number();
			this.state = 192;
			this.number();
			this.state = 193;
			this.number();
			this.state = 194;
			this.number();
			this.state = 195;
			this.number();
			this.state = 196;
			this.number();
			this.state = 197;
			this.number();
			this.state = 198;
			_la = this._input.LA(1);
			if (!(_la === PIE4Parser.EOF || _la === PIE4Parser.NL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public connectorSection(): ConnectorSectionContext {
		let _localctx: ConnectorSectionContext = new ConnectorSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PIE4Parser.RULE_connectorSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(PIE4Parser.CONNECTORS_HEADER);
			this.state = 201;
			this.number();
			this.state = 202;
			this.match(PIE4Parser.NL);
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 203;
				this.connector();
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE4Parser.SCIENTIFIC) | (1 << PIE4Parser.FLOAT) | (1 << PIE4Parser.INTEGER))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public connector(): ConnectorContext {
		let _localctx: ConnectorContext = new ConnectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PIE4Parser.RULE_connector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.number();
			this.state = 209;
			this.number();
			this.state = 210;
			this.number();
			this.state = 211;
			_la = this._input.LA(1);
			if (!(_la === PIE4Parser.EOF || _la === PIE4Parser.NL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, PIE4Parser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE4Parser.SCIENTIFIC) | (1 << PIE4Parser.FLOAT) | (1 << PIE4Parser.INTEGER))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16\xDA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x03\x02\x05\x02)\n\x02\x03\x02\x05\x02,\n\x02\x03\x02" +
		"\x07\x02/\n\x02\f\x02\x0E\x022\v\x02\x03\x02\x07\x025\n\x02\f\x02\x0E" +
		"\x028\v\x02\x03\x02\x03\x02\x05\x02<\n\x02\x03\x02\x07\x02?\n\x02\f\x02" +
		"\x0E\x02B\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06W\n\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x07\ti\n\t\f\t\x0E\tl\v\t\x03\t\x07\to\n\t\f\t\x0E\tr\v\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x07\ny\n\n\f\n\x0E\n|\v\n\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n\x82\n\n\x07\n\x84\n\n\f\n\x0E\n\x87\v\n\x03\v\x03\v\x03\v" +
		"\x03\v\x06\v\x8D\n\v\r\v\x0E\v\x8E\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r" +
		"\x03\r\x03\r\x03\r\x06\r\x9A\n\r\r\r\x0E\r\x9B\x03\x0E\x03\x0E\x03\x0E" +
		"\x06\x0E\xA1\n\x0E\r\x0E\x0E\x0E\xA2\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\xAD\n\x0E\r\x0E\x0E\x0E\xAE\x03\x0E" +
		"\x03\x0E\x05\x0E\xB3\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x06\x0F\xBB\n\x0F\r\x0F\x0E\x0F\xBC\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x06\x11\xCF\n\x11\r\x11\x0E\x11\xD0\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x02\x02\x02\x14\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x04\x03\x03" +
		"\x13\x13\x03\x02\x0E\x10\x02\xDD\x02&\x03\x02\x02\x02\x04E\x03\x02\x02" +
		"\x02\x06H\x03\x02\x02\x02\bL\x03\x02\x02\x02\nP\x03\x02\x02\x02\fZ\x03" +
		"\x02\x02\x02\x0E_\x03\x02\x02\x02\x10d\x03\x02\x02\x02\x12z\x03\x02\x02" +
		"\x02\x14\x88\x03\x02\x02\x02\x16\x90\x03\x02\x02\x02\x18\x95\x03\x02\x02" +
		"\x02\x1A\xB2\x03\x02\x02\x02\x1C\xB4\x03\x02\x02\x02\x1E\xBE\x03\x02\x02" +
		"\x02 \xCA\x03\x02\x02\x02\"\xD2\x03\x02\x02\x02$\xD7\x03\x02\x02\x02&" +
		"(\x05\x04\x03\x02\')\x05\x06\x04\x02(\'\x03\x02\x02\x02()\x03\x02\x02" +
		"\x02)+\x03\x02\x02\x02*,\x05\b\x05\x02+*\x03\x02\x02\x02+,\x03\x02\x02" +
		"\x02,0\x03\x02\x02\x02-/\x05\n\x06\x02.-\x03\x02\x02\x02/2\x03\x02\x02" +
		"\x020.\x03\x02\x02\x0201\x03\x02\x02\x0216\x03\x02\x02\x0220\x03\x02\x02" +
		"\x0235\x05\f\x07\x0243\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02" +
		"\x0267\x03\x02\x02\x0279\x03\x02\x02\x0286\x03\x02\x02\x029;\x05\x0E\b" +
		"\x02:<\x05 \x11\x02;:\x03\x02\x02\x02;<\x03\x02\x02\x02<@\x03\x02\x02" +
		"\x02=?\x05\x10\t\x02>=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02" +
		"\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02B@\x03\x02\x02\x02CD\x07\x02\x02" +
		"\x03D\x03\x03\x02\x02\x02EF\x07\x03\x02\x02FG\x07\x13\x02\x02G\x05\x03" +
		"\x02\x02\x02HI\x07\x04\x02\x02IJ\x05$\x13\x02JK\x07\x13\x02\x02K\x07\x03" +
		"\x02\x02\x02LM\x07\x05\x02\x02MN\x05$\x13\x02NO\x07\x13\x02\x02O\t\x03" +
		"\x02\x02\x02PQ\x07\x06\x02\x02QR\x05$\x13\x02RV\x07\x12\x02\x02ST\x05" +
		"$\x13\x02TU\x05$\x13\x02UW\x03\x02\x02\x02VS\x03\x02\x02\x02VW\x03\x02" +
		"\x02\x02WX\x03\x02\x02\x02XY\x07\x13\x02\x02Y\v\x03\x02\x02\x02Z[\x07" +
		"\x07\x02\x02[\\\x05$\x13\x02\\]\x07\x12\x02\x02]^\x07\x13\x02\x02^\r\x03" +
		"\x02\x02\x02_`\x07\b\x02\x02`a\x05$\x13\x02ab\x07\x13\x02\x02bc\x05\x10" +
		"\t\x02c\x0F\x03\x02\x02\x02dj\x07\t\x02\x02ei\x05$\x13\x02fi\x07\x11\x02" +
		"\x02gi\x07\x12\x02\x02he\x03\x02\x02\x02hf\x03\x02\x02\x02hg\x03\x02\x02" +
		"\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kp\x03\x02\x02" +
		"\x02lj\x03\x02\x02\x02mo\x07\x16\x02\x02nm\x03\x02\x02\x02or\x03\x02\x02" +
		"\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qs\x03\x02\x02\x02rp\x03\x02\x02" +
		"\x02st\x07\x13\x02\x02tu\x05\x12\n\x02u\x11\x03\x02\x02\x02vy\x05\x06" +
		"\x04\x02wy\x05\n\x06\x02xv\x03\x02\x02\x02xw\x03\x02\x02\x02y|\x03\x02" +
		"\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02|z\x03\x02" +
		"\x02\x02}~\x05\x14\v\x02~\x85\x05\x18\r\x02\x7F\x81\x05\x1C\x0F\x02\x80" +
		"\x82\x05\x18\r\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82" +
		"\x84\x03\x02\x02\x02\x83\x7F\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02\x85" +
		"\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x13\x03\x02\x02\x02\x87" +
		"\x85\x03\x02\x02\x02\x88\x89\x07\n\x02\x02\x89\x8A\x05$\x13\x02\x8A\x8C" +
		"\x07\x13\x02\x02\x8B\x8D\x05\x16\f\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x15" +
		"\x03\x02\x02\x02\x90\x91\x05$\x13\x02\x91\x92\x05$\x13\x02\x92\x93\x05" +
		"$\x13\x02\x93\x94\x07\x13\x02\x02\x94\x17\x03\x02\x02\x02\x95\x96\x07" +
		"\v\x02\x02\x96\x97\x05$\x13\x02\x97\x99\x07\x13\x02\x02\x98\x9A\x05\x1A" +
		"\x0E\x02\x99\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x99\x03\x02" +
		"\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x19\x03\x02\x02\x02\x9D\x9E\x05$" +
		"\x13\x02\x9E\xA0\x05$\x13\x02\x9F\xA1\x05$\x13\x02\xA0\x9F\x03\x02\x02" +
		"\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02" +
		"\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\t\x02\x02\x02\xA5\xB3\x03\x02\x02" +
		"\x02\xA6\xA7\x05$\x13\x02\xA7\xA8\x05$\x13\x02\xA8\xA9\x05$\x13\x02\xA9" +
		"\xAA\x05$\x13\x02\xAA\xAC\x05$\x13\x02\xAB\xAD\x05$\x13\x02\xAC\xAB\x03" +
		"\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03" +
		"\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\t\x02\x02\x02\xB1\xB3\x03" +
		"\x02\x02\x02\xB2\x9D\x03\x02\x02\x02\xB2\xA6\x03\x02\x02\x02\xB3\x1B\x03" +
		"\x02\x02\x02\xB4\xB5\x07\r\x02\x02\xB5\xB6\x05$\x13\x02\xB6\xB7\x05$\x13" +
		"\x02\xB7\xB8\x05$\x13\x02\xB8\xBA\x07\x13\x02\x02\xB9\xBB\x05\x1E\x10" +
		"\x02\xBA\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBA\x03\x02\x02" +
		"\x02\xBC\xBD\x03\x02\x02\x02\xBD\x1D\x03\x02\x02\x02\xBE\xBF\x05$\x13" +
		"\x02\xBF\xC0\x05$\x13\x02\xC0\xC1\x05$\x13\x02\xC1\xC2\x05$\x13\x02\xC2" +
		"\xC3\x05$\x13\x02\xC3\xC4\x05$\x13\x02\xC4\xC5\x05$\x13\x02\xC5\xC6\x05" +
		"$\x13\x02\xC6\xC7\x05$\x13\x02\xC7\xC8\x05$\x13\x02\xC8\xC9\t\x02\x02" +
		"\x02\xC9\x1F\x03\x02\x02\x02\xCA\xCB\x07\f\x02\x02\xCB\xCC\x05$\x13\x02" +
		"\xCC\xCE\x07\x13\x02\x02\xCD\xCF\x05\"\x12\x02\xCE\xCD\x03\x02\x02\x02" +
		"\xCF\xD0\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02" +
		"\xD1!\x03\x02\x02\x02\xD2\xD3\x05$\x13\x02\xD3\xD4\x05$\x13\x02\xD4\xD5" +
		"\x05$\x13\x02\xD5\xD6\t\x02\x02\x02\xD6#\x03\x02\x02\x02\xD7\xD8\t\x03" +
		"\x02\x02\xD8%\x03\x02\x02\x02\x17(+06;@Vhjpxz\x81\x85\x8E\x9B\xA2\xAE" +
		"\xB2\xBC\xD0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PIE4Parser.__ATN) {
			PIE4Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PIE4Parser._serializedATN));
		}

		return PIE4Parser.__ATN;
	}

}

export class PieFileContext extends ParserRuleContext {
	public pieHeader(): PieHeaderContext {
		return this.getRuleContext(0, PieHeaderContext);
	}
	public levelsSection(): LevelsSectionContext {
		return this.getRuleContext(0, LevelsSectionContext);
	}
	public EOF(): TerminalNode { return this.getToken(PIE4Parser.EOF, 0); }
	public typeSection(): TypeSectionContext | undefined {
		return this.tryGetRuleContext(0, TypeSectionContext);
	}
	public interpolateSection(): InterpolateSectionContext | undefined {
		return this.tryGetRuleContext(0, InterpolateSectionContext);
	}
	public textureSection(): TextureSectionContext[];
	public textureSection(i: number): TextureSectionContext;
	public textureSection(i?: number): TextureSectionContext | TextureSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TextureSectionContext);
		} else {
			return this.getRuleContext(i, TextureSectionContext);
		}
	}
	public tcmaskSection(): TcmaskSectionContext[];
	public tcmaskSection(i: number): TcmaskSectionContext;
	public tcmaskSection(i?: number): TcmaskSectionContext | TcmaskSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TcmaskSectionContext);
		} else {
			return this.getRuleContext(i, TcmaskSectionContext);
		}
	}
	public connectorSection(): ConnectorSectionContext | undefined {
		return this.tryGetRuleContext(0, ConnectorSectionContext);
	}
	public levelSection(): LevelSectionContext[];
	public levelSection(i: number): LevelSectionContext;
	public levelSection(i?: number): LevelSectionContext | LevelSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LevelSectionContext);
		} else {
			return this.getRuleContext(i, LevelSectionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_pieFile; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterPieFile) {
			listener.enterPieFile(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitPieFile) {
			listener.exitPieFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitPieFile) {
			return visitor.visitPieFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PieHeaderContext extends ParserRuleContext {
	public PIE_HEADER(): TerminalNode { return this.getToken(PIE4Parser.PIE_HEADER, 0); }
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_pieHeader; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterPieHeader) {
			listener.enterPieHeader(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitPieHeader) {
			listener.exitPieHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitPieHeader) {
			return visitor.visitPieHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSectionContext extends ParserRuleContext {
	public TYPE_HEADER(): TerminalNode { return this.getToken(PIE4Parser.TYPE_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_typeSection; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterTypeSection) {
			listener.enterTypeSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitTypeSection) {
			listener.exitTypeSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitTypeSection) {
			return visitor.visitTypeSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterpolateSectionContext extends ParserRuleContext {
	public INTERPOLATE_HEADER(): TerminalNode { return this.getToken(PIE4Parser.INTERPOLATE_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_interpolateSection; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterInterpolateSection) {
			listener.enterInterpolateSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitInterpolateSection) {
			listener.exitInterpolateSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitInterpolateSection) {
			return visitor.visitInterpolateSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextureSectionContext extends ParserRuleContext {
	public TEXTURE_HEADER(): TerminalNode { return this.getToken(PIE4Parser.TEXTURE_HEADER, 0); }
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public STRING(): TerminalNode { return this.getToken(PIE4Parser.STRING, 0); }
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_textureSection; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterTextureSection) {
			listener.enterTextureSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitTextureSection) {
			listener.exitTextureSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitTextureSection) {
			return visitor.visitTextureSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TcmaskSectionContext extends ParserRuleContext {
	public TCMASK_HEADER(): TerminalNode { return this.getToken(PIE4Parser.TCMASK_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public STRING(): TerminalNode { return this.getToken(PIE4Parser.STRING, 0); }
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_tcmaskSection; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterTcmaskSection) {
			listener.enterTcmaskSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitTcmaskSection) {
			listener.exitTcmaskSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitTcmaskSection) {
			return visitor.visitTcmaskSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LevelsSectionContext extends ParserRuleContext {
	public LEVELS_HEADER(): TerminalNode { return this.getToken(PIE4Parser.LEVELS_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	public levelSection(): LevelSectionContext {
		return this.getRuleContext(0, LevelSectionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_levelsSection; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterLevelsSection) {
			listener.enterLevelsSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitLevelsSection) {
			listener.exitLevelsSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitLevelsSection) {
			return visitor.visitLevelsSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LevelSectionContext extends ParserRuleContext {
	public LEVEL_HEADER(): TerminalNode { return this.getToken(PIE4Parser.LEVEL_HEADER, 0); }
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	public subLevelContent(): SubLevelContentContext {
		return this.getRuleContext(0, SubLevelContentContext);
	}
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PIE4Parser.IDENTIFIER);
		} else {
			return this.getToken(PIE4Parser.IDENTIFIER, i);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PIE4Parser.STRING);
		} else {
			return this.getToken(PIE4Parser.STRING, i);
		}
	}
	public COMMENT_TOKEN(): TerminalNode[];
	public COMMENT_TOKEN(i: number): TerminalNode;
	public COMMENT_TOKEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PIE4Parser.COMMENT_TOKEN);
		} else {
			return this.getToken(PIE4Parser.COMMENT_TOKEN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_levelSection; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterLevelSection) {
			listener.enterLevelSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitLevelSection) {
			listener.exitLevelSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitLevelSection) {
			return visitor.visitLevelSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubLevelContentContext extends ParserRuleContext {
	public pointsSection(): PointsSectionContext {
		return this.getRuleContext(0, PointsSectionContext);
	}
	public polygonsSection(): PolygonsSectionContext[];
	public polygonsSection(i: number): PolygonsSectionContext;
	public polygonsSection(i?: number): PolygonsSectionContext | PolygonsSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PolygonsSectionContext);
		} else {
			return this.getRuleContext(i, PolygonsSectionContext);
		}
	}
	public typeSection(): TypeSectionContext[];
	public typeSection(i: number): TypeSectionContext;
	public typeSection(i?: number): TypeSectionContext | TypeSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSectionContext);
		} else {
			return this.getRuleContext(i, TypeSectionContext);
		}
	}
	public textureSection(): TextureSectionContext[];
	public textureSection(i: number): TextureSectionContext;
	public textureSection(i?: number): TextureSectionContext | TextureSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TextureSectionContext);
		} else {
			return this.getRuleContext(i, TextureSectionContext);
		}
	}
	public animObjectSection(): AnimObjectSectionContext[];
	public animObjectSection(i: number): AnimObjectSectionContext;
	public animObjectSection(i?: number): AnimObjectSectionContext | AnimObjectSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnimObjectSectionContext);
		} else {
			return this.getRuleContext(i, AnimObjectSectionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_subLevelContent; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterSubLevelContent) {
			listener.enterSubLevelContent(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitSubLevelContent) {
			listener.exitSubLevelContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitSubLevelContent) {
			return visitor.visitSubLevelContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointsSectionContext extends ParserRuleContext {
	public POINTS_HEADER(): TerminalNode { return this.getToken(PIE4Parser.POINTS_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	public pointCoordinate(): PointCoordinateContext[];
	public pointCoordinate(i: number): PointCoordinateContext;
	public pointCoordinate(i?: number): PointCoordinateContext | PointCoordinateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointCoordinateContext);
		} else {
			return this.getRuleContext(i, PointCoordinateContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_pointsSection; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterPointsSection) {
			listener.enterPointsSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitPointsSection) {
			listener.exitPointsSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitPointsSection) {
			return visitor.visitPointsSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointCoordinateContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_pointCoordinate; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterPointCoordinate) {
			listener.enterPointCoordinate(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitPointCoordinate) {
			listener.exitPointCoordinate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitPointCoordinate) {
			return visitor.visitPointCoordinate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PolygonsSectionContext extends ParserRuleContext {
	public POLYGONS_HEADER(): TerminalNode { return this.getToken(PIE4Parser.POLYGONS_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	public polygon(): PolygonContext[];
	public polygon(i: number): PolygonContext;
	public polygon(i?: number): PolygonContext | PolygonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PolygonContext);
		} else {
			return this.getRuleContext(i, PolygonContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_polygonsSection; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterPolygonsSection) {
			listener.enterPolygonsSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitPolygonsSection) {
			listener.exitPolygonsSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitPolygonsSection) {
			return visitor.visitPolygonsSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PolygonContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public NL(): TerminalNode | undefined { return this.tryGetToken(PIE4Parser.NL, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PIE4Parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_polygon; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterPolygon) {
			listener.enterPolygon(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitPolygon) {
			listener.exitPolygon(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitPolygon) {
			return visitor.visitPolygon(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnimObjectSectionContext extends ParserRuleContext {
	public ANIMOBJECT_HEADER(): TerminalNode { return this.getToken(PIE4Parser.ANIMOBJECT_HEADER, 0); }
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	public animFrame(): AnimFrameContext[];
	public animFrame(i: number): AnimFrameContext;
	public animFrame(i?: number): AnimFrameContext | AnimFrameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnimFrameContext);
		} else {
			return this.getRuleContext(i, AnimFrameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_animObjectSection; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterAnimObjectSection) {
			listener.enterAnimObjectSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitAnimObjectSection) {
			listener.exitAnimObjectSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitAnimObjectSection) {
			return visitor.visitAnimObjectSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnimFrameContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public NL(): TerminalNode | undefined { return this.tryGetToken(PIE4Parser.NL, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PIE4Parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_animFrame; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterAnimFrame) {
			listener.enterAnimFrame(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitAnimFrame) {
			listener.exitAnimFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitAnimFrame) {
			return visitor.visitAnimFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConnectorSectionContext extends ParserRuleContext {
	public CONNECTORS_HEADER(): TerminalNode { return this.getToken(PIE4Parser.CONNECTORS_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE4Parser.NL, 0); }
	public connector(): ConnectorContext[];
	public connector(i: number): ConnectorContext;
	public connector(i?: number): ConnectorContext | ConnectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConnectorContext);
		} else {
			return this.getRuleContext(i, ConnectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_connectorSection; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterConnectorSection) {
			listener.enterConnectorSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitConnectorSection) {
			listener.exitConnectorSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitConnectorSection) {
			return visitor.visitConnectorSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConnectorContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public NL(): TerminalNode | undefined { return this.tryGetToken(PIE4Parser.NL, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PIE4Parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_connector; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterConnector) {
			listener.enterConnector(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitConnector) {
			listener.exitConnector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitConnector) {
			return visitor.visitConnector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(PIE4Parser.INTEGER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(PIE4Parser.FLOAT, 0); }
	public SCIENTIFIC(): TerminalNode | undefined { return this.tryGetToken(PIE4Parser.SCIENTIFIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE4Parser.RULE_number; }
	// @Override
	public enterRule(listener: PIE4Listener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: PIE4Listener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE4Visitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


