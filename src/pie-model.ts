import { parsePIE2 } from "./pie2-model-builder";
import { parsePIE3 } from "./pie3-model-builder";
import { parsePIE4 } from "./pie4-model-builder";

export interface PIEVector3 {
  x: number;
  y: number;
  z: number;
}

export type PIEPoint = PIEVector3;
export type PIEConnector = PIEVector3;

export interface PIETexture {
  id: number;
  filename: string;
  width?: number;
  height?: number;
}

export interface PIEEvent {
  type: number;
  filename: string;
}

export interface PIEPolygon {
  type: number; // polygon flags, e.g. 200 for a textured triangle
  vertexIndices: number[];
  uvCoordinates?: number[]; // texture coordinates, only present for textured polygons
}

export interface PIEAnimFrame {
  frame: number;
  data: number[]; // remaining transform numbers (position / rotation / scale)
}

export interface PIEAnimObject {
  header: number[]; // the three ints after ANIMOBJECT
  frames: PIEAnimFrame[];
}

export interface PIELevel {
  points: PIEPoint[];
  polygons: PIEPolygon[];
  connectors: PIEConnector[];
  normals?: number[][]; // PIE3 NORMALS rows (rarely present)
  animObjects?: PIEAnimObject[];
}

export interface PIEHeader {
  version: number; // 2, 3, or 4
  type: number; // e.g. 200 / 10200 for textured models
  interpolate?: number; // INTERPOLATE directive (PIE3/PIE4)
  textures: PIETexture[];
  events: PIEEvent[]; // EVENT directives (PIE2/PIE3)
  levelCount: number; // declared number of LOD levels
}

/** A builder turns raw text into a header + levels for one PIE version. */
export interface PIEParseResult {
  header: PIEHeader;
  levels: PIELevel[];
}

function formatNumber(n: number): string {
  // Preserve negative zero so round-tripping a "-0" coordinate stays "-0".
  if (Object.is(n, -0)) {
    return "-0";
  }
  return String(n);
}

export class PIEModel {
  header: PIEHeader;
  levels: PIELevel[];

  constructor(header: PIEHeader, levels: PIELevel[]) {
    this.header = header;
    this.levels = levels;
  }

  /**
   * Parse the textual contents of a PIE file into a PIEModel. Throws
   * {@link PieSyntaxError} on malformed input and {@link PieValidationError}
   * when declared counts disagree with the actual records.
   */
  static parse(data: string): PIEModel {
    const versionMatch = data.match(/^\s*PIE\s+(\d+)/);
    if (!versionMatch) {
      throw new Error("Not a PIE file: missing 'PIE <version>' header.");
    }

    const version = Number(versionMatch[1]);
    let result: PIEParseResult;
    switch (version) {
      case 2:
        result = parsePIE2(data);
        break;
      case 3:
        result = parsePIE3(data);
        break;
      case 4:
        result = parsePIE4(data);
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
  serialize(): string {
    const v = this.header.version;
    const fileLevelConnectors = v === 4; // PIE4 only allows file-level CONNECTORS
    const lines: string[] = [];

    lines.push(`PIE ${v}`);
    lines.push(`TYPE ${this.header.type}`);
    if (this.header.interpolate !== undefined) {
      lines.push(`INTERPOLATE ${this.header.interpolate}`);
    }
    for (const event of this.header.events) {
      lines.push(`EVENT ${event.type} ${event.filename}`);
    }
    for (const texture of this.header.textures) {
      const hasSize = texture.width !== undefined && texture.height !== undefined;
      const size = hasSize ? ` ${texture.width} ${texture.height}` : v === 2 ? ` 0 0` : "";
      lines.push(`TEXTURE ${texture.id} ${texture.filename}${size}`);
    }

    lines.push(`LEVELS ${this.levels.length}`);
    this.levels.forEach((level, index) => {
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
        const uv = poly.uvCoordinates ?? [];
        const fields = [poly.type, poly.vertexIndices.length, ...poly.vertexIndices, ...uv];
        lines.push(`\t${fields.map(formatNumber).join(" ")}`);
      }

      for (const anim of level.animObjects ?? []) {
        lines.push(`ANIMOBJECT ${anim.header.map(formatNumber).join(" ")}`);
        for (const frame of anim.frames) {
          lines.push(`\t${[frame.frame, ...frame.data].map(formatNumber).join(" ")}`);
        }
      }

      if (!fileLevelConnectors && level.connectors.length > 0) {
        lines.push(`CONNECTORS ${level.connectors.length}`);
        for (const c of level.connectors) {
          lines.push(`\t${formatNumber(c.x)} ${formatNumber(c.y)} ${formatNumber(c.z)}`);
        }
      }
    });

    if (fileLevelConnectors) {
      const connectors = this.levels.flatMap((level) => level.connectors);
      if (connectors.length > 0) {
        lines.push(`CONNECTORS ${connectors.length}`);
        for (const c of connectors) {
          lines.push(`\t${formatNumber(c.x)} ${formatNumber(c.y)} ${formatNumber(c.z)}`);
        }
      }
    }

    return lines.join("\n") + "\n";
  }

  /**
   * Flat vertex positions for a single level, suitable for uploading to a GPU
   * buffer. Defaults to the highest-detail level (index 0).
   */
  getVertexData(levelIndex = 0): Float32Array {
    const level = this.levels[levelIndex];
    if (!level) {
      throw new RangeError(
        `Level ${levelIndex} does not exist (model has ${this.levels.length} level(s)).`
      );
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
