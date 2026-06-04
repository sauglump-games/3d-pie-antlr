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
	public static readonly TEXTURE_HEADER = 3;
	public static readonly LEVELS_HEADER = 4;
	public static readonly LEVEL_HEADER = 5;
	public static readonly POINTS_HEADER = 6;
	public static readonly POLYGONS_HEADER = 7;
	public static readonly CONNECTORS_HEADER = 8;
	public static readonly INTEGER = 9;
	public static readonly FLOAT = 10;
	public static readonly STRING = 11;
	public static readonly NL = 12;
	public static readonly WS = 13;
	public static readonly RULE_pieFile = 0;
	public static readonly RULE_typeSection = 1;
	public static readonly RULE_textureSection = 2;
	public static readonly RULE_levelsSection = 3;
	public static readonly RULE_levelSection = 4;
	public static readonly RULE_pointsSection = 5;
	public static readonly RULE_pointCoordinate = 6;
	public static readonly RULE_polygonsSection = 7;
	public static readonly RULE_polygon = 8;
	public static readonly RULE_connectorSection = 9;
	public static readonly RULE_connector = 10;
	public static readonly RULE_number = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"pieFile", "typeSection", "textureSection", "levelsSection", "levelSection", 
		"pointsSection", "pointCoordinate", "polygonsSection", "polygon", "connectorSection", 
		"connector", "number",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PIE_HEADER", "TYPE_HEADER", "TEXTURE_HEADER", "LEVELS_HEADER", 
		"LEVEL_HEADER", "POINTS_HEADER", "POLYGONS_HEADER", "CONNECTORS_HEADER", 
		"INTEGER", "FLOAT", "STRING", "NL", "WS",
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
			this.state = 24;
			this.match(PIE2Parser.PIE_HEADER);
			this.state = 25;
			this.match(PIE2Parser.NL);
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PIE2Parser.TYPE_HEADER) {
				{
				this.state = 26;
				this.typeSection();
				}
			}

			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PIE2Parser.TEXTURE_HEADER) {
				{
				this.state = 29;
				this.textureSection();
				}
			}

			this.state = 32;
			this.levelsSection();
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PIE2Parser.CONNECTORS_HEADER) {
				{
				this.state = 33;
				this.connectorSection();
				}
			}

			this.state = 36;
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
			this.state = 38;
			this.match(PIE2Parser.TYPE_HEADER);
			this.state = 39;
			this.number();
			this.state = 40;
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
		this.enterRule(_localctx, 4, PIE2Parser.RULE_textureSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(PIE2Parser.TEXTURE_HEADER);
			this.state = 43;
			this.number();
			this.state = 44;
			this.match(PIE2Parser.STRING);
			this.state = 45;
			this.number();
			this.state = 46;
			this.number();
			this.state = 47;
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
		this.enterRule(_localctx, 6, PIE2Parser.RULE_levelsSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(PIE2Parser.LEVELS_HEADER);
			this.state = 50;
			this.number();
			this.state = 51;
			this.match(PIE2Parser.NL);
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 52;
				this.levelSection();
				}
				}
				this.state = 55;
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
		this.enterRule(_localctx, 8, PIE2Parser.RULE_levelSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(PIE2Parser.LEVEL_HEADER);
			this.state = 58;
			this.number();
			this.state = 59;
			this.match(PIE2Parser.NL);
			this.state = 60;
			this.pointsSection();
			this.state = 61;
			this.polygonsSection();
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
		this.enterRule(_localctx, 10, PIE2Parser.RULE_pointsSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(PIE2Parser.POINTS_HEADER);
			this.state = 64;
			this.number();
			this.state = 65;
			this.match(PIE2Parser.NL);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 66;
				this.pointCoordinate();
				}
				}
				this.state = 69;
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
	public pointCoordinate(): PointCoordinateContext {
		let _localctx: PointCoordinateContext = new PointCoordinateContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PIE2Parser.RULE_pointCoordinate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.number();
			this.state = 72;
			this.number();
			this.state = 73;
			this.number();
			this.state = 74;
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
	public polygonsSection(): PolygonsSectionContext {
		let _localctx: PolygonsSectionContext = new PolygonsSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PIE2Parser.RULE_polygonsSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(PIE2Parser.POLYGONS_HEADER);
			this.state = 77;
			this.number();
			this.state = 78;
			this.match(PIE2Parser.NL);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 79;
				this.polygon();
				}
				}
				this.state = 82;
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
	public polygon(): PolygonContext {
		let _localctx: PolygonContext = new PolygonContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PIE2Parser.RULE_polygon);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.number();
			this.state = 85;
			this.number();
			this.state = 86;
			this.number();
			this.state = 87;
			this.number();
			this.state = 88;
			this.number();
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PIE2Parser.INTEGER || _la === PIE2Parser.FLOAT) {
				{
				{
				this.state = 89;
				this.number();
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 95;
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
		this.enterRule(_localctx, 18, PIE2Parser.RULE_connectorSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(PIE2Parser.CONNECTORS_HEADER);
			this.state = 98;
			this.number();
			this.state = 99;
			this.match(PIE2Parser.NL);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 100;
				this.connector();
				}
				}
				this.state = 103;
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
	public connector(): ConnectorContext {
		let _localctx: ConnectorContext = new ConnectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PIE2Parser.RULE_connector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.number();
			this.state = 106;
			this.number();
			this.state = 107;
			this.number();
			this.state = 108;
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
		this.enterRule(_localctx, 22, PIE2Parser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0Fs\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x05\x02\x1E\n\x02\x03\x02\x05\x02!\n\x02\x03\x02" +
		"\x03\x02\x05\x02%\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x06\x058\n\x05\r\x05\x0E\x059\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07F\n\x07" +
		"\r\x07\x0E\x07G\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t" +
		"\x06\tS\n\t\r\t\x0E\tT\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n]\n\n" +
		"\f\n\x0E\n`\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x06\vh\n\v\r\v\x0E" +
		"\vi\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x02\x04\x03\x03\x0E\x0E\x03\x02\v\f\x02n\x02\x1A\x03" +
		"\x02\x02\x02\x04(\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b3\x03\x02\x02" +
		"\x02\n;\x03\x02\x02\x02\fA\x03\x02\x02\x02\x0EI\x03\x02\x02\x02\x10N\x03" +
		"\x02\x02\x02\x12V\x03\x02\x02\x02\x14c\x03\x02\x02\x02\x16k\x03\x02\x02" +
		"\x02\x18p\x03\x02\x02\x02\x1A\x1B\x07\x03\x02\x02\x1B\x1D\x07\x0E\x02" +
		"\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1C\x03\x02\x02\x02\x1D\x1E\x03\x02\x02" +
		"\x02\x1E \x03\x02\x02\x02\x1F!\x05\x06\x04\x02 \x1F\x03\x02\x02\x02 !" +
		"\x03\x02\x02\x02!\"\x03\x02\x02\x02\"$\x05\b\x05\x02#%\x05\x14\v\x02$" +
		"#\x03\x02\x02\x02$%\x03\x02\x02\x02%&\x03\x02\x02\x02&\'\x07\x02\x02\x03" +
		"\'\x03\x03\x02\x02\x02()\x07\x04\x02\x02)*\x05\x18\r\x02*+\x07\x0E\x02" +
		"\x02+\x05\x03\x02\x02\x02,-\x07\x05\x02\x02-.\x05\x18\r\x02./\x07\r\x02" +
		"\x02/0\x05\x18\r\x0201\x05\x18\r\x0212\x07\x0E\x02\x022\x07\x03\x02\x02" +
		"\x0234\x07\x06\x02\x0245\x05\x18\r\x0257\x07\x0E\x02\x0268\x05\n\x06\x02" +
		"76\x03\x02\x02\x0289\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02" +
		":\t\x03\x02\x02\x02;<\x07\x07\x02\x02<=\x05\x18\r\x02=>\x07\x0E\x02\x02" +
		">?\x05\f\x07\x02?@\x05\x10\t\x02@\v\x03\x02\x02\x02AB\x07\b\x02\x02BC" +
		"\x05\x18\r\x02CE\x07\x0E\x02\x02DF\x05\x0E\b\x02ED\x03\x02\x02\x02FG\x03" +
		"\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\r\x03\x02\x02\x02IJ" +
		"\x05\x18\r\x02JK\x05\x18\r\x02KL\x05\x18\r\x02LM\x07\x0E\x02\x02M\x0F" +
		"\x03\x02\x02\x02NO\x07\t\x02\x02OP\x05\x18\r\x02PR\x07\x0E\x02\x02QS\x05" +
		"\x12\n\x02RQ\x03\x02\x02\x02ST\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03" +
		"\x02\x02\x02U\x11\x03\x02\x02\x02VW\x05\x18\r\x02WX\x05\x18\r\x02XY\x05" +
		"\x18\r\x02YZ\x05\x18\r\x02Z^\x05\x18\r\x02[]\x05\x18\r\x02\\[\x03\x02" +
		"\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_a\x03" +
		"\x02\x02\x02`^\x03\x02\x02\x02ab\t\x02\x02\x02b\x13\x03\x02\x02\x02cd" +
		"\x07\n\x02\x02de\x05\x18\r\x02eg\x07\x0E\x02\x02fh\x05\x16\f\x02gf\x03" +
		"\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02j\x15" +
		"\x03\x02\x02\x02kl\x05\x18\r\x02lm\x05\x18\r\x02mn\x05\x18\r\x02no\t\x02" +
		"\x02\x02o\x17\x03\x02\x02\x02pq\t\x03\x02\x02q\x19\x03\x02\x02\x02\n\x1D" +
		" $9GT^i";
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
	public NL(): TerminalNode { return this.getToken(PIE2Parser.NL, 0); }
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


