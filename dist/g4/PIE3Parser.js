// Generated from ./g4/PIE3.g4 by ANTLR 4.9.0-SNAPSHOT
import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Token } from "antlr4ts/Token";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import * as Utils from "antlr4ts/misc/Utils";
export class PIE3Parser extends Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return PIE3Parser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "PIE3.g4"; }
    // @Override
    get ruleNames() { return PIE3Parser.ruleNames; }
    // @Override
    get serializedATN() { return PIE3Parser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator(PIE3Parser._ATN, this);
    }
    // @RuleVersion(0)
    pieFile() {
        let _localctx = new PieFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, PIE3Parser.RULE_pieFile);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this.pieHeader();
                this.state = 61;
                this.pieBody();
                this.state = 62;
                this.match(PIE3Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    pieHeader() {
        let _localctx = new PieHeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, PIE3Parser.RULE_pieHeader);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 64;
                this.match(PIE3Parser.PIE);
                this.state = 65;
                this.pieVersion();
                this.state = 66;
                this.match(PIE3Parser.NL);
                this.state = 68;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PIE3Parser.TYPE) {
                    {
                        this.state = 67;
                        this.typeInfo();
                    }
                }
                this.state = 71;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PIE3Parser.INTERPOLATE) {
                    {
                        this.state = 70;
                        this.interpolateInfo();
                    }
                }
                this.state = 74;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PIE3Parser.TEXTURE) {
                    {
                        this.state = 73;
                        this.textureInfo();
                    }
                }
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PIE3Parser.EVENT) {
                    {
                        {
                            this.state = 76;
                            this.eventInfo();
                        }
                    }
                    this.state = 81;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PIE3Parser.NORMALMAP) {
                    {
                        this.state = 82;
                        this.normalMap();
                    }
                }
                this.state = 86;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PIE3Parser.SPECULARMAP) {
                    {
                        this.state = 85;
                        this.specularMap();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    pieBody() {
        let _localctx = new PieBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, PIE3Parser.RULE_pieBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 88;
                this.levelsHeader();
                this.state = 89;
                this.levelList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    levelsHeader() {
        let _localctx = new LevelsHeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, PIE3Parser.RULE_levelsHeader);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 91;
                this.match(PIE3Parser.LEVELS);
                this.state = 92;
                this.match(PIE3Parser.INT);
                this.state = 93;
                this.match(PIE3Parser.NL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    levelList() {
        let _localctx = new LevelListContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, PIE3Parser.RULE_levelList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 95;
                            this.level();
                        }
                    }
                    this.state = 98;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === PIE3Parser.LEVEL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    level() {
        let _localctx = new LevelContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, PIE3Parser.RULE_level);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this.match(PIE3Parser.LEVEL);
                this.state = 101;
                this.match(PIE3Parser.INT);
                this.state = 102;
                this.match(PIE3Parser.NL);
                this.state = 110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE3Parser.POINTS) | (1 << PIE3Parser.POLYGONS) | (1 << PIE3Parser.CONNECTORS) | (1 << PIE3Parser.NORMALS) | (1 << PIE3Parser.ANIMOBJECT))) !== 0)) {
                    {
                        this.state = 108;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case PIE3Parser.POINTS:
                                {
                                    this.state = 103;
                                    this.pointsData();
                                }
                                break;
                            case PIE3Parser.NORMALS:
                                {
                                    this.state = 104;
                                    this.normalsData();
                                }
                                break;
                            case PIE3Parser.POLYGONS:
                                {
                                    this.state = 105;
                                    this.polygonsData();
                                }
                                break;
                            case PIE3Parser.CONNECTORS:
                                {
                                    this.state = 106;
                                    this.connectorData();
                                }
                                break;
                            case PIE3Parser.ANIMOBJECT:
                                {
                                    this.state = 107;
                                    this.animObjectData();
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                    }
                    this.state = 112;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pieVersion() {
        let _localctx = new PieVersionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, PIE3Parser.RULE_pieVersion);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.match(PIE3Parser.INT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    typeInfo() {
        let _localctx = new TypeInfoContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, PIE3Parser.RULE_typeInfo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this.match(PIE3Parser.TYPE);
                this.state = 116;
                this.match(PIE3Parser.INT);
                this.state = 117;
                this.match(PIE3Parser.NL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    interpolateInfo() {
        let _localctx = new InterpolateInfoContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, PIE3Parser.RULE_interpolateInfo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 119;
                this.match(PIE3Parser.INTERPOLATE);
                this.state = 120;
                this.match(PIE3Parser.INT);
                this.state = 121;
                this.match(PIE3Parser.NL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    eventInfo() {
        let _localctx = new EventInfoContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, PIE3Parser.RULE_eventInfo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 123;
                this.match(PIE3Parser.EVENT);
                this.state = 124;
                this.match(PIE3Parser.INT);
                this.state = 125;
                this.match(PIE3Parser.STRING);
                this.state = 126;
                this.match(PIE3Parser.NL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    textureInfo() {
        let _localctx = new TextureInfoContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, PIE3Parser.RULE_textureInfo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 128;
                this.match(PIE3Parser.TEXTURE);
                this.state = 129;
                this.match(PIE3Parser.INT);
                this.state = 130;
                this.match(PIE3Parser.STRING);
                this.state = 131;
                this.match(PIE3Parser.INT);
                this.state = 132;
                this.match(PIE3Parser.INT);
                this.state = 133;
                this.match(PIE3Parser.NL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    normalMap() {
        let _localctx = new NormalMapContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, PIE3Parser.RULE_normalMap);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 135;
                this.match(PIE3Parser.NORMALMAP);
                this.state = 136;
                this.match(PIE3Parser.INT);
                this.state = 137;
                this.match(PIE3Parser.STRING);
                this.state = 138;
                this.match(PIE3Parser.NL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    specularMap() {
        let _localctx = new SpecularMapContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, PIE3Parser.RULE_specularMap);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.match(PIE3Parser.SPECULARMAP);
                this.state = 141;
                this.match(PIE3Parser.INT);
                this.state = 142;
                this.match(PIE3Parser.STRING);
                this.state = 143;
                this.match(PIE3Parser.NL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    pointsData() {
        let _localctx = new PointsDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, PIE3Parser.RULE_pointsData);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this.match(PIE3Parser.POINTS);
                this.state = 146;
                this.match(PIE3Parser.INT);
                this.state = 147;
                this.match(PIE3Parser.NL);
                this.state = 148;
                this.pointList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    pointList() {
        let _localctx = new PointListContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, PIE3Parser.RULE_pointList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 151;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 150;
                            this.point();
                        }
                    }
                    this.state = 153;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE3Parser.INT) | (1 << PIE3Parser.FLOAT) | (1 << PIE3Parser.NEG_NUMBER) | (1 << PIE3Parser.SCI_NUMBER) | (1 << PIE3Parser.NEG_SCI_NUMBER))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    point() {
        let _localctx = new PointContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, PIE3Parser.RULE_point);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 155;
                this.number();
                this.state = 156;
                this.number();
                this.state = 157;
                this.number();
                this.state = 158;
                _la = this._input.LA(1);
                if (!(_la === PIE3Parser.EOF || _la === PIE3Parser.NL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    normalsData() {
        let _localctx = new NormalsDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, PIE3Parser.RULE_normalsData);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                this.match(PIE3Parser.NORMALS);
                this.state = 161;
                this.match(PIE3Parser.INT);
                this.state = 162;
                this.match(PIE3Parser.NL);
                this.state = 163;
                this.normalsList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    normalsList() {
        let _localctx = new NormalsListContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, PIE3Parser.RULE_normalsList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 165;
                            this.normal();
                        }
                    }
                    this.state = 168;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE3Parser.INT) | (1 << PIE3Parser.FLOAT) | (1 << PIE3Parser.NEG_NUMBER) | (1 << PIE3Parser.SCI_NUMBER) | (1 << PIE3Parser.NEG_SCI_NUMBER))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    normal() {
        let _localctx = new NormalContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, PIE3Parser.RULE_normal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 170;
                this.number();
                this.state = 171;
                this.number();
                this.state = 172;
                this.number();
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE3Parser.INT) | (1 << PIE3Parser.FLOAT) | (1 << PIE3Parser.NEG_NUMBER) | (1 << PIE3Parser.SCI_NUMBER) | (1 << PIE3Parser.NEG_SCI_NUMBER))) !== 0)) {
                    {
                        {
                            this.state = 173;
                            this.number();
                            this.state = 174;
                            this.number();
                            this.state = 175;
                            this.number();
                        }
                    }
                    this.state = 181;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 182;
                _la = this._input.LA(1);
                if (!(_la === PIE3Parser.EOF || _la === PIE3Parser.NL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    number() {
        let _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, PIE3Parser.RULE_number);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE3Parser.INT) | (1 << PIE3Parser.FLOAT) | (1 << PIE3Parser.NEG_NUMBER) | (1 << PIE3Parser.SCI_NUMBER) | (1 << PIE3Parser.NEG_SCI_NUMBER))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    polygonsData() {
        let _localctx = new PolygonsDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, PIE3Parser.RULE_polygonsData);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this.match(PIE3Parser.POLYGONS);
                this.state = 187;
                this.match(PIE3Parser.INT);
                this.state = 188;
                this.match(PIE3Parser.NL);
                this.state = 189;
                this.polygonList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    polygonList() {
        let _localctx = new PolygonListContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, PIE3Parser.RULE_polygonList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 191;
                            this.polygon();
                        }
                    }
                    this.state = 194;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === PIE3Parser.INT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    polygon() {
        let _localctx = new PolygonContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, PIE3Parser.RULE_polygon);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this.match(PIE3Parser.INT);
                this.state = 197;
                this.match(PIE3Parser.INT);
                this.state = 198;
                this.cornerData();
                this.state = 204;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE3Parser.INT) | (1 << PIE3Parser.FLOAT) | (1 << PIE3Parser.NEG_NUMBER) | (1 << PIE3Parser.SCI_NUMBER) | (1 << PIE3Parser.NEG_SCI_NUMBER))) !== 0)) {
                    {
                        {
                            this.state = 199;
                            this.number();
                            this.state = 200;
                            this.number();
                        }
                    }
                    this.state = 206;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 207;
                _la = this._input.LA(1);
                if (!(_la === PIE3Parser.EOF || _la === PIE3Parser.NL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    cornerData() {
        let _localctx = new CornerDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, PIE3Parser.RULE_cornerData);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 209;
                                    this.match(PIE3Parser.INT);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 212;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    connectorData() {
        let _localctx = new ConnectorDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, PIE3Parser.RULE_connectorData);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this.match(PIE3Parser.CONNECTORS);
                this.state = 215;
                this.match(PIE3Parser.INT);
                this.state = 216;
                this.match(PIE3Parser.NL);
                this.state = 217;
                this.connectorList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    connectorList() {
        let _localctx = new ConnectorListContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, PIE3Parser.RULE_connectorList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 219;
                            this.connector();
                        }
                    }
                    this.state = 222;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PIE3Parser.INT) | (1 << PIE3Parser.FLOAT) | (1 << PIE3Parser.NEG_NUMBER) | (1 << PIE3Parser.SCI_NUMBER) | (1 << PIE3Parser.NEG_SCI_NUMBER))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    connector() {
        let _localctx = new ConnectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, PIE3Parser.RULE_connector);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.number();
                this.state = 225;
                this.number();
                this.state = 226;
                this.number();
                this.state = 227;
                _la = this._input.LA(1);
                if (!(_la === PIE3Parser.EOF || _la === PIE3Parser.NL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    animObjectData() {
        let _localctx = new AnimObjectDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, PIE3Parser.RULE_animObjectData);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.match(PIE3Parser.ANIMOBJECT);
                this.state = 230;
                this.match(PIE3Parser.INT);
                this.state = 231;
                this.match(PIE3Parser.INT);
                this.state = 232;
                this.match(PIE3Parser.INT);
                this.state = 233;
                this.match(PIE3Parser.NL);
                this.state = 234;
                this.animFrameList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    animFrameList() {
        let _localctx = new AnimFrameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, PIE3Parser.RULE_animFrameList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 236;
                            this.animFrame();
                        }
                    }
                    this.state = 239;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === PIE3Parser.INT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    }
    // @RuleVersion(0)
    animFrame() {
        let _localctx = new AnimFrameContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, PIE3Parser.RULE_animFrame);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                this.match(PIE3Parser.INT);
                this.state = 242;
                this.number();
                this.state = 243;
                this.number();
                this.state = 244;
                this.number();
                this.state = 245;
                this.number();
                this.state = 246;
                this.number();
                this.state = 247;
                this.number();
                this.state = 248;
                this.number();
                this.state = 249;
                this.number();
                this.state = 250;
                this.number();
                this.state = 251;
                _la = this._input.LA(1);
                if (!(_la === PIE3Parser.EOF || _la === PIE3Parser.NL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!PIE3Parser.__ATN) {
            PIE3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PIE3Parser._serializedATN));
        }
        return PIE3Parser.__ATN;
    }
}
PIE3Parser.PIE = 1;
PIE3Parser.TYPE = 2;
PIE3Parser.INTERPOLATE = 3;
PIE3Parser.EVENT = 4;
PIE3Parser.TEXTURE = 5;
PIE3Parser.NORMALMAP = 6;
PIE3Parser.SPECULARMAP = 7;
PIE3Parser.LEVELS = 8;
PIE3Parser.LEVEL = 9;
PIE3Parser.POINTS = 10;
PIE3Parser.POLYGONS = 11;
PIE3Parser.CONNECTORS = 12;
PIE3Parser.NORMALS = 13;
PIE3Parser.ANIMOBJECT = 14;
PIE3Parser.INT = 15;
PIE3Parser.FLOAT = 16;
PIE3Parser.NEG_NUMBER = 17;
PIE3Parser.SCI_NUMBER = 18;
PIE3Parser.NEG_SCI_NUMBER = 19;
PIE3Parser.STRING = 20;
PIE3Parser.NL = 21;
PIE3Parser.WS = 22;
PIE3Parser.COMMENT = 23;
PIE3Parser.RULE_pieFile = 0;
PIE3Parser.RULE_pieHeader = 1;
PIE3Parser.RULE_pieBody = 2;
PIE3Parser.RULE_levelsHeader = 3;
PIE3Parser.RULE_levelList = 4;
PIE3Parser.RULE_level = 5;
PIE3Parser.RULE_pieVersion = 6;
PIE3Parser.RULE_typeInfo = 7;
PIE3Parser.RULE_interpolateInfo = 8;
PIE3Parser.RULE_eventInfo = 9;
PIE3Parser.RULE_textureInfo = 10;
PIE3Parser.RULE_normalMap = 11;
PIE3Parser.RULE_specularMap = 12;
PIE3Parser.RULE_pointsData = 13;
PIE3Parser.RULE_pointList = 14;
PIE3Parser.RULE_point = 15;
PIE3Parser.RULE_normalsData = 16;
PIE3Parser.RULE_normalsList = 17;
PIE3Parser.RULE_normal = 18;
PIE3Parser.RULE_number = 19;
PIE3Parser.RULE_polygonsData = 20;
PIE3Parser.RULE_polygonList = 21;
PIE3Parser.RULE_polygon = 22;
PIE3Parser.RULE_cornerData = 23;
PIE3Parser.RULE_connectorData = 24;
PIE3Parser.RULE_connectorList = 25;
PIE3Parser.RULE_connector = 26;
PIE3Parser.RULE_animObjectData = 27;
PIE3Parser.RULE_animFrameList = 28;
PIE3Parser.RULE_animFrame = 29;
// tslint:disable:no-trailing-whitespace
PIE3Parser.ruleNames = [
    "pieFile", "pieHeader", "pieBody", "levelsHeader", "levelList", "level",
    "pieVersion", "typeInfo", "interpolateInfo", "eventInfo", "textureInfo",
    "normalMap", "specularMap", "pointsData", "pointList", "point", "normalsData",
    "normalsList", "normal", "number", "polygonsData", "polygonList", "polygon",
    "cornerData", "connectorData", "connectorList", "connector", "animObjectData",
    "animFrameList", "animFrame",
];
PIE3Parser._LITERAL_NAMES = [
    undefined, "'PIE'", "'TYPE'", "'INTERPOLATE'", "'EVENT'", "'TEXTURE'",
    "'NORMALMAP'", "'SPECULARMAP'", "'LEVELS'", "'LEVEL'", "'POINTS'", "'POLYGONS'",
    "'CONNECTORS'", "'NORMALS'", "'ANIMOBJECT'",
];
PIE3Parser._SYMBOLIC_NAMES = [
    undefined, "PIE", "TYPE", "INTERPOLATE", "EVENT", "TEXTURE", "NORMALMAP",
    "SPECULARMAP", "LEVELS", "LEVEL", "POINTS", "POLYGONS", "CONNECTORS",
    "NORMALS", "ANIMOBJECT", "INT", "FLOAT", "NEG_NUMBER", "SCI_NUMBER", "NEG_SCI_NUMBER",
    "STRING", "NL", "WS", "COMMENT",
];
PIE3Parser.VOCABULARY = new VocabularyImpl(PIE3Parser._LITERAL_NAMES, PIE3Parser._SYMBOLIC_NAMES, []);
PIE3Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\u0100\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
    "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
    "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x02\x03" +
    "\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03G\n\x03\x03\x03\x05\x03J\n" +
    "\x03\x03\x03\x05\x03M\n\x03\x03\x03\x07\x03P\n\x03\f\x03\x0E\x03S\v\x03" +
    "\x03\x03\x05\x03V\n\x03\x03\x03\x05\x03Y\n\x03\x03\x04\x03\x04\x03\x04" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x06\x06c\n\x06\r\x06\x0E\x06" +
    "d\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07" +
    "\x07o\n\x07\f\x07\x0E\x07r\v\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
    "\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
    "\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x06" +
    "\x10\x9A\n\x10\r\x10\x0E\x10\x9B\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x06\x13\xA9\n\x13\r\x13" +
    "\x0E\x13\xAA\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07" +
    "\x14\xB4\n\x14\f\x14\x0E\x14\xB7\v\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
    "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x06\x17\xC3\n\x17\r\x17" +
    "\x0E\x17\xC4\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\xCD" +
    "\n\x18\f\x18\x0E\x18\xD0\v\x18\x03\x18\x03\x18\x03\x19\x06\x19\xD5\n\x19" +
    "\r\x19\x0E\x19\xD6\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x06" +
    "\x1B\xDF\n\x1B\r\x1B\x0E\x1B\xE0\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
    "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x06\x1E" +
    "\xF0\n\x1E\r\x1E\x0E\x1E\xF1\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
    "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x02\x02\x02" +
    " \x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
    "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
    "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02\x02\x04\x03\x03\x17" +
    "\x17\x03\x02\x11\x15\x02\xF5\x02>\x03\x02\x02\x02\x04B\x03\x02\x02\x02" +
    "\x06Z\x03\x02\x02\x02\b]\x03\x02\x02\x02\nb\x03\x02\x02\x02\ff\x03\x02" +
    "\x02\x02\x0Es\x03\x02\x02\x02\x10u\x03\x02\x02\x02\x12y\x03\x02\x02\x02" +
    "\x14}\x03\x02\x02\x02\x16\x82\x03\x02\x02\x02\x18\x89\x03\x02\x02\x02" +
    "\x1A\x8E\x03\x02\x02\x02\x1C\x93\x03\x02\x02\x02\x1E\x99\x03\x02\x02\x02" +
    " \x9D\x03\x02\x02\x02\"\xA2\x03\x02\x02\x02$\xA8\x03\x02\x02\x02&\xAC" +
    "\x03\x02\x02\x02(\xBA\x03\x02\x02\x02*\xBC\x03\x02\x02\x02,\xC2\x03\x02" +
    "\x02\x02.\xC6\x03\x02\x02\x020\xD4\x03\x02\x02\x022\xD8\x03\x02\x02\x02" +
    "4\xDE\x03\x02\x02\x026\xE2\x03\x02\x02\x028\xE7\x03\x02\x02\x02:\xEF\x03" +
    "\x02\x02\x02<\xF3\x03\x02\x02\x02>?\x05\x04\x03\x02?@\x05\x06\x04\x02" +
    "@A\x07\x02\x02\x03A\x03\x03\x02\x02\x02BC\x07\x03\x02\x02CD\x05\x0E\b" +
    "\x02DF\x07\x17\x02\x02EG\x05\x10\t\x02FE\x03\x02\x02\x02FG\x03\x02\x02" +
    "\x02GI\x03\x02\x02\x02HJ\x05\x12\n\x02IH\x03\x02\x02\x02IJ\x03\x02\x02" +
    "\x02JL\x03\x02\x02\x02KM\x05\x16\f\x02LK\x03\x02\x02\x02LM\x03\x02\x02" +
    "\x02MQ\x03\x02\x02\x02NP\x05\x14\v\x02ON\x03\x02\x02\x02PS\x03\x02\x02" +
    "\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02" +
    "\x02TV\x05\x18\r\x02UT\x03\x02\x02\x02UV\x03\x02\x02\x02VX\x03\x02\x02" +
    "\x02WY\x05\x1A\x0E\x02XW\x03\x02\x02\x02XY\x03\x02\x02\x02Y\x05\x03\x02" +
    "\x02\x02Z[\x05\b\x05\x02[\\\x05\n\x06\x02\\\x07\x03\x02\x02\x02]^\x07" +
    "\n\x02\x02^_\x07\x11\x02\x02_`\x07\x17\x02\x02`\t\x03\x02\x02\x02ac\x05" +
    "\f\x07\x02ba\x03\x02\x02\x02cd\x03\x02\x02\x02db\x03\x02\x02\x02de\x03" +
    "\x02\x02\x02e\v\x03\x02\x02\x02fg\x07\v\x02\x02gh\x07\x11\x02\x02hp\x07" +
    "\x17\x02\x02io\x05\x1C\x0F\x02jo\x05\"\x12\x02ko\x05*\x16\x02lo\x052\x1A" +
    "\x02mo\x058\x1D\x02ni\x03\x02\x02\x02nj\x03\x02\x02\x02nk\x03\x02\x02" +
    "\x02nl\x03\x02\x02\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02" +
    "\x02pq\x03\x02\x02\x02q\r\x03\x02\x02\x02rp\x03\x02\x02\x02st\x07\x11" +
    "\x02\x02t\x0F\x03\x02\x02\x02uv\x07\x04\x02\x02vw\x07\x11\x02\x02wx\x07" +
    "\x17\x02\x02x\x11\x03\x02\x02\x02yz\x07\x05\x02\x02z{\x07\x11\x02\x02" +
    "{|\x07\x17\x02\x02|\x13\x03\x02\x02\x02}~\x07\x06\x02\x02~\x7F\x07\x11" +
    "\x02\x02\x7F\x80\x07\x16\x02\x02\x80\x81\x07\x17\x02\x02\x81\x15\x03\x02" +
    "\x02\x02\x82\x83\x07\x07\x02\x02\x83\x84\x07\x11\x02\x02\x84\x85\x07\x16" +
    "\x02\x02\x85\x86\x07\x11\x02\x02\x86\x87\x07\x11\x02\x02\x87\x88\x07\x17" +
    "\x02\x02\x88\x17\x03\x02\x02\x02\x89\x8A\x07\b\x02\x02\x8A\x8B\x07\x11" +
    "\x02\x02\x8B\x8C\x07\x16\x02\x02\x8C\x8D\x07\x17\x02\x02\x8D\x19\x03\x02" +
    "\x02\x02\x8E\x8F\x07\t\x02\x02\x8F\x90\x07\x11\x02\x02\x90\x91\x07\x16" +
    "\x02\x02\x91\x92\x07\x17\x02\x02\x92\x1B\x03\x02\x02\x02\x93\x94\x07\f" +
    "\x02\x02\x94\x95\x07\x11\x02\x02\x95\x96\x07\x17\x02\x02\x96\x97\x05\x1E" +
    "\x10\x02\x97\x1D\x03\x02\x02\x02\x98\x9A\x05 \x11\x02\x99\x98\x03\x02" +
    "\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02" +
    "\x02\x02\x9C\x1F\x03\x02\x02\x02\x9D\x9E\x05(\x15\x02\x9E\x9F\x05(\x15" +
    "\x02\x9F\xA0\x05(\x15\x02\xA0\xA1\t\x02\x02\x02\xA1!\x03\x02\x02\x02\xA2" +
    "\xA3\x07\x0F\x02\x02\xA3\xA4\x07\x11\x02\x02\xA4\xA5\x07\x17\x02\x02\xA5" +
    "\xA6\x05$\x13\x02\xA6#\x03\x02\x02\x02\xA7\xA9\x05&\x14\x02\xA8\xA7\x03" +
    "\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03" +
    "\x02\x02\x02\xAB%\x03\x02\x02\x02\xAC\xAD\x05(\x15\x02\xAD\xAE\x05(\x15" +
    "\x02\xAE\xB5\x05(\x15\x02\xAF\xB0\x05(\x15\x02\xB0\xB1\x05(\x15\x02\xB1" +
    "\xB2\x05(\x15\x02\xB2\xB4\x03\x02\x02\x02\xB3\xAF\x03\x02\x02\x02\xB4" +
    "\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6" +
    "\xB8\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xB9\t\x02\x02\x02\xB9" +
    "\'\x03\x02\x02\x02\xBA\xBB\t\x03\x02\x02\xBB)\x03\x02\x02\x02\xBC\xBD" +
    "\x07\r\x02\x02\xBD\xBE\x07\x11\x02\x02\xBE\xBF\x07\x17\x02\x02\xBF\xC0" +
    "\x05,\x17\x02\xC0+\x03\x02\x02\x02\xC1\xC3\x05.\x18\x02\xC2\xC1\x03\x02" +
    "\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02" +
    "\x02\x02\xC5-\x03\x02\x02\x02\xC6\xC7\x07\x11\x02\x02\xC7\xC8\x07\x11" +
    "\x02\x02\xC8\xCE\x050\x19\x02\xC9\xCA\x05(\x15\x02\xCA\xCB\x05(\x15\x02" +
    "\xCB\xCD\x03\x02\x02\x02\xCC\xC9\x03\x02\x02\x02\xCD\xD0\x03\x02\x02\x02" +
    "\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02\x02\x02" +
    "\xD0\xCE\x03\x02\x02\x02\xD1\xD2\t\x02\x02\x02\xD2/\x03\x02\x02\x02\xD3" +
    "\xD5\x07\x11\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6" +
    "\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD71\x03\x02\x02\x02\xD8" +
    "\xD9\x07\x0E\x02\x02\xD9\xDA\x07\x11\x02\x02\xDA\xDB\x07\x17\x02\x02\xDB" +
    "\xDC\x054\x1B\x02\xDC3\x03\x02\x02\x02\xDD\xDF\x056\x1C\x02\xDE\xDD\x03" +
    "\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03" +
    "\x02\x02\x02\xE15\x03\x02\x02\x02\xE2\xE3\x05(\x15\x02\xE3\xE4\x05(\x15" +
    "\x02\xE4\xE5\x05(\x15\x02\xE5\xE6\t\x02\x02\x02\xE67\x03\x02\x02\x02\xE7" +
    "\xE8\x07\x10\x02\x02\xE8\xE9\x07\x11\x02\x02\xE9\xEA\x07\x11\x02\x02\xEA" +
    "\xEB\x07\x11\x02\x02\xEB\xEC\x07\x17\x02\x02\xEC\xED\x05:\x1E\x02\xED" +
    "9\x03\x02\x02\x02\xEE\xF0\x05<\x1F\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF1" +
    "\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2;" +
    "\x03\x02\x02\x02\xF3\xF4\x07\x11\x02\x02\xF4\xF5\x05(\x15\x02\xF5\xF6" +
    "\x05(\x15\x02\xF6\xF7\x05(\x15\x02\xF7\xF8\x05(\x15\x02\xF8\xF9\x05(\x15" +
    "\x02\xF9\xFA\x05(\x15\x02\xFA\xFB\x05(\x15\x02\xFB\xFC\x05(\x15\x02\xFC" +
    "\xFD\x05(\x15\x02\xFD\xFE\t\x02\x02\x02\xFE=\x03\x02\x02\x02\x13FILQU" +
    "Xdnp\x9B\xAA\xB5\xC4\xCE\xD6\xE0\xF1";
