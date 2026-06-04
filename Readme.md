# 3d-pie parser

This repository contains a parser for the 3d-pie file format, which is used by the 3D engine of the game Warzone 2100.

## Why this exists

The file format was a mystery to me, so I decided to reverse engineer it. There is not much info to the file format and the rendering pipeline. So this is the effort to understand the PIE file format and provide a parser with extensive documentation for it.

## Development

* node 20+

## Run Scripts

* `npm run build` - Compiles TypeScript code using tsc
* `npm test` - Runs all tests in the test directory
* `npm run lint` - Lints the hand-written sources with ESLint (generated parsers in `src/g4` are ignored)
* `npm run antlr4ts` - Generates TypeScript code from the ANTLR4 grammar file
* `npm run pretest` - Automatically runs antlr4ts before tests

## Status

PIE 2, 3 and 4 are fully supported end-to-end:

* `PIEModel.parse(text)` decodes any version into a `PIEModel` (header + levels of
  points, polygons, connectors, normals and animation objects). It throws
  `PieSyntaxError` on malformed input and `PieValidationError` when a declared
  count disagrees with the records that follow.
* `PIEModel#serialize()` writes a model back to PIE text (round-trip safe).
* Validated against the full Warzone 2100 model set (870 `.pie` files): all parse,
  count-validate and round-trip cleanly. `scripts/check-fixtures.ts` (parse-only)
  and `scripts/check-model.ts` (parse + round-trip) re-run these sweeps against any
  directory of `.pie` files.

```ts
import { PIEModel } from './src';
const model = PIEModel.parse(fs.readFileSync('body.pie', 'utf8'));
console.log(model.header.version, model.levels[0].points.length);
```

## Demo: export a model to glTF

`exportGLTF(model)` turns a parsed model into a self-contained glTF 2.0 file
(geometry — and, optionally, the texture — embedded as base64) that opens in
Blender, the VS Code glTF preview, three.js, or
[gltf-viewer](https://gltf-viewer.donmccurdy.com/).

```sh
# Convert the cyborg body, fetching + embedding its texture page from the
# Warzone 2100 texture repo. Writes cybd_run.gltf (a single, textured file).
npm run demo:gltf

# Or convert any model, with a local texture PNG (or omit it for geometry only):
node --require ts-node/register scripts/pie2gltf.ts path/to/model.pie out.gltf texture.png
```

### Batch conversion

Convert a whole directory tree of models into an output folder (mirroring the
input structure). Textures are fetched once per page and, by default, written to
`<outputDir>/textures` and shared across files rather than embedded per model:

```sh
# Convert every fixture into ./gltf-out (shared textures: ~6.6 MB for 32 models)
npm run demo:gltf:batch

# Convert any tree; --embed makes each glTF self-contained, --limit samples
node --require ts-node/register scripts/pie2gltf-batch.ts <inputDir> <outputDir> [--embed] [--no-texture] [--limit=N]
```

```ts
import { PIEModel, exportGLTF } from './src';
const model = PIEModel.parse(fs.readFileSync('cybd_run.pie', 'utf8'));
fs.writeFileSync('cybd_run.gltf', exportGLTF(model, { texturePng })); // texturePng optional
```

Note on UVs: PIE3/PIE4 store normalized (0–1) texture coordinates; PIE2 stores
texel coordinates, which the exporter normalizes by the texture page size.