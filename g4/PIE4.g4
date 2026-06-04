grammar PIE4;

pieFile
    : pieHeader
      typeSection?
      interpolateSection?
      textureSection*
      tcmaskSection*
      levelsSection
      connectorSection?
      levelSection*
      EOF
    ;

pieHeader
    : PIE_HEADER NL
    ;

// Lexer rules for section headers
PIE_HEADER : 'PIE' [ \t]+ '4' ;
TYPE_HEADER : 'TYPE' [ \t]+ ;
INTERPOLATE_HEADER : 'INTERPOLATE' [ \t]+ ;
TEXTURE_HEADER : 'TEXTURE' [ \t]+ ;
TCMASK_HEADER : 'TCMASK' [ \t]+ ;
LEVELS_HEADER : 'LEVELS' [ \t]+ ;
LEVEL_HEADER : 'LEVEL' [ \t]+ ;
POINTS_HEADER : 'POINTS' [ \t]+ ;
POLYGONS_HEADER : 'POLYGONS' [ \t]+ ;
CONNECTORS_HEADER : 'CONNECTORS' [ \t]+ ;
ANIMOBJECT_HEADER : 'ANIMOBJECT' [ \t]+ ;

typeSection
    : TYPE_HEADER number NL
    ;

interpolateSection
    : INTERPOLATE_HEADER number NL
    ;

textureSection
    : TEXTURE_HEADER number STRING (number number)? NL
    ;

tcmaskSection
    : TCMASK_HEADER number STRING NL
    ;

levelsSection
    : LEVELS_HEADER number NL levelSection
    ;

levelSection
    : LEVEL_HEADER (number | IDENTIFIER | STRING)* COMMENT_TOKEN* NL
      subLevelContent
    ;

subLevelContent
    : (typeSection | textureSection)* 
      pointsSection
      polygonsSection
      (animObjectSection polygonsSection?)*
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
    : number number number+ (NL | EOF)
    | number number number number number number+ (NL | EOF)  // For 4200 type polygons
    ;

animObjectSection
    : ANIMOBJECT_HEADER number number number NL
      animFrame+
    ;

animFrame
    : number number number number number number number number number number (NL | EOF)
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
    | SCIENTIFIC
    ;

// Lexer Rules
//
// Spaces and tabs are skipped; newlines are significant record terminators.
// Numeric tokens are pure (no embedded whitespace) — surrounding spacing is
// handled by the WS skip rule rather than baked into every value token.
// SCIENTIFIC must precede FLOAT/INTEGER so exponents are not split.
SCIENTIFIC : '-'? [0-9]+ ('.' [0-9]+)? [eE] [+-]? [0-9]+ ;
FLOAT   : '-'? [0-9]+ '.' [0-9]+ ;
INTEGER : '-'? [0-9]+ ;
IDENTIFIER : [a-zA-Z] [a-zA-Z0-9_]* ;
STRING  : [a-zA-Z0-9./#_\-]+ ;
NL      : ('\r'? '\n')+ ;
WS      : [ \t]+ -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;
COMMENT_TOKEN : '#' ~[\r\n]* ;
