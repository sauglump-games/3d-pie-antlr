# PIE File Format Documentation

## PIE2 Format

The PIE2 file format has specific formatting characteristics that need to be handled carefully when parsing.

### File Structure

A PIE2 file consists of the following sections in order:

1. `PIE 2` header
2. Optional `TYPE` section
3. Optional `TEXTURE` section
4. `LEVELS` section which contains:
   - `LEVEL` subsection(s)
   - `POINTS` definition
   - `POLYGONS` definition
5. Optional `CONNECTORS` section

### Whitespace Handling

A key characteristic of the PIE2 format is its inconsistent whitespace usage:

- Section headers (`PIE`, `TYPE`, etc.) are followed by variable amounts of whitespace
- Integer values are often surrounded by whitespace
- The last line of a file may not end with a newline

### Polygon Format

Polygons in the PIE2 format follow this structure:

```
[type] [num_vertices] [vertex_indices...] [texture_coordinates...]
```

Where:
- `type` is an integer that defines the polygon type
- `num_vertices` is the number of vertices in the polygon
- `vertex_indices` are indices into the points list
- `texture_coordinates` are pairs of coordinates for texture mapping

The number of texture coordinates varies based on the polygon type and number of vertices.

### Grammar Implementation Notes

For successful parsing of PIE2 files:

1. Define explicit lexer rules for section headers that include whitespace
2. Handle integer values with optional surrounding whitespace
3. Make polygon definitions flexible enough for variable numbers of values
4. Support both newline and EOF at the end of sections

These considerations ensure robust parsing of PIE2 files despite formatting variations.

## PIE3 and PIE4 Formats

PIE3 and PIE4 share PIE2's overall shape (header → levels → per-level
points/polygons) and add several directives:

- `INTERPOLATE <n>` — animation interpolation flag (PIE3/PIE4).
- `EVENT <type> <file.pie>` — references an animation model (PIE2/PIE3).
- `NORMALS <n>` — explicit vertex normals (PIE3, rare).
- `ANIMOBJECT <a> <b> <c>` — an animation block; each following line is a frame
  (`<frame> <9 transform numbers>`). Found in PIE2, PIE3 and PIE4.
- `TCMASK <n> <file>` — team-colour mask texture (PIE4).
- `TEXTURE <id> <file> [<w> <h>]` — the width/height pair is **optional** in
  PIE3/PIE4 (e.g. `TEXTURE 0 page-34-buildings.png`).
- Zero-count sections are legal: `POINTS 0` / `POLYGONS 0` with no records.
- `CONNECTORS` are per-level in PIE2/PIE3 (a level may carry its own block before
  the next `LEVEL`), but file-level in PIE4.

## Grammar Design Notes (all versions)

The three grammars converge on a single lexing style:

- **Spaces and tabs are skipped**, numeric tokens are pure (no whitespace baked
  into the token).
- **Newlines are significant** and act as record terminators. This is essential:
  a polygon line (`flags count indices... uv...`) has no in-band marker for where
  the UV list ends, so without newline anchoring the parser cannot tell where one
  polygon stops and the next begins.
- Consecutive newlines collapse into one token, so blank lines are tolerated.

## Parsing API

`PIEModel.parse(text)` decodes PIE 2, 3 and 4 into a `PIEModel`
(`header` + `levels[]`). It throws `PieSyntaxError` on malformed input and
`PieValidationError` when a declared count (e.g. `POINTS 26`) disagrees with the
records that follow.

`PIEModel#serialize()` writes a model back to PIE text. Output is **round-trip
safe** (it reparses to an equivalent model) but not guaranteed byte-identical to
the source — numeric formatting and incidental whitespace are normalized.
