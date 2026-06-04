import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import { PIEModel, PIEHeader, PIELevel } from '../src/pie-model';

describe('PIEModel', () => {
  const header: PIEHeader = {
    version: 3,
    type: 200,
    textures: [{ id: 0, filename: 'page-1.png', width: 0, height: 0 }],
    events: [],
    levelCount: 1,
  };

  it('should create a PIEModel instance', () => {
    const levels: PIELevel[] = [
      {
        points: [{ x: 0, y: 0, z: 0 }],
        polygons: [{ type: 200, vertexIndices: [0, 0, 0] }],
        connectors: [{ x: 0, y: 0, z: 0 }],
      },
    ];

    const model = new PIEModel(header, levels);

    assert.strictEqual(model.header, header, 'Header should be initialized correctly');
    assert.strictEqual(model.levels, levels, 'Levels should be initialized correctly');
  });

  it('should reject input without a PIE header', () => {
    assert.throws(() => PIEModel.parse('not a pie file'), /missing 'PIE <version>' header/);
  });

  it('should reject unsupported PIE versions', () => {
    assert.throws(() => PIEModel.parse('PIE 9\n'), /Unsupported PIE version/);
  });

  it('should return a Float32Array of vertex data', () => {
    const levels: PIELevel[] = [
      {
        points: [
          { x: 1, y: 2, z: 3 },
          { x: 4, y: 5, z: 6 },
        ],
        polygons: [],
        connectors: [],
      },
    ];

    const model = new PIEModel(header, levels);
    const vertexData = model.getVertexData();

    assert.ok(vertexData instanceof Float32Array, 'Should return a Float32Array');
    assert.deepStrictEqual(Array.from(vertexData), [1, 2, 3, 4, 5, 6], 'Should return correct vertex data');
  });

  it('should throw for a missing level index', () => {
    const model = new PIEModel(header, []);
    assert.throws(() => model.getVertexData(0), RangeError);
  });
});
