// Generated from ./g4/PIE2.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { PIE2Listener } from "./PIE2Listener";
import { PIE2Visitor } from "./PIE2Visitor";


export class PIE2Parser extends Parser {
	public static readonly PIE_HEADER = 1;
	public static readonly TYPE_HEADER = 2;
	public static readonly EVENT_HEADER = 3;
	public static readonly TEXTURE_HEADER = 4;
	public static readonly LEVELS_HEADER = 5;
	public static readonly LEVEL_HEADER = 6;
	public static readonly POINTS_HEADER = 7;
	public static readonly POLYGONS_HEADER = 8;
	public static readonly CONNECTORS_HEADER = 9;
	public static readonly ANIMOBJECT_HEADER = 10;
	public static readonly INTEGER = 11;
	public static readonly FLOAT = 12;
	public static readonly STRING = 13;
	public static readonly NL = 14;
	public static readonly WS = 15;
	public static readonly RULE_pieFile = 0;
	public static readonly RULE_typeSection = 1;
	public static readonly RULE_eventSection = 2;
	public static readonly RULE_textureSection = 3;
	public static readonly RULE_levelsSection = 4;
	public static readonly RULE_levelSection = 5;
	public static readonly RULE_pointsSection = 6;
	public static readonly RULE_pointCoordinate = 7;
	public static readonly RULE_polygonsSection = 8;
	public static readonly RULE_polygon = 9;
	public static readonly RULE_connectorSection = 10;
	public static readonly RULE_connector = 11;
	public static readonly RULE_animObjectSection = 12;
	public static readonly RULE_animFrame = 13;
	public static readonly RULE_number = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"pieFile", "typeSection", "eventSection", "textureSection", "levelsSection", 
		"levelSection", "pointsSection", "pointCoordinate", "polygonsSection", 
		"polygon", "connectorSection", "connector", "animObjectSection", "animFrame", 
		"number",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PIE_HEADER", "TYPE_HEADER", "EVENT_HEADER", "TEXTURE_HEADER", 
		"LEVELS_HEADER", "LEVEL_HEADER", "POINTS_HEADER", "POLYGONS_HEADER", "CONNECTORS_HEADER", 
		"ANIMOBJECT_HEADER", "INTEGER", "FLOAT", "STRING", "NL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PIE2Parser._LITERAL_NAMES, PIE2Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PIE2Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PIE2.g4"; }

	// @Override
	public get ruleNames(): string[] { return PIE2Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PIE2Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PIE2Parser._ATN, this);
	}
	// @RuleVersion(0)
	public pieFile(): PieFileContext {
		let _localctx: PieFileContext = new PieFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PIE2Parser.RULE_pieFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this.match(PIE2Parser.PIE_HEADER);
			this.state = 31;
			this.match(PIE2Parser.NL);
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PIE2Parser.TYPE_HEADER) {
				{
				this.state = 32;
				this.typeSection();
				}
			}

			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PIE2Parser.TEXTURE_HEADER) {
				{
				this.state = 35;
				this.textureSection();
				}
			}

			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE2Parser.EVENT_HEADER) {
				{
				{
				this.state = 38;
				this.eventSection();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
			this.levelsSection();
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PIE2Parser.CONNECTORS_HEADER) {
				{
				this.state = 45;
				this.connectorSection();
				}
			}

			this.state = 48;
			this.match(PIE2Parser.EOF);
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
		this.enterRule(_localctx, 2, PIE2Parser.RULE_typeSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(PIE2Parser.TYPE_HEADER);
			this.state = 51;
			this.number();
			this.state = 52;
			this.match(PIE2Parser.NL);
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
	public eventSection(): EventSectionContext {
		let _localctx: EventSectionContext = new EventSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PIE2Parser.RULE_eventSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.match(PIE2Parser.EVENT_HEADER);
			this.state = 55;
			this.number();
			this.state = 56;
			this.match(PIE2Parser.STRING);
			this.state = 57;
			this.match(PIE2Parser.NL);
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
		this.enterRule(_localctx, 6, PIE2Parser.RULE_textureSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(PIE2Parser.TEXTURE_HEADER);
			this.state = 60;
			this.number();
			this.state = 61;
			this.match(PIE2Parser.STRING);
			this.state = 62;
			this.number();
			this.state = 63;
			this.number();
			this.state = 64;
			this.match(PIE2Parser.NL);
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
		this.enterRule(_localctx, 8, PIE2Parser.RULE_levelsSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(PIE2Parser.LEVELS_HEADER);
			this.state = 67;
			this.number();
			this.state = 68;
			this.match(PIE2Parser.NL);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 69;
				this.levelSection();
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PIE2Parser.LEVEL_HEADER);
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
		this.enterRule(_localctx, 10, PIE2Parser.RULE_levelSection);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(PIE2Parser.LEVEL_HEADER);
			this.state = 75;
			this.number();
			this.state = 76;
			this.match(PIE2Parser.NL);
			this.state = 77;
			this.pointsSection();
			this.state = 78;
			this.polygonsSection();
			this.state = 83;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 81;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case PIE2Parser.CONNECTORS_HEADER:
						{
						this.state = 79;
						this.connectorSection();
						}
						break;
					case PIE2Parser.ANIMOBJECT_HEADER:
						{
						this.state = 80;
						this.animObjectSection();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
		this.enterRule(_localctx, 12, PIE2Parser.RULE_pointsSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(PIE2Parser.POINTS_HEADER);
			this.state = 87;
			this.number();
			this.state = 88;
			this.match(PIE2Parser.NL);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE2Parser.INTEGER || _la === PIE2Parser.FLOAT) {
				{
				{
				this.state = 89;
				this.pointCoordinate();
				}
				}
				this.state = 94;
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
	public pointCoordinate(): PointCoordinateContext {
		let _localctx: PointCoordinateContext = new PointCoordinateContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PIE2Parser.RULE_pointCoordinate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.number();
			this.state = 96;
			this.number();
			this.state = 97;
			this.number();
			this.state = 98;
			_la = this._input.LA(1);
			if (!(_la === PIE2Parser.EOF || _la === PIE2Parser.NL)) {
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
	public polygonsSection(): PolygonsSectionContext {
		let _localctx: PolygonsSectionContext = new PolygonsSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PIE2Parser.RULE_polygonsSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(PIE2Parser.POLYGONS_HEADER);
			this.state = 101;
			this.number();
			this.state = 102;
			this.match(PIE2Parser.NL);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE2Parser.INTEGER || _la === PIE2Parser.FLOAT) {
				{
				{
				this.state = 103;
				this.polygon();
				}
				}
				this.state = 108;
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
	public polygon(): PolygonContext {
		let _localctx: PolygonContext = new PolygonContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PIE2Parser.RULE_polygon);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.number();
			this.state = 110;
			this.number();
			this.state = 111;
			this.number();
			this.state = 112;
			this.number();
			this.state = 113;
			this.number();
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE2Parser.INTEGER || _la === PIE2Parser.FLOAT) {
				{
				{
				this.state = 114;
				this.number();
				}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 120;
			_la = this._input.LA(1);
			if (!(_la === PIE2Parser.EOF || _la === PIE2Parser.NL)) {
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
		this.enterRule(_localctx, 20, PIE2Parser.RULE_connectorSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(PIE2Parser.CONNECTORS_HEADER);
			this.state = 123;
			this.number();
			this.state = 124;
			this.match(PIE2Parser.NL);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE2Parser.INTEGER || _la === PIE2Parser.FLOAT) {
				{
				{
				this.state = 125;
				this.connector();
				}
				}
				this.state = 130;
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
	public connector(): ConnectorContext {
		let _localctx: ConnectorContext = new ConnectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PIE2Parser.RULE_connector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.number();
			this.state = 132;
			this.number();
			this.state = 133;
			this.number();
			this.state = 134;
			_la = this._input.LA(1);
			if (!(_la === PIE2Parser.EOF || _la === PIE2Parser.NL)) {
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
	public animObjectSection(): AnimObjectSectionContext {
		let _localctx: AnimObjectSectionContext = new AnimObjectSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PIE2Parser.RULE_animObjectSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(PIE2Parser.ANIMOBJECT_HEADER);
			this.state = 137;
			this.number();
			this.state = 138;
			this.number();
			this.state = 139;
			this.number();
			this.state = 140;
			this.match(PIE2Parser.NL);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 141;
				this.animFrame();
				}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PIE2Parser.INTEGER || _la === PIE2Parser.FLOAT);
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
		this.enterRule(_localctx, 26, PIE2Parser.RULE_animFrame);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.number();
			this.state = 147;
			this.number();
			this.state = 148;
			this.number();
			this.state = 149;
			this.number();
			this.state = 150;
			this.number();
			this.state = 151;
			this.number();
			this.state = 152;
			this.number();
			this.state = 153;
			this.number();
			this.state = 154;
			this.number();
			this.state = 155;
			this.number();
			this.state = 156;
			_la = this._input.LA(1);
			if (!(_la === PIE2Parser.EOF || _la === PIE2Parser.NL)) {
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
		this.enterRule(_localctx, 28, PIE2Parser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			_la = this._input.LA(1);
			if (!(_la === PIE2Parser.INTEGER || _la === PIE2Parser.FLOAT)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11\xA3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x05\x02" +
		"$\n\x02\x03\x02\x05\x02\'\n\x02\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-" +
		"\v\x02\x03\x02\x03\x02\x05\x021\n\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x06\x06I\n\x06\r\x06\x0E\x06J\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x07\x07T\n\x07\f\x07\x0E\x07W\v\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x07\b]\n\b\f\b\x0E\b`\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x07\nk\n\n\f\n\x0E\nn\v\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x07\vv\n\v\f\v\x0E\vy\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07" +
		"\f\x81\n\f\f\f\x0E\f\x84\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\x91\n\x0E\r\x0E\x0E\x0E\x92" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x02\x02\x02\x11\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02\x02\x04\x03\x03\x10\x10\x03\x02\r" +
		"\x0E\x02\x9F\x02 \x03\x02\x02\x02\x044\x03\x02\x02\x02\x068\x03\x02\x02" +
		"\x02\b=\x03\x02\x02\x02\nD\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EX\x03" +
		"\x02\x02\x02\x10a\x03\x02\x02\x02\x12f\x03\x02\x02\x02\x14o\x03\x02\x02" +
		"\x02\x16|\x03\x02\x02\x02\x18\x85\x03\x02\x02\x02\x1A\x8A\x03\x02\x02" +
		"\x02\x1C\x94\x03\x02\x02\x02\x1E\xA0\x03\x02\x02\x02 !\x07\x03\x02\x02" +
		"!#\x07\x10\x02\x02\"$\x05\x04\x03\x02#\"\x03\x02\x02\x02#$\x03\x02\x02" +
		"\x02$&\x03\x02\x02\x02%\'\x05\b\x05\x02&%\x03\x02\x02\x02&\'\x03\x02\x02" +
		"\x02\'+\x03\x02\x02\x02(*\x05\x06\x04\x02)(\x03\x02\x02\x02*-\x03\x02" +
		"\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02\x02-+\x03\x02" +
		"\x02\x02.0\x05\n\x06\x02/1\x05\x16\f\x020/\x03\x02\x02\x0201\x03\x02\x02" +
		"\x0212\x03\x02\x02\x0223\x07\x02\x02\x033\x03\x03\x02\x02\x0245\x07\x04" +
		"\x02\x0256\x05\x1E\x10\x0267\x07\x10\x02\x027\x05\x03\x02\x02\x0289\x07" +
		"\x05\x02\x029:\x05\x1E\x10\x02:;\x07\x0F\x02\x02;<\x07\x10\x02\x02<\x07" +
		"\x03\x02\x02\x02=>\x07\x06\x02\x02>?\x05\x1E\x10\x02?@\x07\x0F\x02\x02" +
		"@A\x05\x1E\x10\x02AB\x05\x1E\x10\x02BC\x07\x10\x02\x02C\t\x03\x02\x02" +
		"\x02DE\x07\x07\x02\x02EF\x05\x1E\x10\x02FH\x07\x10\x02\x02GI\x05\f\x07" +
		"\x02HG\x03\x02\x02\x02IJ\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02" +
		"\x02K\v\x03\x02\x02\x02LM\x07\b\x02\x02MN\x05\x1E\x10\x02NO\x07\x10\x02" +
		"\x02OP\x05\x0E\b\x02PU\x05\x12\n\x02QT\x05\x16\f\x02RT\x05\x1A\x0E\x02" +
		"SQ\x03\x02\x02\x02SR\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02" +
		"UV\x03\x02\x02\x02V\r\x03\x02\x02\x02WU\x03\x02\x02\x02XY\x07\t\x02\x02" +
		"YZ\x05\x1E\x10\x02Z^\x07\x10\x02\x02[]\x05\x10\t\x02\\[\x03\x02\x02\x02" +
		"]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_\x0F\x03\x02\x02" +
		"\x02`^\x03\x02\x02\x02ab\x05\x1E\x10\x02bc\x05\x1E\x10\x02cd\x05\x1E\x10" +
		"\x02de\t\x02\x02\x02e\x11\x03\x02\x02\x02fg\x07\n\x02\x02gh\x05\x1E\x10" +
		"\x02hl\x07\x10\x02\x02ik\x05\x14\v\x02ji\x03\x02\x02\x02kn\x03\x02\x02" +
		"\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\x13\x03\x02\x02\x02nl\x03\x02" +
		"\x02\x02op\x05\x1E\x10\x02pq\x05\x1E\x10\x02qr\x05\x1E\x10\x02rs\x05\x1E" +
		"\x10\x02sw\x05\x1E\x10\x02tv\x05\x1E\x10\x02ut\x03\x02\x02\x02vy\x03\x02" +
		"\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x03\x02\x02\x02yw\x03\x02" +
		"\x02\x02z{\t\x02\x02\x02{\x15\x03\x02\x02\x02|}\x07\v\x02\x02}~\x05\x1E" +
		"\x10\x02~\x82\x07\x10\x02\x02\x7F\x81\x05\x18\r\x02\x80\x7F\x03\x02\x02" +
		"\x02\x81\x84\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02" +
		"\x02\x83\x17\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x85\x86\x05\x1E\x10" +
		"\x02\x86\x87\x05\x1E\x10\x02\x87\x88\x05\x1E\x10\x02\x88\x89\t\x02\x02" +
		"\x02\x89\x19\x03\x02\x02\x02\x8A\x8B\x07\f\x02\x02\x8B\x8C\x05\x1E\x10" +
		"\x02\x8C\x8D\x05\x1E\x10\x02\x8D\x8E\x05\x1E\x10\x02\x8E\x90\x07\x10\x02" +
		"\x02\x8F\x91\x05\x1C\x0F\x02\x90\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02" +
		"\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x1B\x03\x02\x02" +
		"\x02\x94\x95\x05\x1E\x10\x02\x95\x96\x05\x1E\x10\x02\x96\x97\x05\x1E\x10" +
		"\x02\x97\x98\x05\x1E\x10\x02\x98\x99\x05\x1E\x10\x02\x99\x9A\x05\x1E\x10" +
		"\x02\x9A\x9B\x05\x1E\x10\x02\x9B\x9C\x05\x1E\x10\x02\x9C\x9D\x05\x1E\x10" +
		"\x02\x9D\x9E\x05\x1E\x10\x02\x9E\x9F\t\x02\x02\x02\x9F\x1D\x03\x02\x02" +
		"\x02\xA0\xA1\t\x03\x02\x02\xA1\x1F\x03\x02\x02\x02\x0E#&+0JSU^lw\x82\x92";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PIE2Parser.__ATN) {
			PIE2Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PIE2Parser._serializedATN));
		}

		return PIE2Parser.__ATN;
	}

}

export class PieFileContext extends ParserRuleContext {
	public PIE_HEADER(): TerminalNode { return this.getToken(PIE2Parser.PIE_HEADER, 0); }
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
	public levelsSection(): LevelsSectionContext {
		return this.getRuleContext(0, LevelsSectionContext);
	}
	public EOF(): TerminalNode { return this.getToken(PIE2Parser.EOF, 0); }
	public typeSection(): TypeSectionContext | undefined {
		return this.tryGetRuleContext(0, TypeSectionContext);
	}
	public textureSection(): TextureSectionContext | undefined {
		return this.tryGetRuleContext(0, TextureSectionContext);
	}
	public eventSection(): EventSectionContext[];
	public eventSection(i: number): EventSectionContext;
	public eventSection(i?: number): EventSectionContext | EventSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventSectionContext);
		} else {
			return this.getRuleContext(i, EventSectionContext);
		}
	}
	public connectorSection(): ConnectorSectionContext | undefined {
		return this.tryGetRuleContext(0, ConnectorSectionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE2Parser.RULE_pieFile; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterPieFile) {
			listener.enterPieFile(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitPieFile) {
			listener.exitPieFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitPieFile) {
			return visitor.visitPieFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSectionContext extends ParserRuleContext {
	public TYPE_HEADER(): TerminalNode { return this.getToken(PIE2Parser.TYPE_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE2Parser.RULE_typeSection; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterTypeSection) {
			listener.enterTypeSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitTypeSection) {
			listener.exitTypeSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitTypeSection) {
			return visitor.visitTypeSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventSectionContext extends ParserRuleContext {
	public EVENT_HEADER(): TerminalNode { return this.getToken(PIE2Parser.EVENT_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public STRING(): TerminalNode { return this.getToken(PIE2Parser.STRING, 0); }
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE2Parser.RULE_eventSection; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterEventSection) {
			listener.enterEventSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitEventSection) {
			listener.exitEventSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitEventSection) {
			return visitor.visitEventSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextureSectionContext extends ParserRuleContext {
	public TEXTURE_HEADER(): TerminalNode { return this.getToken(PIE2Parser.TEXTURE_HEADER, 0); }
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public STRING(): TerminalNode { return this.getToken(PIE2Parser.STRING, 0); }
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE2Parser.RULE_textureSection; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterTextureSection) {
			listener.enterTextureSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitTextureSection) {
			listener.exitTextureSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitTextureSection) {
			return visitor.visitTextureSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LevelsSectionContext extends ParserRuleContext {
	public LEVELS_HEADER(): TerminalNode { return this.getToken(PIE2Parser.LEVELS_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
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
	public get ruleIndex(): number { return PIE2Parser.RULE_levelsSection; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterLevelsSection) {
			listener.enterLevelsSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitLevelsSection) {
			listener.exitLevelsSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitLevelsSection) {
			return visitor.visitLevelsSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LevelSectionContext extends ParserRuleContext {
	public LEVEL_HEADER(): TerminalNode { return this.getToken(PIE2Parser.LEVEL_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
	public pointsSection(): PointsSectionContext {
		return this.getRuleContext(0, PointsSectionContext);
	}
	public polygonsSection(): PolygonsSectionContext {
		return this.getRuleContext(0, PolygonsSectionContext);
	}
	public connectorSection(): ConnectorSectionContext[];
	public connectorSection(i: number): ConnectorSectionContext;
	public connectorSection(i?: number): ConnectorSectionContext | ConnectorSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConnectorSectionContext);
		} else {
			return this.getRuleContext(i, ConnectorSectionContext);
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
	public get ruleIndex(): number { return PIE2Parser.RULE_levelSection; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterLevelSection) {
			listener.enterLevelSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitLevelSection) {
			listener.exitLevelSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitLevelSection) {
			return visitor.visitLevelSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointsSectionContext extends ParserRuleContext {
	public POINTS_HEADER(): TerminalNode { return this.getToken(PIE2Parser.POINTS_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
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
	public get ruleIndex(): number { return PIE2Parser.RULE_pointsSection; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterPointsSection) {
			listener.enterPointsSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitPointsSection) {
			listener.exitPointsSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(PIE2Parser.NL, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PIE2Parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE2Parser.RULE_pointCoordinate; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterPointCoordinate) {
			listener.enterPointCoordinate(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitPointCoordinate) {
			listener.exitPointCoordinate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitPointCoordinate) {
			return visitor.visitPointCoordinate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PolygonsSectionContext extends ParserRuleContext {
	public POLYGONS_HEADER(): TerminalNode { return this.getToken(PIE2Parser.POLYGONS_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
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
	public get ruleIndex(): number { return PIE2Parser.RULE_polygonsSection; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterPolygonsSection) {
			listener.enterPolygonsSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitPolygonsSection) {
			listener.exitPolygonsSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(PIE2Parser.NL, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PIE2Parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE2Parser.RULE_polygon; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterPolygon) {
			listener.enterPolygon(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitPolygon) {
			listener.exitPolygon(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitPolygon) {
			return visitor.visitPolygon(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConnectorSectionContext extends ParserRuleContext {
	public CONNECTORS_HEADER(): TerminalNode { return this.getToken(PIE2Parser.CONNECTORS_HEADER, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
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
	public get ruleIndex(): number { return PIE2Parser.RULE_connectorSection; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterConnectorSection) {
			listener.enterConnectorSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitConnectorSection) {
			listener.exitConnectorSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(PIE2Parser.NL, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PIE2Parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE2Parser.RULE_connector; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterConnector) {
			listener.enterConnector(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitConnector) {
			listener.exitConnector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitConnector) {
			return visitor.visitConnector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnimObjectSectionContext extends ParserRuleContext {
	public ANIMOBJECT_HEADER(): TerminalNode { return this.getToken(PIE2Parser.ANIMOBJECT_HEADER, 0); }
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
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
	public get ruleIndex(): number { return PIE2Parser.RULE_animObjectSection; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterAnimObjectSection) {
			listener.enterAnimObjectSection(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitAnimObjectSection) {
			listener.exitAnimObjectSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(PIE2Parser.NL, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PIE2Parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE2Parser.RULE_animFrame; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterAnimFrame) {
			listener.enterAnimFrame(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitAnimFrame) {
			listener.exitAnimFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitAnimFrame) {
			return visitor.visitAnimFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(PIE2Parser.INTEGER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(PIE2Parser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PIE2Parser.RULE_number; }
	// @Override
	public enterRule(listener: PIE2Listener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: PIE2Listener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PIE2Visitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


