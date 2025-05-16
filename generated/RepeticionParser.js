// Generated from c:/Users/lucam/ssl-antlr-calculator/Repeticion.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RepeticionListener from './RepeticionListener.js';
import RepeticionVisitor from './RepeticionVisitor.js';

const serializedATN = [4,1,16,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,2,
1,2,1,2,5,2,29,8,2,10,2,12,2,32,9,2,1,2,1,2,1,2,1,2,1,2,1,3,4,3,40,8,3,11,
3,12,3,41,1,3,3,3,45,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,
1,7,5,7,60,8,7,10,7,12,7,63,9,7,1,7,1,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,
14,16,0,2,1,0,10,11,1,0,13,15,64,0,19,1,0,0,0,2,23,1,0,0,0,4,25,1,0,0,0,
6,44,1,0,0,0,8,46,1,0,0,0,10,52,1,0,0,0,12,55,1,0,0,0,14,57,1,0,0,0,16,66,
1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,
0,0,0,22,1,1,0,0,0,23,24,3,4,2,0,24,3,1,0,0,0,25,26,5,1,0,0,26,30,5,2,0,
0,27,29,3,6,3,0,28,27,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,
31,33,1,0,0,0,32,30,1,0,0,0,33,34,5,3,0,0,34,35,5,4,0,0,35,36,3,12,6,0,36,
37,5,5,0,0,37,5,1,0,0,0,38,40,3,8,4,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,
1,0,0,0,41,42,1,0,0,0,42,45,1,0,0,0,43,45,3,10,5,0,44,39,1,0,0,0,44,43,1,
0,0,0,45,7,1,0,0,0,46,47,5,6,0,0,47,48,5,7,0,0,48,49,3,14,7,0,49,50,5,8,
0,0,50,51,5,5,0,0,51,9,1,0,0,0,52,53,5,9,0,0,53,54,5,5,0,0,54,11,1,0,0,0,
55,56,7,0,0,0,56,13,1,0,0,0,57,61,5,12,0,0,58,60,3,16,8,0,59,58,1,0,0,0,
60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,61,1,0,0,0,64,
65,5,12,0,0,65,15,1,0,0,0,66,67,7,1,0,0,67,17,1,0,0,0,5,21,30,41,44,61];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RepeticionParser extends antlr4.Parser {

    static grammarFileName = "Repeticion.g4";
    static literalNames = [ null, "'repetir'", "'{'", "'}'", "'hasta'", 
                            "';'", "'imprimir'", "'('", "')'", "'salir'", 
                            "'verdadero'", "'falso'", "'\"'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "LETRA", "DIGITO", 
                             "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "repeticion", "sentencia", 
                         "salida", "terminar", "condicion", "cadena", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RepeticionParser.ruleNames;
        this.literalNames = RepeticionParser.literalNames;
        this.symbolicNames = RepeticionParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RepeticionParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.instruccion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
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
	    this.enterRule(localctx, 2, RepeticionParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
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
	    this.enterRule(localctx, 4, RepeticionParser.RULE_repeticion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(RepeticionParser.T__0);
	        this.state = 26;
	        this.match(RepeticionParser.T__1);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===9) {
	            this.state = 27;
	            this.sentencia();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
	        this.match(RepeticionParser.T__2);
	        this.state = 34;
	        this.match(RepeticionParser.T__3);
	        this.state = 35;
	        this.condicion();
	        this.state = 36;
	        this.match(RepeticionParser.T__4);
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
	    this.enterRule(localctx, 6, RepeticionParser.RULE_sentencia);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.state = 39; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 38;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 41; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 9:
	            this.state = 43;
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
	    this.enterRule(localctx, 8, RepeticionParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(RepeticionParser.T__5);
	        this.state = 47;
	        this.match(RepeticionParser.T__6);
	        this.state = 48;
	        this.cadena();
	        this.state = 49;
	        this.match(RepeticionParser.T__7);
	        this.state = 50;
	        this.match(RepeticionParser.T__4);
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
	    this.enterRule(localctx, 10, RepeticionParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(RepeticionParser.T__8);
	        this.state = 53;
	        this.match(RepeticionParser.T__4);
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
	    this.enterRule(localctx, 12, RepeticionParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
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



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RepeticionParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(RepeticionParser.T__11);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0)) {
	            this.state = 58;
	            this.caracter();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 64;
	        this.match(RepeticionParser.T__11);
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



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RepeticionParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0))) {
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

RepeticionParser.EOF = antlr4.Token.EOF;
RepeticionParser.T__0 = 1;
RepeticionParser.T__1 = 2;
RepeticionParser.T__2 = 3;
RepeticionParser.T__3 = 4;
RepeticionParser.T__4 = 5;
RepeticionParser.T__5 = 6;
RepeticionParser.T__6 = 7;
RepeticionParser.T__7 = 8;
RepeticionParser.T__8 = 9;
RepeticionParser.T__9 = 10;
RepeticionParser.T__10 = 11;
RepeticionParser.T__11 = 12;
RepeticionParser.LETRA = 13;
RepeticionParser.DIGITO = 14;
RepeticionParser.SIMBOLO = 15;
RepeticionParser.WS = 16;

RepeticionParser.RULE_programa = 0;
RepeticionParser.RULE_instruccion = 1;
RepeticionParser.RULE_repeticion = 2;
RepeticionParser.RULE_sentencia = 3;
RepeticionParser.RULE_salida = 4;
RepeticionParser.RULE_terminar = 5;
RepeticionParser.RULE_condicion = 6;
RepeticionParser.RULE_cadena = 7;
RepeticionParser.RULE_caracter = 8;

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
        this.ruleIndex = RepeticionParser.RULE_programa;
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
	    if(listener instanceof RepeticionListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepeticionVisitor ) {
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
        this.ruleIndex = RepeticionParser.RULE_instruccion;
    }

	repeticion() {
	    return this.getTypedRuleContext(RepeticionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepeticionVisitor ) {
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
        this.ruleIndex = RepeticionParser.RULE_repeticion;
    }

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
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
	    if(listener instanceof RepeticionListener ) {
	        listener.enterRepeticion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.exitRepeticion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepeticionVisitor ) {
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
        this.ruleIndex = RepeticionParser.RULE_sentencia;
    }

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepeticionVisitor ) {
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
        this.ruleIndex = RepeticionParser.RULE_salida;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepeticionVisitor ) {
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
        this.ruleIndex = RepeticionParser.RULE_terminar;
    }


	enterRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepeticionVisitor ) {
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
        this.ruleIndex = RepeticionParser.RULE_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepeticionVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepeticionParser.RULE_cadena;
    }

	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepeticionVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepeticionParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(RepeticionParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(RepeticionParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(RepeticionParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepeticionListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepeticionVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RepeticionParser.ProgramaContext = ProgramaContext; 
RepeticionParser.InstruccionContext = InstruccionContext; 
RepeticionParser.RepeticionContext = RepeticionContext; 
RepeticionParser.SentenciaContext = SentenciaContext; 
RepeticionParser.SalidaContext = SalidaContext; 
RepeticionParser.TerminarContext = TerminarContext; 
RepeticionParser.CondicionContext = CondicionContext; 
RepeticionParser.CadenaContext = CadenaContext; 
RepeticionParser.CaracterContext = CaracterContext; 