export class PieFileContext extends ParserRuleContext {
    pieHeader() {
        return this.getRuleContext(0, PieHeaderContext);
    }
    pieBody() {
        return this.getRuleContext(0, PieBodyContext);
    }
    EOF() { return this.getToken(PIE3Parser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_pieFile; }
    // @Override
    enterRule(listener) {
        if (listener.enterPieFile) {
            listener.enterPieFile(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPieFile) {
            listener.exitPieFile(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPieFile) {
            return visitor.visitPieFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PieHeaderContext extends ParserRuleContext {
    PIE() { return this.getToken(PIE3Parser.PIE, 0); }
    pieVersion() {
        return this.getRuleContext(0, PieVersionContext);
    }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    typeInfo() {
        return this.tryGetRuleContext(0, TypeInfoContext);
    }
    interpolateInfo() {
        return this.tryGetRuleContext(0, InterpolateInfoContext);
    }
    textureInfo() {
        return this.tryGetRuleContext(0, TextureInfoContext);
    }
    eventInfo(i) {
        if (i === undefined) {
            return this.getRuleContexts(EventInfoContext);
        }
        else {
            return this.getRuleContext(i, EventInfoContext);
        }
    }
    normalMap() {
        return this.tryGetRuleContext(0, NormalMapContext);
    }
    specularMap() {
        return this.tryGetRuleContext(0, SpecularMapContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_pieHeader; }
    // @Override
    enterRule(listener) {
        if (listener.enterPieHeader) {
            listener.enterPieHeader(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPieHeader) {
            listener.exitPieHeader(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPieHeader) {
            return visitor.visitPieHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PieBodyContext extends ParserRuleContext {
    levelsHeader() {
        return this.getRuleContext(0, LevelsHeaderContext);
    }
    levelList() {
        return this.getRuleContext(0, LevelListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_pieBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterPieBody) {
            listener.enterPieBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPieBody) {
            listener.exitPieBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPieBody) {
            return visitor.visitPieBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LevelsHeaderContext extends ParserRuleContext {
    LEVELS() { return this.getToken(PIE3Parser.LEVELS, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_levelsHeader; }
    // @Override
    enterRule(listener) {
        if (listener.enterLevelsHeader) {
            listener.enterLevelsHeader(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLevelsHeader) {
            listener.exitLevelsHeader(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLevelsHeader) {
            return visitor.visitLevelsHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LevelListContext extends ParserRuleContext {
    level(i) {
        if (i === undefined) {
            return this.getRuleContexts(LevelContext);
        }
        else {
            return this.getRuleContext(i, LevelContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_levelList; }
    // @Override
    enterRule(listener) {
        if (listener.enterLevelList) {
            listener.enterLevelList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLevelList) {
            listener.exitLevelList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLevelList) {
            return visitor.visitLevelList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LevelContext extends ParserRuleContext {
    LEVEL() { return this.getToken(PIE3Parser.LEVEL, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    pointsData(i) {
        if (i === undefined) {
            return this.getRuleContexts(PointsDataContext);
        }
        else {
            return this.getRuleContext(i, PointsDataContext);
        }
    }
    normalsData(i) {
        if (i === undefined) {
            return this.getRuleContexts(NormalsDataContext);
        }
        else {
            return this.getRuleContext(i, NormalsDataContext);
        }
    }
    polygonsData(i) {
        if (i === undefined) {
            return this.getRuleContexts(PolygonsDataContext);
        }
        else {
            return this.getRuleContext(i, PolygonsDataContext);
        }
    }
    connectorData(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConnectorDataContext);
        }
        else {
            return this.getRuleContext(i, ConnectorDataContext);
        }
    }
    animObjectData(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnimObjectDataContext);
        }
        else {
            return this.getRuleContext(i, AnimObjectDataContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_level; }
    // @Override
    enterRule(listener) {
        if (listener.enterLevel) {
            listener.enterLevel(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLevel) {
            listener.exitLevel(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLevel) {
            return visitor.visitLevel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PieVersionContext extends ParserRuleContext {
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_pieVersion; }
    // @Override
    enterRule(listener) {
        if (listener.enterPieVersion) {
            listener.enterPieVersion(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPieVersion) {
            listener.exitPieVersion(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPieVersion) {
            return visitor.visitPieVersion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeInfoContext extends ParserRuleContext {
    TYPE() { return this.getToken(PIE3Parser.TYPE, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_typeInfo; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeInfo) {
            listener.enterTypeInfo(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeInfo) {
            listener.exitTypeInfo(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeInfo) {
            return visitor.visitTypeInfo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InterpolateInfoContext extends ParserRuleContext {
    INTERPOLATE() { return this.getToken(PIE3Parser.INTERPOLATE, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_interpolateInfo; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterpolateInfo) {
            listener.enterInterpolateInfo(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterpolateInfo) {
            listener.exitInterpolateInfo(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterpolateInfo) {
            return visitor.visitInterpolateInfo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EventInfoContext extends ParserRuleContext {
    EVENT() { return this.getToken(PIE3Parser.EVENT, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    STRING() { return this.getToken(PIE3Parser.STRING, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_eventInfo; }
    // @Override
    enterRule(listener) {
        if (listener.enterEventInfo) {
            listener.enterEventInfo(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEventInfo) {
            listener.exitEventInfo(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEventInfo) {
            return visitor.visitEventInfo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TextureInfoContext extends ParserRuleContext {
    TEXTURE() { return this.getToken(PIE3Parser.TEXTURE, 0); }
    INT(i) {
        if (i === undefined) {
            return this.getTokens(PIE3Parser.INT);
        }
        else {
            return this.getToken(PIE3Parser.INT, i);
        }
    }
    STRING() { return this.getToken(PIE3Parser.STRING, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_textureInfo; }
    // @Override
    enterRule(listener) {
        if (listener.enterTextureInfo) {
            listener.enterTextureInfo(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTextureInfo) {
            listener.exitTextureInfo(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTextureInfo) {
            return visitor.visitTextureInfo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NormalMapContext extends ParserRuleContext {
    NORMALMAP() { return this.getToken(PIE3Parser.NORMALMAP, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    STRING() { return this.getToken(PIE3Parser.STRING, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_normalMap; }
    // @Override
    enterRule(listener) {
        if (listener.enterNormalMap) {
            listener.enterNormalMap(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNormalMap) {
            listener.exitNormalMap(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNormalMap) {
            return visitor.visitNormalMap(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SpecularMapContext extends ParserRuleContext {
    SPECULARMAP() { return this.getToken(PIE3Parser.SPECULARMAP, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    STRING() { return this.getToken(PIE3Parser.STRING, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_specularMap; }
    // @Override
    enterRule(listener) {
        if (listener.enterSpecularMap) {
            listener.enterSpecularMap(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSpecularMap) {
            listener.exitSpecularMap(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSpecularMap) {
            return visitor.visitSpecularMap(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PointsDataContext extends ParserRuleContext {
    POINTS() { return this.getToken(PIE3Parser.POINTS, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    pointList() {
        return this.getRuleContext(0, PointListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_pointsData; }
    // @Override
    enterRule(listener) {
        if (listener.enterPointsData) {
            listener.enterPointsData(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPointsData) {
            listener.exitPointsData(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPointsData) {
            return visitor.visitPointsData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PointListContext extends ParserRuleContext {
    point(i) {
        if (i === undefined) {
            return this.getRuleContexts(PointContext);
        }
        else {
            return this.getRuleContext(i, PointContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_pointList; }
    // @Override
    enterRule(listener) {
        if (listener.enterPointList) {
            listener.enterPointList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPointList) {
            listener.exitPointList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPointList) {
            return visitor.visitPointList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PointContext extends ParserRuleContext {
    number(i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    }
    NL() { return this.tryGetToken(PIE3Parser.NL, 0); }
    EOF() { return this.tryGetToken(PIE3Parser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_point; }
    // @Override
    enterRule(listener) {
        if (listener.enterPoint) {
            listener.enterPoint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPoint) {
            listener.exitPoint(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPoint) {
            return visitor.visitPoint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NormalsDataContext extends ParserRuleContext {
    NORMALS() { return this.getToken(PIE3Parser.NORMALS, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    normalsList() {
        return this.getRuleContext(0, NormalsListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_normalsData; }
    // @Override
    enterRule(listener) {
        if (listener.enterNormalsData) {
            listener.enterNormalsData(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNormalsData) {
            listener.exitNormalsData(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNormalsData) {
            return visitor.visitNormalsData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NormalsListContext extends ParserRuleContext {
    normal(i) {
        if (i === undefined) {
            return this.getRuleContexts(NormalContext);
        }
        else {
            return this.getRuleContext(i, NormalContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_normalsList; }
    // @Override
    enterRule(listener) {
        if (listener.enterNormalsList) {
            listener.enterNormalsList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNormalsList) {
            listener.exitNormalsList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNormalsList) {
            return visitor.visitNormalsList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NormalContext extends ParserRuleContext {
    number(i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    }
    NL() { return this.tryGetToken(PIE3Parser.NL, 0); }
    EOF() { return this.tryGetToken(PIE3Parser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_normal; }
    // @Override
    enterRule(listener) {
        if (listener.enterNormal) {
            listener.enterNormal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNormal) {
            listener.exitNormal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNormal) {
            return visitor.visitNormal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumberContext extends ParserRuleContext {
    INT() { return this.tryGetToken(PIE3Parser.INT, 0); }
    FLOAT() { return this.tryGetToken(PIE3Parser.FLOAT, 0); }
    NEG_NUMBER() { return this.tryGetToken(PIE3Parser.NEG_NUMBER, 0); }
    SCI_NUMBER() { return this.tryGetToken(PIE3Parser.SCI_NUMBER, 0); }
    NEG_SCI_NUMBER() { return this.tryGetToken(PIE3Parser.NEG_SCI_NUMBER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_number; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PolygonsDataContext extends ParserRuleContext {
    POLYGONS() { return this.getToken(PIE3Parser.POLYGONS, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    polygonList() {
        return this.getRuleContext(0, PolygonListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_polygonsData; }
    // @Override
    enterRule(listener) {
        if (listener.enterPolygonsData) {
            listener.enterPolygonsData(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPolygonsData) {
            listener.exitPolygonsData(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPolygonsData) {
            return visitor.visitPolygonsData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PolygonListContext extends ParserRuleContext {
    polygon(i) {
        if (i === undefined) {
            return this.getRuleContexts(PolygonContext);
        }
        else {
            return this.getRuleContext(i, PolygonContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_polygonList; }
    // @Override
    enterRule(listener) {
        if (listener.enterPolygonList) {
            listener.enterPolygonList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPolygonList) {
            listener.exitPolygonList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPolygonList) {
            return visitor.visitPolygonList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PolygonContext extends ParserRuleContext {
    INT(i) {
        if (i === undefined) {
            return this.getTokens(PIE3Parser.INT);
        }
        else {
            return this.getToken(PIE3Parser.INT, i);
        }
    }
    cornerData() {
        return this.getRuleContext(0, CornerDataContext);
    }
    NL() { return this.tryGetToken(PIE3Parser.NL, 0); }
    EOF() { return this.tryGetToken(PIE3Parser.EOF, 0); }
    number(i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_polygon; }
    // @Override
    enterRule(listener) {
        if (listener.enterPolygon) {
            listener.enterPolygon(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPolygon) {
            listener.exitPolygon(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPolygon) {
            return visitor.visitPolygon(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CornerDataContext extends ParserRuleContext {
    INT(i) {
        if (i === undefined) {
            return this.getTokens(PIE3Parser.INT);
        }
        else {
            return this.getToken(PIE3Parser.INT, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_cornerData; }
    // @Override
    enterRule(listener) {
        if (listener.enterCornerData) {
            listener.enterCornerData(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCornerData) {
            listener.exitCornerData(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCornerData) {
            return visitor.visitCornerData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConnectorDataContext extends ParserRuleContext {
    CONNECTORS() { return this.getToken(PIE3Parser.CONNECTORS, 0); }
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    connectorList() {
        return this.getRuleContext(0, ConnectorListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_connectorData; }
    // @Override
    enterRule(listener) {
        if (listener.enterConnectorData) {
            listener.enterConnectorData(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConnectorData) {
            listener.exitConnectorData(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConnectorData) {
            return visitor.visitConnectorData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConnectorListContext extends ParserRuleContext {
    connector(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConnectorContext);
        }
        else {
            return this.getRuleContext(i, ConnectorContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_connectorList; }
    // @Override
    enterRule(listener) {
        if (listener.enterConnectorList) {
            listener.enterConnectorList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConnectorList) {
            listener.exitConnectorList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConnectorList) {
            return visitor.visitConnectorList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConnectorContext extends ParserRuleContext {
    number(i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    }
    NL() { return this.tryGetToken(PIE3Parser.NL, 0); }
    EOF() { return this.tryGetToken(PIE3Parser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_connector; }
    // @Override
    enterRule(listener) {
        if (listener.enterConnector) {
            listener.enterConnector(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConnector) {
            listener.exitConnector(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConnector) {
            return visitor.visitConnector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AnimObjectDataContext extends ParserRuleContext {
    ANIMOBJECT() { return this.getToken(PIE3Parser.ANIMOBJECT, 0); }
    INT(i) {
        if (i === undefined) {
            return this.getTokens(PIE3Parser.INT);
        }
        else {
            return this.getToken(PIE3Parser.INT, i);
        }
    }
    NL() { return this.getToken(PIE3Parser.NL, 0); }
    animFrameList() {
        return this.getRuleContext(0, AnimFrameListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_animObjectData; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnimObjectData) {
            listener.enterAnimObjectData(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnimObjectData) {
            listener.exitAnimObjectData(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnimObjectData) {
            return visitor.visitAnimObjectData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AnimFrameListContext extends ParserRuleContext {
    animFrame(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnimFrameContext);
        }
        else {
            return this.getRuleContext(i, AnimFrameContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_animFrameList; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnimFrameList) {
            listener.enterAnimFrameList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnimFrameList) {
            listener.exitAnimFrameList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnimFrameList) {
            return visitor.visitAnimFrameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AnimFrameContext extends ParserRuleContext {
    INT() { return this.getToken(PIE3Parser.INT, 0); }
    number(i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    }
    NL() { return this.tryGetToken(PIE3Parser.NL, 0); }
    EOF() { return this.tryGetToken(PIE3Parser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PIE3Parser.RULE_animFrame; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnimFrame) {
            listener.enterAnimFrame(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnimFrame) {
            listener.exitAnimFrame(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnimFrame) {
            return visitor.visitAnimFrame(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
//# sourceMappingURL=PIE3Parser.js.map