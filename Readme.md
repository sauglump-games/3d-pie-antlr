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

PIE 2, 3 and 4 all have ANTLR grammars that parse the bundled fixtures without
errors. PIE 3 additionally has a model builder: `PIEModel.parse(text)` decodes a
PIE 3 file into a `PIEModel` (header + per-level points, polygons and
connectors). PIE 2 and 4 model builders are not implemented yet.