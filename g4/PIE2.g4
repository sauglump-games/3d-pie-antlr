grammar PIE2;

pieFile
    : PIE_HEADER NL
      typeSection?
      textureSection?
      levelsSection
      connectorSection?
      EOF
    ;

// Lexer rules for section headers
PIE_HEADER : 'PIE' [ \t]+ '2' ;
TYPE_HEADER : 'TYPE' [ \t]+ ;
TEXTURE_HEADER : 'TEXTURE' [ \t]+ ;
LEVELS_HEADER : 'LEVELS' [ \t]+ ;
LEVEL_HEADER : 'LEVEL' [ \t]+ ;
POINTS_HEADER : 'POINTS' [ \t]+ ;
POLYGONS_HEADER : 'POLYGONS' [ \t]+ ;
CONNECTORS_HEADER : 'CONNECTORS' [ \t]+ ;

typeSection
    : TYPE_HEADER number NL
    ;

textureSection
    : TEXTURE_HEADER number STRING number number NL
    ;

levelsSection
    : LEVELS_HEADER number NL levelSection+
    ;

levelSection
    : LEVEL_HEADER number NL
      pointsSection
      polygonsSection
    ;

pointsSection
    : POINTS_HEADER number NL
      pointCoordinate+
    ;

pointCoordinate
    : number number number NL
    ;

polygonsSection
    : POLYGONS_HEADER number NL
      polygon+
    ;

polygon
    : number number number number number (number)* (NL | EOF)
    ;

connectorSection
    : CONNECTORS_HEADER number NL
      connector+
    ;

connector
    : number number number (NL | EOF)
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
