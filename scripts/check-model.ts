// Dev harness: run a directory tree of .pie files through PIEModel.parse (full
// builder + count validation) AND a parse->serialize->parse round-trip, and
// report any exceptions or round-trip mismatches. Not part of the test suite.
//
//   node --require ts-node/register scripts/check-model.ts <dir> [--verbose]
import * as fs from 'fs';
import * as path from 'path';
import * as assert from 'assert';
import { PIEModel } from '../src/pie-model';

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.toLowerCase().endsWith('.pie')) out.push(full);
  }
  return out;
}

const dir = process.argv[2] || 'test/fixtures';
const verbose = process.argv.includes('--verbose');
const files = walk(dir).sort();

const parseFailures: { file: string; error: string }[] = [];
const roundTripFailures: { file: string; error: string }[] = [];
const byVersion: Record<number, number> = {};

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  let model: PIEModel;
  try {
    model = PIEModel.parse(text);
  } catch (e) {
    parseFailures.push({ file, error: (e as Error).message.split('\n')[0] });
    continue;
  }
  byVersion[model.header.version] = (byVersion[model.header.version] || 0) + 1;
  try {
    const reparsed = PIEModel.parse(model.serialize());
    assert.deepStrictEqual(reparsed.levels, model.levels);
    assert.deepStrictEqual(reparsed.header, model.header);
  } catch (e) {
    roundTripFailures.push({ file, error: (e as Error).message.split('\n')[0] });
  }
}

console.log(`Parsed ${files.length} files by version: ${JSON.stringify(byVersion)}`);
console.log(`Parse failures: ${parseFailures.length}, Round-trip failures: ${roundTripFailures.length}\n`);

const show = (label: string, list: { file: string; error: string }[]) => {
  if (list.length === 0) return;
  console.log(`== ${label} ==`);
  for (const f of (verbose ? list : list.slice(0, 30))) {
    console.log(`${f.file}\n  ${f.error}`);
  }
  if (!verbose && list.length > 30) console.log(`... and ${list.length - 30} more`);
};
show('PARSE FAILURES', parseFailures);
show('ROUND-TRIP FAILURES', roundTripFailures);
