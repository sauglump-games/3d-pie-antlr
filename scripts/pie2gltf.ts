// Demo CLI: convert a Warzone 2100 .pie model to a self-contained glTF 2.0 file.
//
//   node --require ts-node/register scripts/pie2gltf.ts <in.pie> <out.gltf> [texture.png]
//   node --require ts-node/register scripts/pie2gltf.ts <in.pie> <out.gltf> --fetch-texture
//
// With a texture (local PNG path, or --fetch-texture to download the matching
// texture page from the Warzone 2100 repo), the texture is embedded and the
// model renders fully textured. Without one, geometry is exported with a plain
// material. Open the output in Blender, the VS Code glTF preview, or
// https://gltf-viewer.donmccurdy.com/.
import * as fs from 'fs';
import { PIEModel } from '../src/pie-model';
import { exportGLTF } from '../src/gltf-export';

// Texture pages live in a separate submodule repo (data/base/texpages ->
// Warzone2100/data-texpages), with the page-*.png files at its root.
const WZ_TEXTURE_BASE =
  'https://raw.githubusercontent.com/Warzone2100/data-texpages/master';

async function fetchTexture(filename: string): Promise<Uint8Array | null> {
  const url = `${WZ_TEXTURE_BASE}/${filename}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`Could not fetch texture ${url} (HTTP ${res.status}); exporting untextured.`);
    return null;
  }
  return new Uint8Array(await res.arrayBuffer());
}

async function main(): Promise<void> {
  const [input, output, textureArg] = process.argv.slice(2);
  if (!input || !output) {
    console.error('usage: pie2gltf <in.pie> <out.gltf> [texture.png | --fetch-texture]');
    process.exit(1);
  }

  const model = PIEModel.parse(fs.readFileSync(input, 'utf8'));
  const textureName = model.header.textures[0]?.filename;

  let texturePng: Uint8Array | null = null;
  if (textureArg === '--fetch-texture' && textureName) {
    texturePng = await fetchTexture(textureName);
  } else if (textureArg && textureArg !== '--fetch-texture') {
    texturePng = fs.readFileSync(textureArg);
  }

  fs.writeFileSync(output, exportGLTF(model, { texturePng }));

  const level = model.levels[0];
  console.log(
    `Wrote ${output} — PIE${model.header.version}, ` +
      `${level.points.length} points, ${level.polygons.length} polygons, ` +
      `texture ${textureName ?? '(none)'}${texturePng ? ' [embedded]' : ''}`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
