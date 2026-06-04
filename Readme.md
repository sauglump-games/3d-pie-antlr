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