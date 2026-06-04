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
exports.PIE3Lexer = void 0;
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = __importStar(require("antlr4ts/misc/Utils"));
var PIE3Lexer = /** @class */ (function (_super) {
    __extends(PIE3Lexer, _super);
    // tslint:enable:no-trailing-whitespace
    function PIE3Lexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(PIE3Lexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(PIE3Lexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return PIE3Lexer.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PIE3Lexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "PIE3.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PIE3Lexer.prototype, "ruleNames", {
        // @Override
        get: function () { return PIE3Lexer.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PIE3Lexer.prototype, "serializedATN", {
        // @Override
        get: function () { return PIE3Lexer._serializedATN; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PIE3Lexer.prototype, "channelNames", {
        // @Override
        get: function () { return PIE3Lexer.channelNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PIE3Lexer.prototype, "modeNames", {
        // @Override
        get: function () { return PIE3Lexer.modeNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PIE3Lexer, "_ATN", {
        get: function () {
            if (!PIE3Lexer.__ATN) {
                PIE3Lexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PIE3Lexer._serializedATN));
            }
            return PIE3Lexer.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    PIE3Lexer.PIE = 1;
    PIE3Lexer.TYPE = 2;
    PIE3Lexer.TEXTURE = 3;
    PIE3Lexer.LEVELS = 4;
    PIE3Lexer.LEVEL = 5;
    PIE3Lexer.POINTS = 6;
    PIE3Lexer.POLYGONS = 7;
    PIE3Lexer.CONNECTORS = 8;
    PIE3Lexer.NUMBER = 9;
    PIE3Lexer.STRING = 10;
    PIE3Lexer.WS = 11;
    // tslint:disable:no-trailing-whitespace
    PIE3Lexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    PIE3Lexer.modeNames = [
        "DEFAULT_MODE",
    ];
    PIE3Lexer.ruleNames = [
        "PIE", "TYPE", "TEXTURE", "LEVELS", "LEVEL", "POINTS", "POLYGONS", "CONNECTORS",
        "NUMBER", "STRING", "WS",
    ];
    PIE3Lexer._LITERAL_NAMES = [
        undefined, "'PIE'", "'TYPE'", "'TEXTURE'", "'LEVELS'", "'LEVEL'", "'POINTS'",
        "'POLYGONS'", "'CONNECTORS'",
    ];
    PIE3Lexer._SYMBOLIC_NAMES = [
        undefined, "PIE", "TYPE", "TEXTURE", "LEVELS", "LEVEL", "POINTS", "POLYGONS",
        "CONNECTORS", "NUMBER", "STRING", "WS",
    ];
    PIE3Lexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PIE3Lexer._LITERAL_NAMES, PIE3Lexer._SYMBOLIC_NAMES, []);
    PIE3Lexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\ro\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x06\nT\n\n\r\n\x0E" +
        "\nU\x03\n\x03\n\x06\nZ\n\n\r\n\x0E\n[\x05\n^\n\n\x03\v\x03\v\x07\vb\n" +
        "\v\f\v\x0E\ve\v\v\x03\v\x03\v\x03\f\x06\fj\n\f\r\f\x0E\fk\x03\f\x03\f" +
        "\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
        "\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x03\x02\x05" +
        "\x03\x022;\x03\x02$$\x05\x02\v\f\x0F\x0F\"\"\x02s\x02\x03\x03\x02\x02" +
        "\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
        "\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
        "\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
        "\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1D\x03\x02\x02\x02" +
        "\x07\"\x03\x02\x02\x02\t*\x03\x02\x02\x02\v1\x03\x02\x02\x02\r7\x03\x02" +
        "\x02\x02\x0F>\x03\x02\x02\x02\x11G\x03\x02\x02\x02\x13S\x03\x02\x02\x02" +
        "\x15_\x03\x02\x02\x02\x17i\x03\x02\x02\x02\x19\x1A\x07R\x02\x02\x1A\x1B" +
        "\x07K\x02\x02\x1B\x1C\x07G\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E\x07" +
        "V\x02\x02\x1E\x1F\x07[\x02\x02\x1F \x07R\x02\x02 !\x07G\x02\x02!\x06\x03" +
        "\x02\x02\x02\"#\x07V\x02\x02#$\x07G\x02\x02$%\x07Z\x02\x02%&\x07V\x02" +
        "\x02&\'\x07W\x02\x02\'(\x07T\x02\x02()\x07G\x02\x02)\b\x03\x02\x02\x02" +
        "*+\x07N\x02\x02+,\x07G\x02\x02,-\x07X\x02\x02-.\x07G\x02\x02./\x07N\x02" +
        "\x02/0\x07U\x02\x020\n\x03\x02\x02\x0212\x07N\x02\x0223\x07G\x02\x023" +
        "4\x07X\x02\x0245\x07G\x02\x0256\x07N\x02\x026\f\x03\x02\x02\x0278\x07" +
        "R\x02\x0289\x07Q\x02\x029:\x07K\x02\x02:;\x07P\x02\x02;<\x07V\x02\x02" +
        "<=\x07U\x02\x02=\x0E\x03\x02\x02\x02>?\x07R\x02\x02?@\x07Q\x02\x02@A\x07" +
        "N\x02\x02AB\x07[\x02\x02BC\x07I\x02\x02CD\x07Q\x02\x02DE\x07P\x02\x02" +
        "EF\x07U\x02\x02F\x10\x03\x02\x02\x02GH\x07E\x02\x02HI\x07Q\x02\x02IJ\x07" +
        "P\x02\x02JK\x07P\x02\x02KL\x07G\x02\x02LM\x07E\x02\x02MN\x07V\x02\x02" +
        "NO\x07Q\x02\x02OP\x07T\x02\x02PQ\x07U\x02\x02Q\x12\x03\x02\x02\x02RT\t" +
        "\x02\x02\x02SR\x03\x02\x02\x02TU\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03" +
        "\x02\x02\x02V]\x03\x02\x02\x02WY\x070\x02\x02XZ\t\x02\x02\x02YX\x03\x02" +
        "\x02\x02Z[\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\^\x03" +
        "\x02\x02\x02]W\x03\x02\x02\x02]^\x03\x02\x02\x02^\x14\x03\x02\x02\x02" +
        "_c\x07$\x02\x02`b\n\x03\x02\x02a`\x03\x02\x02\x02be\x03\x02\x02\x02ca" +
        "\x03\x02\x02\x02cd\x03\x02\x02\x02df\x03\x02\x02\x02ec\x03\x02\x02\x02" +
        "fg\x07$\x02\x02g\x16\x03\x02\x02\x02hj\t\x04\x02\x02ih\x03\x02\x02\x02" +
        "jk\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02" +
        "mn\b\f\x02\x02n\x18\x03\x02\x02\x02\b\x02U[]ck\x03\b\x02\x02";
    return PIE3Lexer;
}(Lexer_1.Lexer));
exports.PIE3Lexer = PIE3Lexer;
//# sourceMappingURL=PIE3Lexer.js.map