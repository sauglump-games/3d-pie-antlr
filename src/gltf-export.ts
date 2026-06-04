import { PIEModel } from "./pie-model";

export interface GLTFExportOptions {
  /** Which LOD level to export (default 0, the highest-detail level). */
  level?: number;
  /** Raw PNG bytes of the model's texture page. When provided, the texture is
   *  embedded in the glTF (base64) and a textured material is emitted. Takes
   *  precedence over {@link textureUri}. */
  texturePng?: Uint8Array | null;
  /** A URI (e.g. a relative path) to an external texture image. Use this instead
   *  of {@link texturePng} to reference a shared texture file rather than embed
   *  a copy in every glTF — much smaller for batch output. */
  textureUri?: string | null;
}

// glTF constant: FLOAT component type / ARRAY_BUFFER target / TRIANGLES mode.
const FLOAT = 5126;
const ARRAY_BUFFER = 34962;
const TRIANGLES = 4;

/**
 * Export a PIE model to a self-contained glTF 2.0 document (returned as a JSON
 * string). Geometry is embedded as a base64 data-URI buffer, so the result is a
 * single file that loads in Blender, the VS Code glTF preview, three.js, etc.
 *
 * Each polygon is triangulated as a fan and de-indexed so every vertex carries
 * its own UV (PIE stores UVs per polygon-corner, not per shared vertex). PIE2
 * UVs are texel coordinates and are normalized by the texture size; PIE3/PIE4
 * UVs are already normalized.
 */
export function exportGLTF(model: PIEModel, options: GLTFExportOptions = {}): string {
  const levelIndex = options.level ?? 0;
  const level = model.levels[levelIndex];
  if (!level) {
    throw new RangeError(
      `Level ${levelIndex} does not exist (model has ${model.levels.length} level(s)).`
    );
  }

  const texture = model.header.textures[0];
  const pixelUV = model.header.version === 2; // PIE2 UVs are texel coordinates
  const texW = texture?.width || 256;
  const texH = texture?.height || 256;

  const positions: number[] = [];
  const uvs: number[] = [];

  const pushVertex = (pointIndex: number, u: number, v: number): void => {
    const p = level.points[pointIndex];
    positions.push(p.x, p.y, p.z);
    uvs.push(pixelUV ? u / texW : u, pixelUV ? v / texH : v);
  };

  for (const poly of level.polygons) {
    const n = poly.vertexIndices.length;
    const uv = poly.uvCoordinates ?? [];
    const cornerUV = (c: number): [number, number] =>
      uv.length >= 2 * n ? [uv[2 * c], uv[2 * c + 1]] : [0, 0];
    // Fan triangulation: (0, c, c+1) for c in 1..n-2.
    for (let c = 1; c < n - 1; c++) {
      for (const corner of [0, c, c + 1]) {
        const [u, v] = cornerUV(corner);
        pushVertex(poly.vertexIndices[corner], u, v);
      }
    }
  }

  const vertexCount = positions.length / 3;
  const posArray = new Float32Array(positions);
  const uvArray = new Float32Array(uvs);

  // Compute bounds from the float32-rounded values actually stored in the
  // buffer, so accessor.min/max match exactly (the glTF validator is strict
  // about this: a float64 bound off by a rounding bit is an error).
  const min: [number, number, number] = [Infinity, Infinity, Infinity];
  const max: [number, number, number] = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < vertexCount; i++) {
    for (let k = 0; k < 3; k++) {
      const value = posArray[i * 3 + k];
      if (value < min[k]) min[k] = value;
      if (value > max[k]) max[k] = value;
    }
  }
  if (vertexCount === 0) {
    min.fill(0);
    max.fill(0);
  }
  const buffer = Buffer.concat([
    Buffer.from(posArray.buffer, posArray.byteOffset, posArray.byteLength),
    Buffer.from(uvArray.buffer, uvArray.byteOffset, uvArray.byteLength),
  ]);

  const gltf: Record<string, unknown> = {
    asset: { version: "2.0", generator: "3d-pie-antlr" },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0 }],
    meshes: [
      {
        primitives: [
          {
            attributes: { POSITION: 0, TEXCOORD_0: 1 },
            material: 0,
            mode: TRIANGLES,
          },
        ],
      },
    ],
    buffers: [
      {
        byteLength: buffer.length,
        uri: "data:application/octet-stream;base64," + buffer.toString("base64"),
      },
    ],
    bufferViews: [
      { buffer: 0, byteOffset: 0, byteLength: posArray.byteLength, target: ARRAY_BUFFER },
      { buffer: 0, byteOffset: posArray.byteLength, byteLength: uvArray.byteLength, target: ARRAY_BUFFER },
    ],
    accessors: [
      { bufferView: 0, componentType: FLOAT, count: vertexCount, type: "VEC3", min, max },
      { bufferView: 1, componentType: FLOAT, count: vertexCount, type: "VEC2" },
    ],
  };

  let imageUri: string | undefined;
  if (options.texturePng && options.texturePng.length > 0) {
    imageUri = "data:image/png;base64," + Buffer.from(options.texturePng).toString("base64");
  } else if (options.textureUri) {
    imageUri = options.textureUri;
  }

  if (imageUri) {
    gltf.images = [{ uri: imageUri }];
    gltf.samplers = [{}];
    gltf.textures = [{ source: 0, sampler: 0 }];
    gltf.materials = [
      {
        name: texture?.filename ?? "texture",
        doubleSided: true,
        pbrMetallicRoughness: {
          baseColorTexture: { index: 0 },
          metallicFactor: 0,
          roughnessFactor: 1,
        },
      },
    ];
  } else {
    gltf.materials = [
      {
        name: "pie-material",
        doubleSided: true,
        pbrMetallicRoughness: {
          baseColorFactor: [0.8, 0.8, 0.8, 1],
          metallicFactor: 0,
          roughnessFactor: 1,
        },
      },
    ];
  }

  return JSON.stringify(gltf, null, 2);
}
