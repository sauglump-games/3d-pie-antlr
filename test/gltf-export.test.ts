import { test, describe, before } from 'node:test';
import assert from 'node:assert';
import * as fs from 'fs';
import * as path from 'path';
import { PIEModel } from '../src/pie-model';
import { exportGLTF } from '../src/gltf-export';

describe('exportGLTF (cybd_run.pie)', () => {
  let model: PIEModel;

  before(() => {
    model = PIEModel.parse(
      fs.readFileSync(path.join('test', 'fixtures', 'PIE3', 'cybd_run.pie'), 'utf8')
    );
  });

  test('produces a valid glTF 2.0 document', () => {
    const gltf = JSON.parse(exportGLTF(model));

    assert.strictEqual(gltf.asset.version, '2.0');
    assert.strictEqual(gltf.scenes.length, 1);
    assert.strictEqual(gltf.meshes.length, 1);

    const prim = gltf.meshes[0].primitives[0];
    assert.strictEqual(prim.mode, 4); // TRIANGLES

    const position = gltf.accessors[prim.attributes.POSITION];
    const texcoord = gltf.accessors[prim.attributes.TEXCOORD_0];
    assert.strictEqual(position.type, 'VEC3');
    assert.strictEqual(texcoord.type, 'VEC2');

    // Level 0 has 34 triangle polygons -> 34 * 3 de-indexed vertices.
    assert.strictEqual(model.levels[0].polygons.length, 34);
    assert.strictEqual(position.count, 34 * 3);
    assert.strictEqual(texcoord.count, position.count);

    // POSITION accessor must carry bounds; buffer is embedded.
    assert.ok(Array.isArray(position.min) && position.min.length === 3);
    assert.ok(Array.isArray(position.max) && position.max.length === 3);
    assert.ok(gltf.buffers[0].uri.startsWith('data:application/octet-stream;base64,'));
  });

  test('embeds a texture when PNG bytes are provided', () => {
    const pngBytes = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    const gltf = JSON.parse(exportGLTF(model, { texturePng: pngBytes }));

    assert.strictEqual(gltf.images.length, 1);
    assert.ok(gltf.images[0].uri.startsWith('data:image/png;base64,'));
    assert.strictEqual(gltf.textures[0].source, 0);
    assert.strictEqual(gltf.materials[0].pbrMetallicRoughness.baseColorTexture.index, 0);
  });

  test('throws for a non-existent level', () => {
    assert.throws(() => exportGLTF(model, { level: 99 }), RangeError);
  });
});

describe('exportGLTF accessor bounds', () => {
  // Use a model with fractional coordinates so float32 rounding is exercised:
  // accessor.min/max must equal the bounds of the stored float32 data exactly,
  // or the glTF validator reports an error.
  const model = PIEModel.parse(
    fs.readFileSync(path.join('test', 'fixtures', 'PIE4', 'blfact0_struct.pie'), 'utf8')
  );

  test('min/max match the stored float32 positions exactly', () => {
    const gltf = JSON.parse(exportGLTF(model));
    const accessor = gltf.accessors[0];
    const buffer = Buffer.from(gltf.buffers[0].uri.split(',')[1], 'base64');
    const positions = new Float32Array(buffer.buffer, buffer.byteOffset, accessor.count * 3);

    const min = [Infinity, Infinity, Infinity];
    const max = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < accessor.count; i++) {
      for (let k = 0; k < 3; k++) {
        const v = positions[i * 3 + k];
        if (v < min[k]) min[k] = v;
        if (v > max[k]) max[k] = v;
      }
    }
    assert.deepStrictEqual(accessor.min, min);
    assert.deepStrictEqual(accessor.max, max);
  });
});
