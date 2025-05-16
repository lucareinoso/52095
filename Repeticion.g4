grammar Repeticion;

programa       : instruccion+ ;
instruccion    : repeticion ;

repeticion     : 'repetir' '{' sentencia* '}' 'hasta' condicion ';' ;
sentencia      : (salida+ | terminar) ;
salida         : 'imprimir' '(' cadena ')' ';' ;
terminar       : 'salir' ';' ;

condicion      : 'verdadero' | 'falso' ;
cadena         : '"' caracter* '"' ;
caracter       : LETRA | DIGITO | SIMBOLO ;

LETRA          : [a-zA-Z] ;
DIGITO         : [0-9] ;
SIMBOLO        : [.,!?;:] ;

WS             : [ \t\r\n]+ -> skip ;
