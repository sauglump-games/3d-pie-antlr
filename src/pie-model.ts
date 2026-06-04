import { parsePIE3 } from "./pie3-model-builder";

export interface PIEHeader {
  version: number; // 2, 3, or 4
  type: number; // e.g. 200 / 10200 for textured models
  textureCount: number;
  textureFilenames: string[];
  levelCount: number; // declared number of LOD levels
}

export interface PIEPoint {
  x: number;
  y: number;
  z: number;
}

export interface PIEPolygon {
  type: number; // polygon flags, e.g. 200 for a textured triangle
  vertexIndices: number[];
  uvCoordinates?: number[]; // texture coordinates, only present for textured polygons
}

export interface PIEConnector {
  x: number;
  y: number;
  z: number;
}

export interface PIELevel {
  points: PIEPoint[];
  polygons: PIEPolygon[];
  connectors: PIEConnector[];
}

export class PIEModel {
  header: PIEHeader;
  levels: PIELevel[];

  constructor(header: PIEHeader, levels: PIELevel[]) {
    this.header = header;
    this.levels = levels;
  }

  /**
   * Parse the textual contents of a PIE file into a PIEModel.
   *
   * Currently only PIE version 3 is implemented end-to-end (see
   * {@link PIE3ModelBuilder}). PIE 2 and 4 have grammars but no model builder
   * yet, so they throw a clear, actionable error.
   */
  static parse(data: string): PIEModel {
    const versionMatch = data.match(/^\s*PIE\s+(\d+)/);
    if (!versionMatch) {
      throw new Error("Not a PIE file: missing 'PIE <version>' header.");
    }

    const version = Number(versionMatch[1]);
    if (version !== 3) {
      throw new Error(
        `PIEModel.parse() currently only supports PIE 3, got PIE ${version}.`
      );
    }

    const { header, levels } = parsePIE3(data);
    return new PIEModel(header, levels);
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
