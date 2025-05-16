// Generated from c:/Users/lucam/ssl-antlr-calculator/SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,112,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,0,5,0,38,8,0,10,0,12,0,41,
9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,
1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,
1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,4,15,107,8,15,11,
15,12,15,108,1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
10,21,11,23,12,25,13,27,14,29,15,31,16,1,0,5,4,0,10,10,13,13,34,34,92,92,
2,0,65,90,97,122,1,0,48,57,5,0,33,33,44,44,46,46,58,58,63,63,3,0,9,10,13,
13,32,32,114,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,
0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,
0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,1,
33,1,0,0,0,3,44,1,0,0,0,5,46,1,0,0,0,7,48,1,0,0,0,9,50,1,0,0,0,11,58,1,0,
0,0,13,67,1,0,0,0,15,73,1,0,0,0,17,79,1,0,0,0,19,89,1,0,0,0,21,95,1,0,0,
0,23,97,1,0,0,0,25,99,1,0,0,0,27,101,1,0,0,0,29,103,1,0,0,0,31,106,1,0,0,
0,33,39,5,34,0,0,34,38,8,0,0,0,35,36,5,92,0,0,36,38,9,0,0,0,37,34,1,0,0,
0,37,35,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,
41,39,1,0,0,0,42,43,5,34,0,0,43,2,1,0,0,0,44,45,7,1,0,0,45,4,1,0,0,0,46,
47,7,2,0,0,47,6,1,0,0,0,48,49,7,3,0,0,49,8,1,0,0,0,50,51,5,114,0,0,51,52,
5,101,0,0,52,53,5,112,0,0,53,54,5,101,0,0,54,55,5,116,0,0,55,56,5,105,0,
0,56,57,5,114,0,0,57,10,1,0,0,0,58,59,5,105,0,0,59,60,5,109,0,0,60,61,5,
112,0,0,61,62,5,114,0,0,62,63,5,105,0,0,63,64,5,109,0,0,64,65,5,105,0,0,
65,66,5,114,0,0,66,12,1,0,0,0,67,68,5,115,0,0,68,69,5,97,0,0,69,70,5,108,
0,0,70,71,5,105,0,0,71,72,5,114,0,0,72,14,1,0,0,0,73,74,5,104,0,0,74,75,
5,97,0,0,75,76,5,115,0,0,76,77,5,116,0,0,77,78,5,97,0,0,78,16,1,0,0,0,79,
80,5,118,0,0,80,81,5,101,0,0,81,82,5,114,0,0,82,83,5,100,0,0,83,84,5,97,
0,0,84,85,5,100,0,0,85,86,5,101,0,0,86,87,5,114,0,0,87,88,5,111,0,0,88,18,
1,0,0,0,89,90,5,102,0,0,90,91,5,97,0,0,91,92,5,108,0,0,92,93,5,115,0,0,93,
94,5,111,0,0,94,20,1,0,0,0,95,96,5,123,0,0,96,22,1,0,0,0,97,98,5,125,0,0,
98,24,1,0,0,0,99,100,5,40,0,0,100,26,1,0,0,0,101,102,5,41,0,0,102,28,1,0,
0,0,103,104,5,59,0,0,104,30,1,0,0,0,105,107,7,4,0,0,106,105,1,0,0,0,107,
108,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,111,6,15,
0,0,111,32,1,0,0,0,4,0,37,39,108,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SimpleLangLexer extends antlr4.Lexer {

    static grammarFileName = "SimpleLang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, "'repetir'", "'imprimir'", 
                         "'salir'", "'hasta'", "'verdadero'", "'falso'", 
                         "'{'", "'}'", "'('", "')'", "';'" ];
	static symbolicNames = [ null, "CADENA", "LETRA", "DIGITO", "SIMBOLO", 
                          "REPETIR", "IMPRIMIR", "SALIR", "HASTA", "VERDADERO", 
                          "FALSO", "LLAVE_ABRE", "LLAVE_CIERRA", "PAR_ABRE", 
                          "PAR_CIERRA", "PUNTO_Y_COMA", "WS" ];
	static ruleNames = [ "CADENA", "LETRA", "DIGITO", "SIMBOLO", "REPETIR", 
                      "IMPRIMIR", "SALIR", "HASTA", "VERDADERO", "FALSO", 
                      "LLAVE_ABRE", "LLAVE_CIERRA", "PAR_ABRE", "PAR_CIERRA", 
                      "PUNTO_Y_COMA", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

SimpleLangLexer.EOF = antlr4.Token.EOF;
SimpleLangLexer.CADENA = 1;
SimpleLangLexer.LETRA = 2;
SimpleLangLexer.DIGITO = 3;
SimpleLangLexer.SIMBOLO = 4;
SimpleLangLexer.REPETIR = 5;
SimpleLangLexer.IMPRIMIR = 6;
SimpleLangLexer.SALIR = 7;
SimpleLangLexer.HASTA = 8;
SimpleLangLexer.VERDADERO = 9;
SimpleLangLexer.FALSO = 10;
SimpleLangLexer.LLAVE_ABRE = 11;
SimpleLangLexer.LLAVE_CIERRA = 12;
SimpleLangLexer.PAR_ABRE = 13;
SimpleLangLexer.PAR_CIERRA = 14;
SimpleLangLexer.PUNTO_Y_COMA = 15;
SimpleLangLexer.WS = 16;



