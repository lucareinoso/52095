// Generated from c:/Users/lucam/ssl-antlr-calculator/SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
import SimpleLangVisitor from './SimpleLangVisitor.js';

const serializedATN = [4,1,16,50,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,1,1,1,1,2,1,2,1,2,5,2,25,8,
2,10,2,12,2,28,9,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,3,3,37,8,3,1,4,1,4,1,4,1,
4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,9,10,45,
0,15,1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,36,1,0,0,0,8,38,1,0,0,0,10,44,1,
0,0,0,12,47,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,
0,0,17,18,1,0,0,0,18,1,1,0,0,0,19,20,3,4,2,0,20,3,1,0,0,0,21,22,5,5,0,0,
22,26,5,11,0,0,23,25,3,6,3,0,24,23,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,
27,1,0,0,0,27,29,1,0,0,0,28,26,1,0,0,0,29,30,5,12,0,0,30,31,5,8,0,0,31,32,
3,12,6,0,32,33,5,15,0,0,33,5,1,0,0,0,34,37,3,8,4,0,35,37,3,10,5,0,36,34,
1,0,0,0,36,35,1,0,0,0,37,7,1,0,0,0,38,39,5,6,0,0,39,40,5,13,0,0,40,41,5,
1,0,0,41,42,5,14,0,0,42,43,5,15,0,0,43,9,1,0,0,0,44,45,5,7,0,0,45,46,5,15,
0,0,46,11,1,0,0,0,47,48,7,0,0,0,48,13,1,0,0,0,3,17,26,36];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, null, null, null, null, "'repetir'", "'imprimir'", 
                            "'salir'", "'hasta'", "'verdadero'", "'falso'", 
                            "'{'", "'}'", "'('", "')'", "';'" ];
    static symbolicNames = [ null, "CADENA", "LETRA", "DIGITO", "SIMBOLO", 
                             "REPETIR", "IMPRIMIR", "SALIR", "HASTA", "VERDADERO", 
                             "FALSO", "LLAVE_ABRE", "LLAVE_CIERRA", "PAR_ABRE", 
                             "PAR_CIERRA", "PUNTO_Y_COMA", "WS" ];
    static ruleNames = [ "programa", "instruccion", "repeticion", "sentencia", 
                         "salida", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.instruccion();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLangParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.repeticion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeticion() {
	    let localctx = new RepeticionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLangParser.RULE_repeticion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(SimpleLangParser.REPETIR);
	        this.state = 22;
	        this.match(SimpleLangParser.LLAVE_ABRE);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 23;
	            this.sentencia();
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 29;
	        this.match(SimpleLangParser.LLAVE_CIERRA);
	        this.state = 30;
	        this.match(SimpleLangParser.HASTA);
	        this.state = 31;
	        this.condicion();
	        this.state = 32;
	        this.match(SimpleLangParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLangParser.RULE_sentencia);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.salida();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleLangParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(SimpleLangParser.IMPRIMIR);
	        this.state = 39;
	        this.match(SimpleLangParser.PAR_ABRE);
	        this.state = 40;
	        this.match(SimpleLangParser.CADENA);
	        this.state = 41;
	        this.match(SimpleLangParser.PAR_CIERRA);
	        this.state = 42;
	        this.match(SimpleLangParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleLangParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(SimpleLangParser.SALIR);
	        this.state = 45;
	        this.match(SimpleLangParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleLangParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===10)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.CADENA = 1;
SimpleLangParser.LETRA = 2;
SimpleLangParser.DIGITO = 3;
SimpleLangParser.SIMBOLO = 4;
SimpleLangParser.REPETIR = 5;
SimpleLangParser.IMPRIMIR = 6;
SimpleLangParser.SALIR = 7;
SimpleLangParser.HASTA = 8;
SimpleLangParser.VERDADERO = 9;
SimpleLangParser.FALSO = 10;
SimpleLangParser.LLAVE_ABRE = 11;
SimpleLangParser.LLAVE_CIERRA = 12;
SimpleLangParser.PAR_ABRE = 13;
SimpleLangParser.PAR_CIERRA = 14;
SimpleLangParser.PUNTO_Y_COMA = 15;
SimpleLangParser.WS = 16;

SimpleLangParser.RULE_programa = 0;
SimpleLangParser.RULE_instruccion = 1;
SimpleLangParser.RULE_repeticion = 2;
SimpleLangParser.RULE_sentencia = 3;
SimpleLangParser.RULE_salida = 4;
SimpleLangParser.RULE_terminar = 5;
SimpleLangParser.RULE_condicion = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_instruccion;
    }

	repeticion() {
	    return this.getTypedRuleContext(RepeticionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RepeticionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_repeticion;
    }

	REPETIR() {
	    return this.getToken(SimpleLangParser.REPETIR, 0);
	};

	LLAVE_ABRE() {
	    return this.getToken(SimpleLangParser.LLAVE_ABRE, 0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(SimpleLangParser.LLAVE_CIERRA, 0);
	};

	HASTA() {
	    return this.getToken(SimpleLangParser.HASTA, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(SimpleLangParser.PUNTO_Y_COMA, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterRepeticion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitRepeticion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitRepeticion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(SimpleLangParser.IMPRIMIR, 0);
	};

	PAR_ABRE() {
	    return this.getToken(SimpleLangParser.PAR_ABRE, 0);
	};

	CADENA() {
	    return this.getToken(SimpleLangParser.CADENA, 0);
	};

	PAR_CIERRA() {
	    return this.getToken(SimpleLangParser.PAR_CIERRA, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(SimpleLangParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(SimpleLangParser.SALIR, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(SimpleLangParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(SimpleLangParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(SimpleLangParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SimpleLangParser.ProgramaContext = ProgramaContext; 
SimpleLangParser.InstruccionContext = InstruccionContext; 
SimpleLangParser.RepeticionContext = RepeticionContext; 
SimpleLangParser.SentenciaContext = SentenciaContext; 
SimpleLangParser.SalidaContext = SalidaContext; 
SimpleLangParser.TerminarContext = TerminarContext; 
SimpleLangParser.CondicionContext = CondicionContext; 
