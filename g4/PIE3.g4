grammar PIE3;

// Parser Rules
pieFile
    : pieHeader pieBody EOF
    ;

pieHeader
    : PIE pieVersion typeInfo? interpolateInfo? textureInfo? eventInfo* normalMap? specularMap?
    ;

pieBody
    : levelsHeader levelList
    ;

levelsHeader
    : LEVELS INT
    ;

levelList
    : level+
    ;

level
    : LEVEL INT (pointsData | normalsData | polygonsData | connectorData | animObjectData)*
    ;

pieVersion
    : INT
    ;

typeInfo
    : TYPE INT
    ;

interpolateInfo
    : INTERPOLATE INT
    ;

eventInfo
    : EVENT INT STRING
    ;

textureInfo
    : TEXTURE INT STRING INT INT
    ;

normalMap
    : NORMALMAP INT STRING
    ;

specularMap
    : SPECULARMAP INT STRING
    ;

pointsData
    : POINTS INT pointList
    ;

pointList
    : point+
    ;

point
    : number number number
    ;

normalsData
    : NORMALS INT normalsList
    ;

normalsList
    : normal+
    ;

normal
    : number number number (number number number)* 
    ;

number
    : INT | FLOAT | NEG_NUMBER | SCI_NUMBER | NEG_SCI_NUMBER
    ;

polygonsData
    : POLYGONS INT polygonList
    ;

polygonList
    : polygon+
    ;

polygon
    : INT INT cornerData (number number)*
    ;

cornerData
    : INT+
    ;

connectorData
    : CONNECTORS INT connectorList
    ;

connectorList
    : connector+
    ;

connector
    : number number number
    ;

animObjectData
    : ANIMOBJECT INT INT INT animFrameList
    ;

animFrameList
    : animFrame+
    ;

animFrame
    : INT number number number number number number number number number
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

// Skip whitespace and comments
WS : [ \t\r\n]+ -> skip ;
COMMENT : '//' ~[\r\n]* -> skip ;
