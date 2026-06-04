import { describe, it } from "node:test";
import assert from "node:assert";
import * as fs from "fs";
import * as path from "path";

import { PIEModel } from "../src/pie-model";

const fixtureDir = path.join(__dirname, "fixtures", "PIE4");

function loadModel(name: string): PIEModel {
  const data = fs.readFileSync(path.join(fixtureDir, name), "utf8");
  return PIEModel.parse(data);
}

describe("parsePIE4", () => {
  it("parses micrane.pie header, textures, points and polygons", () => {
    const model = loadModel("micrane.pie");

    assert.strictEqual(model.header.version, 4);
    assert.strictEqual(model.header.type, 200);

    assert.strictEqual(model.header.textures.length, 3);
    assert.deepStrictEqual(
      model.header.textures.map((t) => t.filename),
      [
        "page-7-barbarians-arizona.png",
        "page-7-barbarians-urban.png",
        "page-7-barbarians-kevlar.png",
      ]
    );
    assert.deepStrictEqual(model.header.textures[0], {
      id: 0,
      filename: "page-7-barbarians-arizona.png",
      width: 0,
      height: 0,
    });

    assert.strictEqual(model.levels.length, 1);
    const level = model.levels[0];
    assert.strictEqual(level.points.length, 71);
    assert.strictEqual(level.polygons.length, 100);

    // First point: -58.943 200.092 -0
    assert.deepStrictEqual(level.points[0], {
      x: -58.943,
      y: 200.092,
      z: -0,
    });

    // First polygon: 200 3 0 1 2 0.761719 0.972656 0.699219 0.757812 0.679688 0.972656
    assert.strictEqual(level.polygons[0].type, 200);
    assert.deepStrictEqual(level.polygons[0].vertexIndices, [0, 1, 2]);
    assert.deepStrictEqual(level.polygons[0].uvCoordinates, [
      0.761719, 0.972656, 0.699219, 0.757812, 0.679688, 0.972656,
    ]);
  });

  it("parses file-level CONNECTORS in bldrdcm0.pie", () => {
    const model = loadModel("bldrdcm0.pie");

    assert.strictEqual(model.header.version, 4);
    assert.strictEqual(model.levels.length, 1);

    // bldrdcm0.pie has a single TEXTURE (no width/height) and a TCMASK
    // line which the model ignores.
    assert.strictEqual(model.header.textures.length, 1);
    assert.deepStrictEqual(model.header.textures[0], {
      id: 0,
      filename: "page-34-buildings.png",
      width: undefined,
      height: undefined,
    });

    // CONNECTORS 1 / 0 0 159 — file-level, attached to the first level.
    const connectors = model.levels[0].connectors;
    assert.strictEqual(connectors.length, 1);
    assert.deepStrictEqual(connectors[0], { x: 0, y: 0, z: 159 });
  });
});
