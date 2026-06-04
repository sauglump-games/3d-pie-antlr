import { test, describe } from 'node:test';
import assert from 'node:assert';
import * as fs from 'fs';
import * as path from 'path';
import { PIEModel } from '../src/pie-model';

// parse -> serialize -> parse must yield an equivalent model for every version.
// blfact0_struct.pie is the interesting PIE4 case: file-level CONNECTORS sitting
// between levels, 4200-type animated polygons, and a TCMASK directive.
const CASES: [version: string, name: string][] = [
  ['PIE2', 'cybdpjmp.pie'],
  ['PIE2', 'flamfall.pie'],
  ['PIE3', 'cybd_run.pie'],
  ['PIE4', 'micrane.pie'],
  ['PIE4', 'blfact0_struct.pie'],
];

describe('PIEModel round-trips through serialize', () => {
  for (const [version, name] of CASES) {
    test(`${version}/${name}`, () => {
      const original = PIEModel.parse(
        fs.readFileSync(path.join('test', 'fixtures', version, name), 'utf8')
      );
      const reparsed = PIEModel.parse(original.serialize());
      assert.deepStrictEqual(reparsed.header, original.header);
      assert.deepStrictEqual(reparsed.levels, original.levels);
    });
  }
});
