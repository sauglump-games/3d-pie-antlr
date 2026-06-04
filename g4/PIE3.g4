grammar PIE3;

// Parser Rules
//
// Records (points, polygons, connectors, anim frames) are terminated by a
// newline. Spaces and tabs are skipped by the lexer, but newlines are
// significant: they are what makes a polygon line unambiguous, since the format
// gives no in-band marker for where one polygon's UV list ends and the next
// polygon begins.
pieFile
    : pieHeader pieBody EOF
    ;

pieHeader
    : PIE pieVersion NL
      typeInfo?
      interpolateInfo?
      textureInfo?
      eventInfo*
      normalMap?
      specularMap?
    ;

pieBody
    : levelsHeader levelList
    ;

levelsHeader
    : LEVELS INT NL
    ;

levelList
    : level+
    ;

level
    : LEVEL INT NL (pointsData | normalsData | polygonsData | connectorData | animObjectData)*
    ;

pieVersion
    : INT
    ;

typeInfo
    : TYPE INT NL
    ;

interpolateInfo
    : INTERPOLATE INT NL
    ;

eventInfo
    : EVENT INT STRING NL
    ;

textureInfo
    : TEXTURE INT STRING (INT INT)? NL
    ;

normalMap
    : NORMALMAP INT STRING NL
    ;

specularMap
    : SPECULARMAP INT STRING NL
    ;

pointsData
    : POINTS INT NL pointList
    ;

pointList
    : point*
    ;

point
    : number number number (NL | EOF)
    ;

normalsData
    : NORMALS INT NL normalsList
    ;

normalsList
    : normal+
    ;

normal
    : number number number (number number number)* (NL | EOF)
    ;

number
    : INT | FLOAT | NEG_NUMBER | SCI_NUMBER | NEG_SCI_NUMBER
    ;

polygonsData
    : POLYGONS INT NL polygonList
    ;

polygonList
    : polygon*
    ;

polygon
    : INT INT cornerData (number number)* (NL | EOF)
    ;

cornerData
    : INT+
    ;

connectorData
    : CONNECTORS INT NL connectorList
    ;

connectorList
    : connector*
    ;

connector
    : number number number (NL | EOF)
    ;

animObjectData
    : ANIMOBJECT INT INT INT NL animFrameList
    ;

animFrameList
    : animFrame+
    ;

animFrame
    : INT number number number number number number number number number (NL | EOF)
    ;

// Lexer Rules
PIE : 'PIE' ;
TYPE : 'TYPE' ;
INTERPOLATE : 'INTERPOLATE' ;
EVENT : 'EVENT' ;
TEXTURE : 'TEXTURE' ;
NORMALMAP : 'NORMALMAP' ;
SPECULARMAP : 'SPECULARMAP' ;
LEVELS : 'LEVELS' ;
LEVEL : 'LEVEL' ;
POINTS : 'POINTS' ;
POLYGONS : 'POLYGONS' ;
CONNECTORS : 'CONNECTORS' ;
NORMALS : 'NORMALS' ;
ANIMOBJECT : 'ANIMOBJECT' ;

// Number handling - must be defined before STRING to have higher priority
INT : [0-9]+ ;
FLOAT : [0-9]+ '.' [0-9]+ ;
NEG_NUMBER : '-' [0-9]+ ('.' [0-9]+)? ;
SCI_NUMBER : [0-9]+ ('.' [0-9]+)? [eE][+-]?[0-9]+ ;
NEG_SCI_NUMBER : '-' [0-9]+ ('.' [0-9]+)? [eE][+-]?[0-9]+ ;

// Allow for strings with hyphens or underscores - must come after INT
STRING : '"' (~["\r\n])* '"' | [a-zA-Z][a-zA-Z0-9/_.-]* ;

// Newlines are significant (record terminators); consecutive newlines and
// surrounding blank lines collapse into a single token so blank lines are
// tolerated. Spaces, tabs and comments are skipped.
NL : ('\r'? '\n')+ ;
WS : [ \t]+ -> skip ;
COMMENT : '//' ~[\r\n]* -> skip ;
