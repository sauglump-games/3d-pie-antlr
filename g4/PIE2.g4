grammar PIE2;

pieFile
    : PIE_HEADER NL
      typeSection?
      textureSection?
      eventSection*
      levelsSection
      connectorSection?
      EOF
    ;

// Lexer rules for section headers
PIE_HEADER : 'PIE' [ \t]+ '2' ;
TYPE_HEADER : 'TYPE' [ \t]+ ;
EVENT_HEADER : 'EVENT' [ \t]+ ;
TEXTURE_HEADER : 'TEXTURE' [ \t]+ ;
LEVELS_HEADER : 'LEVELS' [ \t]+ ;
LEVEL_HEADER : 'LEVEL' [ \t]+ ;
POINTS_HEADER : 'POINTS' [ \t]+ ;
POLYGONS_HEADER : 'POLYGONS' [ \t]+ ;
CONNECTORS_HEADER : 'CONNECTORS' [ \t]+ ;
ANIMOBJECT_HEADER : 'ANIMOBJECT' [ \t]+ ;

typeSection
    : TYPE_HEADER number NL
    ;

eventSection
    : EVENT_HEADER number STRING NL
    ;

textureSection
    : TEXTURE_HEADER number STRING number number NL
    ;

levelsSection
    : LEVELS_HEADER number NL levelSection+
    ;

// A level may be followed by per-level CONNECTORS and/or ANIMOBJECT blocks
// before the next LEVEL (observed in real Warzone 2100 models).
levelSection
    : LEVEL_HEADER number NL
      pointsSection
      polygonsSection
      (connectorSection | animObjectSection)*
    ;

pointsSection
    : POINTS_HEADER number NL
      pointCoordinate*
    ;

pointCoordinate
    : number number number (NL | EOF)
    ;

polygonsSection
    : POLYGONS_HEADER number NL
      polygon*
    ;

polygon
    : number number number number number (number)* (NL | EOF)
    ;

connectorSection
    : CONNECTORS_HEADER number NL
      connector*
    ;

connector
    : number number number (NL | EOF)
    ;

animObjectSection
    : ANIMOBJECT_HEADER number number number NL
      animFrame+
    ;

animFrame
    : number number number number number number number number number number (NL | EOF)
    ;

number
    : INTEGER
    | FLOAT
    ;

// Lexer Rules
//
// Spaces and tabs are skipped; newlines are significant record terminators.
// Numeric tokens are pure (no embedded whitespace) — surrounding spacing is
// handled by the WS skip rule rather than baked into every value token.
INTEGER : '-'? [0-9]+ ;
FLOAT   : '-'? [0-9]+ ('.' [0-9]+)? ;
STRING  : [a-zA-Z0-9./_-]+ ;
NL      : ('\r'? '\n')+ ;
WS      : [ \t]+ -> skip ;
