"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
    ;
}
;
class ContaPF extends Conta {
}
;
class ContaPJ extends Conta {
}
const conta1 = new ContaPF(123456789, "Carlos");
const conta2 = new ContaPJ(987654321, "CFBCursos");
console.log(conta1.titular);
console.log(conta2.titular);
