"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PIEModel = void 0;
const pie2_model_builder_1 = require("./pie2-model-builder");
const pie3_model_builder_1 = require("./pie3-model-builder");
const pie4_model_builder_1 = require("./pie4-model-builder");
function formatNumber(n) {
    // Preserve negative zero so round-tripping a "-0" coordinate stays "-0".
    if (Object.is(n, -0)) {
        return "-0";
    }
    return String(n);
}
class PIEModel {
    constructor(header, levels) {
        this.header = header;
        this.levels = levels;
    }
    /**
     * Parse the textual contents of a PIE file into a PIEModel. Throws
     * {@link PieSyntaxError} on malformed input and {@link PieValidationError}
     * when declared counts disagree with the actual records.
     */
    static parse(data) {
        const versionMatch = data.match(/^\s*PIE\s+(\d+)/);
        if (!versionMatch) {
            throw new Error("Not a PIE file: missing 'PIE <version>' header.");
        }
        const version = Number(versionMatch[1]);
        let result;
        switch (version) {
            case 2:
                result = (0, pie2_model_builder_1.parsePIE2)(data);
                break;
            case 3:
                result = (0, pie3_model_builder_1.parsePIE3)(data);
                break;
            case 4:
                result = (0, pie4_model_builder_1.parsePIE4)(data);
                break;
            default:
                throw new Error(`Unsupported PIE version: ${version}.`);
        }
        return new PIEModel(result.header, result.levels);
    }
    /**
     * Serialize the model back to PIE text. The output reparses to an equivalent
     * model (round-trip safe); it is not guaranteed byte-identical to the source,
     * since numeric formatting and incidental whitespace are normalized.
     */
    serialize() {
        const v = this.header.version;
        const fileLevelConnectors = v === 4; // PIE4 only allows file-level CONNECTORS
        const lines = [];
        lines.push(`PIE ${v}`);
        lines.push(`TYPE ${this.header.type}`);
        if (this.header.interpolate !== undefined) {
            lines.push(`INTERPOLATE ${this.header.interpolate}`);
        }
        // Order matters: the grammars require TEXTURE before EVENT.
        for (const texture of this.header.textures) {
            const hasSize = texture.width !== undefined && texture.height !== undefined;
            const size = hasSize ? ` ${texture.width} ${texture.height}` : v === 2 ? ` 0 0` : "";
            lines.push(`TEXTURE ${texture.id} ${texture.filename}${size}`);
        }
        for (const event of this.header.events) {
            lines.push(`EVENT ${event.type} ${event.filename}`);
        }
        const emitConnectors = (connectors) => {
            if (connectors.length === 0)
                return;
            lines.push(`CONNECTORS ${connectors.length}`);
            for (const c of connectors) {
                lines.push(`\t${formatNumber(c.x)} ${formatNumber(c.y)} ${formatNumber(c.z)}`);
            }
        };
        lines.push(`LEVELS ${this.levels.length}`);
        this.levels.forEach((level, index) => {
            var _a, _b;
            lines.push(`LEVEL ${index + 1}`);
            lines.push(`POINTS ${level.points.length}`);
            for (const p of level.points) {
                lines.push(`\t${formatNumber(p.x)} ${formatNumber(p.y)} ${formatNumber(p.z)}`);
            }
            if (level.normals && level.normals.length > 0) {
                lines.push(`NORMALS ${level.normals.length}`);
                for (const row of level.normals) {
                    lines.push(`\t${row.map(formatNumber).join(" ")}`);
                }
            }
            lines.push(`POLYGONS ${level.polygons.length}`);
            for (const poly of level.polygons) {
                const uv = (_a = poly.uvCoordinates) !== null && _a !== void 0 ? _a : [];
                const fields = [poly.type, poly.vertexIndices.length, ...poly.vertexIndices, ...uv];
                lines.push(`\t${fields.map(formatNumber).join(" ")}`);
            }
            for (const anim of (_b = level.animObjects) !== null && _b !== void 0 ? _b : []) {
                lines.push(`ANIMOBJECT ${anim.header.map(formatNumber).join(" ")}`);
                for (const frame of anim.frames) {
                    lines.push(`\t${[frame.frame, ...frame.data].map(formatNumber).join(" ")}`);
                }
            }
            if (!fileLevelConnectors) {
                // PIE2/PIE3: connectors are per-level.
                emitConnectors(level.connectors);
            }
            else if (index === 0) {
                // PIE4: a single file-level CONNECTORS block sits after the first
                // level, before any subsequent LEVEL.
                emitConnectors(this.levels.flatMap((l) => l.connectors));
            }
        });
        return lines.join("\n") + "\n";
    }
    /**
     * Flat vertex positions for a single level, suitable for uploading to a GPU
     * buffer. Defaults to the highest-detail level (index 0).
     */
    getVertexData(levelIndex = 0) {
        const level = this.levels[levelIndex];
        if (!level) {
            throw new RangeError(`Level ${levelIndex} does not exist (model has ${this.levels.length} level(s)).`);
        }
        const points = level.points;
        const vertexData = new Float32Array(points.length * 3);
        for (let i = 0; i < points.length; i++) {
            vertexData[i * 3] = points[i].x;
            vertexData[i * 3 + 1] = points[i].y;
            vertexData[i * 3 + 2] = points[i].z;
        }
        return vertexData;
    }
}
exports.PIEModel = PIEModel;
//# sourceMappingURL=pie-model.js.map