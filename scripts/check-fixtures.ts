// Dev harness: run a directory tree of .pie files through the version-matched
// lexer/parser and report any lexer/parser errors. Not part of the test suite.
//
//   node --require ts-node/register scripts/check-fixtures.ts <dir> [--verbose]
import * as fs from 'fs';
import * as path from 'path';
import { CharStreams, CommonTokenStream, ANTLRErrorListener, Recognizer } from 'antlr4ts';

import { PIE2Lexer } from '../src/g4/PIE2Lexer';
import { PIE2Parser } from '../src/g4/PIE2Parser';
import { PIE3Lexer } from '../src/g4/PIE3Lexer';
import { PIE3Parser } from '../src/g4/PIE3Parser';
import { PIE4Lexer } from '../src/g4/PIE4Lexer';
import { PIE4Parser } from '../src/g4/PIE4Parser';

class Collector implements ANTLRErrorListener<any> {
  errors: string[] = [];
  syntaxError<T>(_r: Recognizer<T, any>, _sym: T, line: number, col: number, msg: string): void {
    this.errors.push(`  ${line}:${col} ${msg}`);
  }
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.toLowerCase().endsWith('.pie')) out.push(full);
  }
  return out;
}

function detectVersion(text: string): number | null {
  const m = text.match(/^\s*PIE\s+(\d+)/);
  return m ? Number(m[1]) : null;
}

function check(text: string, version: number): string[] {
  const input = CharStreams.fromString(text);
  let lexer: any;
  let parser: any;
  if (version === 2) {
    lexer = new PIE2Lexer(input);
    parser = new PIE2Parser(new CommonTokenStream(lexer));
  } else if (version === 3) {
    lexer = new PIE3Lexer(input);
    parser = new PIE3Parser(new CommonTokenStream(lexer));
  } else if (version === 4) {
    lexer = new PIE4Lexer(input);
    parser = new PIE4Parser(new CommonTokenStream(lexer));
  } else {
    return [`  unsupported PIE version ${version}`];
  }
  const collector = new Collector();
  lexer.removeErrorListeners();
  parser.removeErrorListeners();
  lexer.addErrorListener(collector);
  parser.addErrorListener(collector);
  parser.pieFile();
  return collector.errors;
}

const dir = process.argv[2] || 'test/fixtures';
const verbose = process.argv.includes('--verbose');
const files = walk(dir).sort();

const byVersion: Record<string, number> = {};
const failures: { file: string; version: number | null; errors: string[] }[] = [];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const version = detectVersion(text);
  const key = version === null ? 'unknown' : `PIE${version}`;
  byVersion[key] = (byVersion[key] || 0) + 1;
  let errors: string[];
  try {
    errors = version === null ? ['  no PIE header'] : check(text, version);
  } catch (e) {
    errors = [`  threw: ${(e as Error).message}`];
  }
  if (errors.length > 0) failures.push({ file, version, errors });
}

console.log(`Checked ${files.length} files: ${JSON.stringify(byVersion)}`);
console.log(`Clean: ${files.length - failures.length}, With errors: ${failures.length}\n`);

const shown = verbose ? failures : failures.slice(0, 40);
for (const f of shown) {
  console.log(`PIE${f.version} ${f.file}`);
  for (const e of f.errors.slice(0, verbose ? 100 : 4)) console.log(e);
}
if (!verbose && failures.length > shown.length) {
  console.log(`\n... and ${failures.length - shown.length} more (use --verbose)`);
}
