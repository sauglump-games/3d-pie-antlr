import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import { PIEModel } from '../src/pie-model'; // Adjust the path

describe('PIEModel', () => {
  it('should create a PIEModel instance', () => {
    const header = {
      version: 3,
      type: 200,
      textureCount: 1,
      textureFilenames: ['page-1.png'],
      levels: 1,
    };
    const points = [{ x: 0, y: 0, z: 0 }];
    const polygons = [{ type: 200, vertexIndices: [0, 0, 0] }];
    const connectors = [{ x: 0, y: 0, z: 0 }];

    const model = new PIEModel(header, points, polygons, connectors);

    assert.strictEqual(model.header, header, 'Header should be initialized correctly');
    assert.strictEqual(model.points, points, 'Points should be initialized correctly');
    assert.strictEqual(model.polygons, polygons, 'Polygons should be initialized correctly');
    assert.strictEqual(model.connectors, connectors, 'Connectors should be initialized correctly');
  });

  it('should throw an error if parse is not implemented', () => {
    const testData = "some pie data";
    assert.throws(
      () => {
        PIEModel.parse(testData);
      },
      Error,
      'PIEModel.parse() not implemented yet. Data: some pie data' //Verifies the message of the exception
    );
  });

  it('should return a Float32Array of vertex data', () => {
    const header = {
      version: 3,
      type: 200,
      textureCount: 1,
      textureFilenames: ['page-1.png'],
      levels: 1,
    };
    const points = [
      { x: 1, y: 2, z: 3 },
      { x: 4, y: 5, z: 6 },
    ];
    const polygons: any[] = [];
    const connectors: any[] = [];

    const model = new PIEModel(header, points, polygons, connectors);
    const vertexData = model.getVertexData();

    assert.ok(vertexData instanceof Float32Array, 'Should return a Float32Array');
    assert.deepStrictEqual(Array.from(vertexData), [1, 2, 3, 4, 5, 6], 'Should return correct vertex data');
  });
});