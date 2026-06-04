// Demo CLI: batch-convert a directory tree of .pie models to glTF 2.0 files.
//
//   node --require ts-node/register scripts/pie2gltf-batch.ts <inputDir> <outputDir> [options]
//
// Options:
//   --no-texture     Export geometry only (skip fetching textures).
//   --shared         Write texture PNGs once to <outputDir>/textures and have the
//                    glTFs reference them (smaller output). NOTE: this uses a
//                    `../textures/...` relative path, which some viewers that
//                    sandbox/serve the file cannot resolve. The default embeds
//                    each texture so the files are self-contained and just work.
//   --limit=N        Convert at most N files (useful for a quick sample).
//
// Output mirrors the input directory structure under <outputDir>, with each
// `foo.pie` written as `foo.gltf`. Textures are fetched once per page from the
// Warzone 2100 texture repo and cached across files.
import * as fs from 'fs';
import * as path from 'path';
import { PIEModel } from '../src/pie-model';
import { exportGLTF } from '../src/gltf-export';

const WZ_TEXTURE_BASE =
  'https://raw.githubusercontent.com/Warzone2100/data-texpages/master';

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.toLowerCase().endsWith('.pie')) out.push(full);
  }
  return out;
}

const textureCache = new Map<string, Uint8Array | null>();

async function getTexture(filename: string | undefined, enabled: boolean): Promise<Uint8Array | null> {
  if (!enabled || !filename) return null;
  const cached = textureCache.get(filename);
  if (cached !== undefined) return cached;

  let bytes: Uint8Array | null = null;
  try {
    const res = await fetch(`${WZ_TEXTURE_BASE}/${filename}`);
    if (res.ok) bytes = new Uint8Array(await res.arrayBuffer());
  } catch {
    /* network error -> export untextured */
  }
  textureCache.set(filename, bytes);
  return bytes;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const [inputDir, outputDir] = args.filter((a) => !a.startsWith('--'));
  if (!inputDir || !outputDir) {
    console.error('usage: pie2gltf-batch <inputDir> <outputDir> [--no-texture] [--limit=N]');
    process.exit(1);
  }
  const fetchTextures = !args.includes('--no-texture');
  const embed = !args.includes('--shared'); // self-contained by default
  const limitArg = args.find((a) => a.startsWith('--limit='));
  const limit = limitArg ? Number(limitArg.split('=')[1]) : Infinity;

  const files = walk(inputDir).sort().slice(0, limit);
  fs.mkdirSync(outputDir, { recursive: true });
  const textureDir = path.join(outputDir, 'textures');

  // In shared mode, write each fetched texture page once and remember its path.
  const writtenTextures = new Set<string>();
  const writeSharedTexture = (filename: string, bytes: Uint8Array): string => {
    const dest = path.join(textureDir, filename);
    if (!writtenTextures.has(filename)) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, bytes);
      writtenTextures.add(filename);
    }
    return dest;
  };

  let converted = 0;
  let textured = 0;
  const failures: { file: string; error: string }[] = [];

  for (const file of files) {
    const rel = path.relative(inputDir, file).replace(/\.pie$/i, '.gltf');
    const outPath = path.join(outputDir, rel);
    try {
      const model = PIEModel.parse(fs.readFileSync(file, 'utf8'));
      const filename = model.header.textures[0]?.filename;
      const bytes = await getTexture(filename, fetchTextures);

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      let gltf: string;
      if (bytes && embed) {
        gltf = exportGLTF(model, { texturePng: bytes });
        textured++;
      } else if (bytes && filename) {
        const texPath = writeSharedTexture(filename, bytes);
        const textureUri = path.relative(path.dirname(outPath), texPath);
        gltf = exportGLTF(model, { textureUri });
        textured++;
      } else {
        gltf = exportGLTF(model);
      }
      fs.writeFileSync(outPath, gltf);
      converted++;
    } catch (e) {
      failures.push({ file, error: (e as Error).message.split('\n')[0] });
    }
  }

  console.log(
    `Converted ${converted}/${files.length} .pie -> glTF in ${outputDir} ` +
      `(${textured} textured, ${textureCache.size} texture pages fetched, ` +
      `${embed ? 'embedded' : `${writtenTextures.size} shared`}, ${failures.length} failed)`
  );
  for (const f of failures.slice(0, 20)) {
    console.log(`  FAILED ${f.file}\n    ${f.error}`);
  }
  if (failures.length > 20) console.log(`  ... and ${failures.length - 20} more`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
