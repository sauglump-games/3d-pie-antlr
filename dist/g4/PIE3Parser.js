"use strict";
// Generated from ./g4/PIE3.g4 by ANTLR 4.9.0-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectorContext = exports.ConnectorsDataContext = exports.PolygonContext = exports.PolygonsDataContext = exports.PointContext = exports.PointsDataContext = exports.LevelContext = exports.HeaderContext = exports.PieFileContext = exports.PIE3Parser = void 0;
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = __importStar(require("antlr4ts/misc/Utils"));
var PIE3Parser = /** @class */ (function (_super) {
    __extends(PIE3Parser, _super);
    function PIE3Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(PIE3Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(PIE3Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return PIE3Parser.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PIE3Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "PIE3.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PIE3Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return PIE3Parser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PIE3Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return PIE3Parser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    PIE3Parser.prototype.createFailedPredicateException = function (predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    };
    // @RuleVersion(0)
    PIE3Parser.prototype.pieFile = function () {
        var _localctx = new PieFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, PIE3Parser.RULE_pieFile);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 18;
                this.header();
                this.state = 20;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 19;
                            this.level();
                        }
                    }
                    this.state = 22;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === PIE3Parser.LEVEL);
                this.state = 24;
                this.match(PIE3Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PIE3Parser.prototype.header = function () {
        var _localctx = new HeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, PIE3Parser.RULE_header);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 26;
                this.match(PIE3Parser.PIE);
                this.state = 27;
                this.match(PIE3Parser.NUMBER);
                this.state = 28;
                this.match(PIE3Parser.TYPE);
                this.state = 29;
                this.match(PIE3Parser.NUMBER);
                this.state = 30;
                this.match(PIE3Parser.TEXTURE);
                this.state = 31;
                this.match(PIE3Parser.NUMBER);
                this.state = 32;
                this.match(PIE3Parser.STRING);
                this.state = 33;
                this.match(PIE3Parser.NUMBER);
                this.state = 34;
                this.match(PIE3Parser.NUMBER);
                this.state = 35;
                this.match(PIE3Parser.LEVELS);
                this.state = 36;
                this.match(PIE3Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PIE3Parser.prototype.level = function () {
        var _localctx = new LevelContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, PIE3Parser.RULE_level);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 38;
                this.match(PIE3Parser.LEVEL);
                this.state = 39;
                this.match(PIE3Parser.NUMBER);
                this.state = 40;
                this.match(PIE3Parser.POINTS);
                this.state = 41;
                this.pointsData();
                this.state = 42;
                this.match(PIE3Parser.POLYGONS);
                this.state = 43;
                this.polygonsData();
                this.state = 44;
                this.match(PIE3Parser.CONNECTORS);
                this.state = 45;
                this.connectorsData();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PIE3Parser.prototype.pointsData = function () {
        var _localctx = new PointsDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, PIE3Parser.RULE_pointsData);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PIE3Parser.NUMBER) {
                    {
                        {
                            this.state = 47;
                            this.point();
                        }
                    }
                    this.state = 52;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PIE3Parser.prototype.point = function () {
        var _localctx = new PointContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, PIE3Parser.RULE_point);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this.match(PIE3Parser.NUMBER);
                this.state = 54;
                this.match(PIE3Parser.NUMBER);
                this.state = 55;
                this.match(PIE3Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PIE3Parser.prototype.polygonsData = function () {
        var _localctx = new PolygonsDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, PIE3Parser.RULE_polygonsData);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PIE3Parser.NUMBER) {
                    {
                        {
                            this.state = 57;
                            this.polygon();
                        }
                    }
                    this.state = 62;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PIE3Parser.prototype.polygon = function () {
        var _localctx = new PolygonContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, PIE3Parser.RULE_polygon);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 63;
                this.match(PIE3Parser.NUMBER);
                this.state = 64;
                this.match(PIE3Parser.NUMBER);
                this.state = 66;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 65;
                                    this.match(PIE3Parser.NUMBER);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 68;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 73;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 70;
                                this.match(PIE3Parser.NUMBER);
                            }
                        }
                    }
                    this.state = 75;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PIE3Parser.prototype.connectorsData = function () {
        var _localctx = new ConnectorsDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, PIE3Parser.RULE_connectorsData);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PIE3Parser.NUMBER) {
                    {
                        {
                            this.state = 76;
                            this.connector();
                        }
                    }
                    this.state = 81;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PIE3Parser.prototype.connector = function () {
        var _localctx = new ConnectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, PIE3Parser.RULE_connector);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this.match(PIE3Parser.NUMBER);
                this.state = 83;
                this.match(PIE3Parser.NUMBER);
                this.state = 84;
                this.match(PIE3Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(PIE3Parser, "_ATN", {
        get: function () {
            if (!PIE3Parser.__ATN) {
                PIE3Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PIE3Parser._serializedATN));
            }
            return PIE3Parser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    PIE3Parser.PIE = 1;
    PIE3Parser.TYPE = 2;
    PIE3Parser.TEXTURE = 3;
    PIE3Parser.LEVELS = 4;
    PIE3Parser.LEVEL = 5;
    PIE3Parser.POINTS = 6;
    PIE3Parser.POLYGONS = 7;
    PIE3Parser.CONNECTORS = 8;
    PIE3Parser.NUMBER = 9;
    PIE3Parser.STRING = 10;
    PIE3Parser.WS = 11;
    PIE3Parser.RULE_pieFile = 0;
    PIE3Parser.RULE_header = 1;
    PIE3Parser.RULE_level = 2;
    PIE3Parser.RULE_pointsData = 3;
    PIE3Parser.RULE_point = 4;
    PIE3Parser.RULE_polygonsData = 5;
    PIE3Parser.RULE_polygon = 6;
    PIE3Parser.RULE_connectorsData = 7;
    PIE3Parser.RULE_connector = 8;
    // tslint:disable:no-trailing-whitespace
    PIE3Parser.ruleNames = [
        "pieFile", "header", "level", "pointsData", "point", "polygonsData", "polygon",
        "connectorsData", "connector",
    ];
    PIE3Parser._LITERAL_NAMES = [
        undefined, "'PIE'", "'TYPE'", "'TEXTURE'", "'LEVELS'", "'LEVEL'", "'POINTS'",
        "'POLYGONS'", "'CONNECTORS'",
    ];
    PIE3Parser._SYMBOLIC_NAMES = [
        undefined, "PIE", "TYPE", "TEXTURE", "LEVELS", "LEVEL", "POINTS", "POLYGONS",
        "CONNECTORS", "NUMBER", "STRING", "WS",
    ];
    PIE3Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PIE3Parser._LITERAL_NAMES, PIE3Parser._SYMBOLIC_NAMES, []);
    PIE3Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\rY\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x06\x02\x17\n\x02\r" +
        "\x02\x0E\x02\x18\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x07\x05" +
        "3\n\x05\f\x05\x0E\x056\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x07" +
        "\x07=\n\x07\f\x07\x0E\x07@\v\x07\x03\b\x03\b\x03\b\x06\bE\n\b\r\b\x0E" +
        "\bF\x03\b\x07\bJ\n\b\f\b\x0E\bM\v\b\x03\t\x07\tP\n\t\f\t\x0E\tS\v\t\x03" +
        "\n\x03\n\x03\n\x03\n\x03\n\x02\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02" +
        "\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x02\x02U\x02\x14\x03\x02\x02" +
        "\x02\x04\x1C\x03\x02\x02\x02\x06(\x03\x02\x02\x02\b4\x03\x02\x02\x02\n" +
        "7\x03\x02\x02\x02\f>\x03\x02\x02\x02\x0EA\x03\x02\x02\x02\x10Q\x03\x02" +
        "\x02\x02\x12T\x03\x02\x02\x02\x14\x16\x05\x04\x03\x02\x15\x17\x05\x06" +
        "\x04\x02\x16\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x16\x03\x02" +
        "\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1B\x07\x02" +
        "\x02\x03\x1B\x03\x03\x02\x02\x02\x1C\x1D\x07\x03\x02\x02\x1D\x1E\x07\v" +
        "\x02\x02\x1E\x1F\x07\x04\x02\x02\x1F \x07\v\x02\x02 !\x07\x05\x02\x02" +
        "!\"\x07\v\x02\x02\"#\x07\f\x02\x02#$\x07\v\x02\x02$%\x07\v\x02\x02%&\x07" +
        "\x06\x02\x02&\'\x07\v\x02\x02\'\x05\x03\x02\x02\x02()\x07\x07\x02\x02" +
        ")*\x07\v\x02\x02*+\x07\b\x02\x02+,\x05\b\x05\x02,-\x07\t\x02\x02-.\x05" +
        "\f\x07\x02./\x07\n\x02\x02/0\x05\x10\t\x020\x07\x03\x02\x02\x0213\x05" +
        "\n\x06\x0221\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03" +
        "\x02\x02\x025\t\x03\x02\x02\x0264\x03\x02\x02\x0278\x07\v\x02\x0289\x07" +
        "\v\x02\x029:\x07\v\x02\x02:\v\x03\x02\x02\x02;=\x05\x0E\b\x02<;\x03\x02" +
        "\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?\r\x03" +
        "\x02\x02\x02@>\x03\x02\x02\x02AB\x07\v\x02\x02BD\x07\v\x02\x02CE\x07\v" +
        "\x02\x02DC\x03\x02\x02\x02EF\x03\x02\x02\x02FD\x03\x02\x02\x02FG\x03\x02" +
        "\x02\x02GK\x03\x02\x02\x02HJ\x07\v\x02\x02IH\x03\x02\x02\x02JM\x03\x02" +
        "\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02L\x0F\x03\x02\x02\x02MK\x03" +
        "\x02\x02\x02NP\x05\x12\n\x02ON\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03" +
        "\x02\x02\x02QR\x03\x02\x02\x02R\x11\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
        "TU\x07\v\x02\x02UV\x07\v\x02\x02VW\x07\v\x02\x02W\x13\x03\x02\x02\x02" +
        "\b\x184>FKQ";
    return PIE3Parser;
}(Parser_1.Parser));
exports.PIE3Parser = PIE3Parser;
var PieFileContext = /** @class */ (function (_super) {
    __extends(PieFileContext, _super);
    function PieFileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PieFileContext.prototype.header = function () {
        return this.getRuleContext(0, HeaderContext);
    };
    PieFileContext.prototype.EOF = function () { return this.getToken(PIE3Parser.EOF, 0); };
    PieFileContext.prototype.level = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LevelContext);
        }
        else {
            return this.getRuleContext(i, LevelContext);
        }
    };
    Object.defineProperty(PieFileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PIE3Parser.RULE_pieFile; },
        enumerable: false,
        configurable: true
    });
    // @Override
    PieFileContext.prototype.enterRule = function (listener) {
        if (listener.enterPieFile) {
            listener.enterPieFile(this);
        }
    };
    // @Override
    PieFileContext.prototype.exitRule = function (listener) {
        if (listener.exitPieFile) {
            listener.exitPieFile(this);
        }
    };
    // @Override
    PieFileContext.prototype.accept = function (visitor) {
        if (visitor.visitPieFile) {
            return visitor.visitPieFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PieFileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PieFileContext = PieFileContext;
var HeaderContext = /** @class */ (function (_super) {
    __extends(HeaderContext, _super);
    function HeaderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HeaderContext.prototype.PIE = function () { return this.getToken(PIE3Parser.PIE, 0); };
    HeaderContext.prototype.NUMBER = function (i) {
        if (i === undefined) {
            return this.getTokens(PIE3Parser.NUMBER);
        }
        else {
            return this.getToken(PIE3Parser.NUMBER, i);
        }
    };
    HeaderContext.prototype.TYPE = function () { return this.getToken(PIE3Parser.TYPE, 0); };
    HeaderContext.prototype.TEXTURE = function () { return this.getToken(PIE3Parser.TEXTURE, 0); };
    HeaderContext.prototype.STRING = function () { return this.getToken(PIE3Parser.STRING, 0); };
    HeaderContext.prototype.LEVELS = function () { return this.getToken(PIE3Parser.LEVELS, 0); };
    Object.defineProperty(HeaderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PIE3Parser.RULE_header; },
        enumerable: false,
        configurable: true
    });
    // @Override
    HeaderContext.prototype.enterRule = function (listener) {
        if (listener.enterHeader) {
            listener.enterHeader(this);
        }
    };
    // @Override
    HeaderContext.prototype.exitRule = function (listener) {
        if (listener.exitHeader) {
            listener.exitHeader(this);
        }
    };
    // @Override
    HeaderContext.prototype.accept = function (visitor) {
        if (visitor.visitHeader) {
            return visitor.visitHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HeaderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HeaderContext = HeaderContext;
var LevelContext = /** @class */ (function (_super) {
    __extends(LevelContext, _super);
    function LevelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LevelContext.prototype.LEVEL = function () { return this.getToken(PIE3Parser.LEVEL, 0); };
    LevelContext.prototype.NUMBER = function () { return this.getToken(PIE3Parser.NUMBER, 0); };
    LevelContext.prototype.POINTS = function () { return this.getToken(PIE3Parser.POINTS, 0); };
    LevelContext.prototype.pointsData = function () {
        return this.getRuleContext(0, PointsDataContext);
    };
    LevelContext.prototype.POLYGONS = function () { return this.getToken(PIE3Parser.POLYGONS, 0); };
    LevelContext.prototype.polygonsData = function () {
        return this.getRuleContext(0, PolygonsDataContext);
    };
    LevelContext.prototype.CONNECTORS = function () { return this.getToken(PIE3Parser.CONNECTORS, 0); };
    LevelContext.prototype.connectorsData = function () {
        return this.getRuleContext(0, ConnectorsDataContext);
    };
    Object.defineProperty(LevelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PIE3Parser.RULE_level; },
        enumerable: false,
        configurable: true
    });
    // @Override
    LevelContext.prototype.enterRule = function (listener) {
        if (listener.enterLevel) {
            listener.enterLevel(this);
        }
    };
    // @Override
    LevelContext.prototype.exitRule = function (listener) {
        if (listener.exitLevel) {
            listener.exitLevel(this);
        }
    };
    // @Override
    LevelContext.prototype.accept = function (visitor) {
        if (visitor.visitLevel) {
            return visitor.visitLevel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LevelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LevelContext = LevelContext;
var PointsDataContext = /** @class */ (function (_super) {
    __extends(PointsDataContext, _super);
    function PointsDataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointsDataContext.prototype.point = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PointContext);
        }
        else {
            return this.getRuleContext(i, PointContext);
        }
    };
    Object.defineProperty(PointsDataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PIE3Parser.RULE_pointsData; },
        enumerable: false,
        configurable: true
    });
    // @Override
    PointsDataContext.prototype.enterRule = function (listener) {
        if (listener.enterPointsData) {
            listener.enterPointsData(this);
        }
    };
    // @Override
    PointsDataContext.prototype.exitRule = function (listener) {
        if (listener.exitPointsData) {
            listener.exitPointsData(this);
        }
    };
    // @Override
    PointsDataContext.prototype.accept = function (visitor) {
        if (visitor.visitPointsData) {
            return visitor.visitPointsData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PointsDataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointsDataContext = PointsDataContext;
var PointContext = /** @class */ (function (_super) {
    __extends(PointContext, _super);
    function PointContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointContext.prototype.NUMBER = function (i) {
        if (i === undefined) {
            return this.getTokens(PIE3Parser.NUMBER);
        }
        else {
            return this.getToken(PIE3Parser.NUMBER, i);
        }
    };
    Object.defineProperty(PointContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PIE3Parser.RULE_point; },
        enumerable: false,
        configurable: true
    });
    // @Override
    PointContext.prototype.enterRule = function (listener) {
        if (listener.enterPoint) {
            listener.enterPoint(this);
        }
    };
    // @Override
    PointContext.prototype.exitRule = function (listener) {
        if (listener.exitPoint) {
            listener.exitPoint(this);
        }
    };
    // @Override
    PointContext.prototype.accept = function (visitor) {
        if (visitor.visitPoint) {
            return visitor.visitPoint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PointContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointContext = PointContext;
var PolygonsDataContext = /** @class */ (function (_super) {
    __extends(PolygonsDataContext, _super);
    function PolygonsDataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PolygonsDataContext.prototype.polygon = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PolygonContext);
        }
        else {
            return this.getRuleContext(i, PolygonContext);
        }
    };
    Object.defineProperty(PolygonsDataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PIE3Parser.RULE_polygonsData; },
        enumerable: false,
        configurable: true
    });
    // @Override
    PolygonsDataContext.prototype.enterRule = function (listener) {
        if (listener.enterPolygonsData) {
            listener.enterPolygonsData(this);
        }
    };
    // @Override
    PolygonsDataContext.prototype.exitRule = function (listener) {
        if (listener.exitPolygonsData) {
            listener.exitPolygonsData(this);
        }
    };
    // @Override
    PolygonsDataContext.prototype.accept = function (visitor) {
        if (visitor.visitPolygonsData) {
            return visitor.visitPolygonsData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PolygonsDataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PolygonsDataContext = PolygonsDataContext;
var PolygonContext = /** @class */ (function (_super) {
    __extends(PolygonContext, _super);
    function PolygonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PolygonContext.prototype.NUMBER = function (i) {
        if (i === undefined) {
            return this.getTokens(PIE3Parser.NUMBER);
        }
        else {
            return this.getToken(PIE3Parser.NUMBER, i);
        }
    };
    Object.defineProperty(PolygonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PIE3Parser.RULE_polygon; },
        enumerable: false,
        configurable: true
    });
    // @Override
    PolygonContext.prototype.enterRule = function (listener) {
        if (listener.enterPolygon) {
            listener.enterPolygon(this);
        }
    };
    // @Override
    PolygonContext.prototype.exitRule = function (listener) {
        if (listener.exitPolygon) {
            listener.exitPolygon(this);
        }
    };
    // @Override
    PolygonContext.prototype.accept = function (visitor) {
        if (visitor.visitPolygon) {
            return visitor.visitPolygon(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PolygonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PolygonContext = PolygonContext;
var ConnectorsDataContext = /** @class */ (function (_super) {
    __extends(ConnectorsDataContext, _super);
    function ConnectorsDataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConnectorsDataContext.prototype.connector = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConnectorContext);
        }
        else {
            return this.getRuleContext(i, ConnectorContext);
        }
    };
    Object.defineProperty(ConnectorsDataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PIE3Parser.RULE_connectorsData; },
        enumerable: false,
        configurable: true
    });
    // @Override
    ConnectorsDataContext.prototype.enterRule = function (listener) {
        if (listener.enterConnectorsData) {
            listener.enterConnectorsData(this);
        }
    };
    // @Override
    ConnectorsDataContext.prototype.exitRule = function (listener) {
        if (listener.exitConnectorsData) {
            listener.exitConnectorsData(this);
        }
    };
    // @Override
    ConnectorsDataContext.prototype.accept = function (visitor) {
        if (visitor.visitConnectorsData) {
            return visitor.visitConnectorsData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConnectorsDataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConnectorsDataContext = ConnectorsDataContext;
var ConnectorContext = /** @class */ (function (_super) {
    __extends(ConnectorContext, _super);
    function ConnectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConnectorContext.prototype.NUMBER = function (i) {
        if (i === undefined) {
            return this.getTokens(PIE3Parser.NUMBER);
        }
        else {
            return this.getToken(PIE3Parser.NUMBER, i);
        }
    };
    Object.defineProperty(ConnectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PIE3Parser.RULE_connector; },
        enumerable: false,
        configurable: true
    });
    // @Override
    ConnectorContext.prototype.enterRule = function (listener) {
        if (listener.enterConnector) {
            listener.enterConnector(this);
        }
    };
    // @Override
    ConnectorContext.prototype.exitRule = function (listener) {
        if (listener.exitConnector) {
            listener.exitConnector(this);
        }
    };
    // @Override
    ConnectorContext.prototype.accept = function (visitor) {
        if (visitor.visitConnector) {
            return visitor.visitConnector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConnectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConnectorContext = ConnectorContext;
//# sourceMappingURL=PIE3Parser.js.map