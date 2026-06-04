import { test, describe, before } from 'node:test'
import assert from 'node:assert'
import * as fs from 'fs'
import * as path from 'path'
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { PIE3Lexer } from '../src/g4/PIE3Lexer'
import { PIE3Parser, PieFileContext } from '../src/g4/PIE3Parser'
import { ANTLRErrorListener, RecognitionException, Recognizer } from 'antlr4ts'
import { PIEModel } from '../src/pie-model'
import { PieSyntaxError, PieValidationError } from '../src/parse-error'

// Custom error listener to capture parsing errors
class TestErrorListener implements ANTLRErrorListener<any> {
  errors: string[] = [];

  syntaxError<T>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined
  ): void {
    this.errors.push(`Line ${line}:${charPositionInLine} - ${msg}`);
    // Print relevant info about the offending symbol
    if (offendingSymbol && typeof offendingSymbol === 'object' && 'text' in offendingSymbol) {
      console.log(`Offending symbol text: '${offendingSymbol.text}'`);
    }
  }
}

[
  'znulltracks.pie',
  'cybd_run.pie',
  'exbloke.pie',
  'runanim.pie',
  'drhbod12.pie',
  // Real WZ2100 models exercising PIE3 edge cases:
  'power_module4.pie',  // TEXTURE without width/height
  'prslvtl1_empty.pie'  // zero-count POINTS / POLYGONS sections
]
.map((name: string) => {


  describe(`PIE3Parser can handle ${name}`, () => {
    let pieFile: PieFileContext;
    let lexerErrors: TestErrorListener;
    let parserErrors: TestErrorListener;

    before(()=>{
      const fixturePath = path.join('test', 'fixtures', 'PIE3', name)
      const input = fs.readFileSync(fixturePath, 'utf8')
      
      // Create the lexer and parser with error listeners
      const inputStream = CharStreams.fromString(input)
      const lexer = new PIE3Lexer(inputStream)
      const tokenStream = new CommonTokenStream(lexer)
      const parser = new PIE3Parser(tokenStream)
      
      // Add custom error listeners
      lexerErrors = new TestErrorListener()
      parserErrors = new TestErrorListener()
      lexer.removeErrorListeners()
      parser.removeErrorListeners()
      lexer.addErrorListener(lexerErrors)
      parser.addErrorListener(parserErrors)
      pieFile = parser.pieFile()
    })


    test('Parser should return some result', () => {
      assert.ok(pieFile)
    }) 

    test('header should be parsed', () => {
      const header = pieFile.pieHeader()
      assert.ok(header, 'Header should be parsed')
    })

    test('has no lexer errors', () => {
      assert.deepEqual(lexerErrors.errors, [])
    });

    test('has no parser errors', () => {
      assert.deepEqual(parserErrors.errors, [])
    });
  });
})

// Value-level assertions: parse a fixture into a PIEModel and check the actual
// decoded contents, not just that parsing produced no errors.
describe('PIEModel.parse builds a PIE3 model (cybd_run.pie)', () => {
  let model: PIEModel

  before(() => {
    const fixturePath = path.join('test', 'fixtures', 'PIE3', 'cybd_run.pie')
    model = PIEModel.parse(fs.readFileSync(fixturePath, 'utf8'))
  })

  test('decodes the header', () => {
    assert.strictEqual(model.header.version, 3)
    assert.strictEqual(model.header.type, 10200)
    assert.strictEqual(model.header.levelCount, 6)
    assert.strictEqual(model.header.textures.length, 1)
    assert.strictEqual(model.header.textures[0].filename, 'page-33-cyborgs.png')
  })

  test('decodes every level', () => {
    assert.strictEqual(model.levels.length, 6)
    assert.deepStrictEqual(
      model.levels.map((level) => level.points.length),
      [26, 16, 12, 26, 12, 16]
    )
    assert.deepStrictEqual(
      model.levels.map((level) => level.polygons.length),
      [34, 28, 12, 34, 12, 28]
    )
  })

  test('decodes point coordinates', () => {
    // First point of LEVEL 1: "-9 18 -1"
    assert.deepStrictEqual(model.levels[0].points[0], { x: -9, y: 18, z: -1 })
    // A point using scientific notation: "-9 1.2e-05 4.99999"
    assert.deepStrictEqual(model.levels[0].points[16], { x: -9, y: 1.2e-5, z: 4.99999 })
  })

  test('decodes polygon flags, indices and UVs', () => {
    // First polygon of LEVEL 1:
    // "200 3 0 1 2 0.175847 0.830631 0.167068 0.773044 0.218576 0.765191"
    const polygon = model.levels[0].polygons[0]
    assert.strictEqual(polygon.type, 200)
    assert.deepStrictEqual(polygon.vertexIndices, [0, 1, 2])
    assert.deepStrictEqual(polygon.uvCoordinates, [
      0.175847, 0.830631, 0.167068, 0.773044, 0.218576, 0.765191,
    ])
  })

  test('decodes ANIMOBJECT frames', () => {
    const anims = model.levels[0].animObjects!
    assert.strictEqual(anims.length, 1)
    assert.deepStrictEqual(anims[0].header, [10, 0, 40])
    assert.strictEqual(anims[0].frames.length, 40)
    // First frame: "0 0 838 5183 24760 0 0 1.0 1.0 1.0"
    assert.strictEqual(anims[0].frames[0].frame, 0)
    assert.deepStrictEqual(anims[0].frames[0].data, [0, 838, 5183, 24760, 0, 0, 1.0, 1.0, 1.0])
  })

  test('getVertexData returns a flat buffer for a level', () => {
    const vertexData = model.getVertexData(0)
    assert.ok(vertexData instanceof Float32Array)
    assert.strictEqual(vertexData.length, model.levels[0].points.length * 3)
    // First point -9 18 -1 occupies the first three slots.
    assert.strictEqual(vertexData[0], -9)
    assert.strictEqual(vertexData[1], 18)
    assert.strictEqual(vertexData[2], -1)
  })
})

// Round-trip: parse -> serialize -> parse must yield an equivalent model.
describe('PIE3 round-trips through serialize', () => {
  for (const name of ['cybd_run.pie', 'power_module4.pie', 'prslvtl1_empty.pie']) {
    test(`${name}`, () => {
      const original = PIEModel.parse(
        fs.readFileSync(path.join('test', 'fixtures', 'PIE3', name), 'utf8')
      )
      const reparsed = PIEModel.parse(original.serialize())
      assert.deepStrictEqual(reparsed.levels, original.levels)
      assert.deepStrictEqual(reparsed.header, original.header)
    })
  }
})

describe('PIEModel.parse error handling', () => {
  test('throws PieSyntaxError on malformed PIE3 input', () => {
    const bad = 'PIE 3\nTYPE 200\nLEVELS 1\nLEVEL 1\nPOINTS 1\nthis is not a point\n'
    assert.throws(() => PIEModel.parse(bad), PieSyntaxError)
  })

  test('throws PieValidationError when a declared count is wrong', () => {
    // Declares POINTS 5 but provides only one point.
    const mismatch = 'PIE 3\nTYPE 200\nLEVELS 1\nLEVEL 1\nPOINTS 5\n\t1 2 3\nPOLYGONS 0\n'
    assert.throws(() => PIEModel.parse(mismatch), PieValidationError)
  })
})