import { test, describe } from 'node:test'
import assert from 'node:assert'
import * as fs from 'fs'
import * as path from 'path'
import { PIEModel } from '../src/pie-model'

function loadFixture(name: string): PIEModel {
  const fixturePath = path.join('test', 'fixtures', 'PIE2', name)
  return PIEModel.parse(fs.readFileSync(fixturePath, 'utf8'))
}

describe('PIE2 model builder', () => {
  test('parses cybdpjmp multi-level model with per-level connectors', () => {
    const model = loadFixture('cybdpjmp.pie')

    assert.strictEqual(model.header.version, 2)
    assert.strictEqual(model.header.type, 10200)
    assert.strictEqual(model.header.levelCount, 3)
    assert.strictEqual(model.levels.length, 3)
    assert.strictEqual(model.levels.length, model.header.levelCount)

    // Level 1: POINTS 64, POLYGONS 44.
    const level0 = model.levels[0]
    assert.strictEqual(level0.points.length, 64)
    assert.strictEqual(level0.polygons.length, 44)

    // First point coordinate: "-4 1 0".
    assert.deepStrictEqual(level0.points[0], { x: -4, y: 1, z: 0 })

    // First polygon: "200 3 3 2 1 66 186 62 186 62 198".
    // flags=200, count=3, vertices=[3,2,1], uv=[66,186,62,186,62,198].
    assert.strictEqual(level0.polygons[0].type, 200)
    assert.deepStrictEqual(level0.polygons[0].vertexIndices, [3, 2, 1])
    assert.deepStrictEqual(
      level0.polygons[0].uvCoordinates,
      [66, 186, 62, 186, 62, 198]
    )

    // Each level carries a single connector "-16 4 40".
    assert.ok(
      model.levels.some((level) => level.connectors.length > 0),
      'some level should have connectors'
    )
    assert.strictEqual(level0.connectors.length, 1)
    assert.deepStrictEqual(level0.connectors[0], { x: -16, y: 4, z: 40 })
  })

  test('parses flamfall ANIMOBJECT blocks', () => {
    const model = loadFixture('flamfall.pie')

    assert.strictEqual(model.header.version, 2)
    assert.strictEqual(model.header.levelCount, 4)
    assert.strictEqual(model.levels.length, 4)

    // Level 1: POINTS 12, first point "3 0 0".
    assert.strictEqual(model.levels[0].points.length, 12)
    assert.deepStrictEqual(model.levels[0].points[0], { x: 3, y: 0, z: 0 })

    const animLevel = model.levels.find(
      (level) => (level.animObjects?.length ?? 0) > 0
    )
    assert.ok(animLevel, 'at least one level should have an animObject')

    const anim = animLevel!.animObjects![0]
    // "ANIMOBJECT 250 1 4".
    assert.deepStrictEqual(anim.header, [250, 1, 4])
    assert.ok(anim.frames.length > 0, 'animObject should have frames')

    // First frame: "0  0 0 0 0 0 0  1.0  1.0  1.0".
    assert.strictEqual(anim.frames[0].frame, 0)
    assert.deepStrictEqual(anim.frames[0].data, [0, 0, 0, 0, 0, 0, 1.0, 1.0, 1.0])
  })

  test('parses blderik EVENT header entry', () => {
    const model = loadFixture('blderik.pie')

    assert.strictEqual(model.header.version, 2)
    // "EVENT 1 blderik_anim.pie".
    assert.strictEqual(model.header.events.length, 1)
    assert.deepStrictEqual(model.header.events[0], {
      type: 1,
      filename: 'blderik_anim.pie',
    })
  })
})
