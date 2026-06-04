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
