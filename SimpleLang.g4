grammar  SimpleLang;

// Reglas sintácticas
programa     : instruccion+ ;
instruccion  : repeticion ;

repeticion   : 'repetir' '{' sentencia* '}' 'hasta' condicion ';' ;
sentencia    : salida | terminar ;
salida       : 'imprimir' '(' CADENA ')' ';' ;
terminar     : 'salir' ';' ;

condicion    : 'verdadero' | 'falso' ;

// Reglas léxicas
CADENA       : '"' (~["\\\r\n] | '\\' .)* '"' ;

LETRA        : [a-zA-Z] ;
DIGITO       : [0-9] ;
SIMBOLO      : [.,!?:] ;

REPETIR    : 'repetir' ; 
IMPRIMIR   : 'imprimir' ; 
SALIR      : 'salir' ; 
HASTA      : 'hasta' ; 
VERDADERO  : 'verdadero' ; 
FALSO      : 'falso' ; 

LLAVE_ABRE : '{' ;
LLAVE_CIERRA : '}' ;
PAR_ABRE   : '(' ;
PAR_CIERRA : ')' ;
PUNTO_Y_COMA : ';' ;

// Espacios en blanco
WS           : [ \t\r\n]+ -> skip ;
