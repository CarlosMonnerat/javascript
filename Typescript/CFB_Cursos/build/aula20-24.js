"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    ;
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    ;
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
    }
    ;
    saldo() {
        return this.saldoConta;
    }
    ;
    deposito(valor) {
        if (valor < 0) {
            console.log(`Valor Inválido`);
            return;
        }
        this.saldoConta += valor;
        console.log(`Depósito realizado com sucesso`);
    }
    ;
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor Inválido`);
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldoConta -= valor;
            console.log(`Saque realizado com sucesso`);
        }
        else {
            console.log(`Saldo insuficiente`);
        }
    }
    ;
}
;
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    ;
    info() {
        console.log(`Tipo...: Pessoa Física`);
        super.info();
        console.log(`CPF....: ${this.cpf}`);
        console.log(`--------------------------`);
    }
    ;
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor muito alto para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    ;
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor muito alto para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
    ;
}
;
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    ;
    info() {
        console.log(`Tipo...: Pessoa Jurídica`);
        super.info();
        console.log(`CNPJ...: ${this.cnpj}`);
        console.log(`--------------------------`);
    }
    ;
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor muito alto para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    ;
    saque(valor) {
        if (valor > 10000) {
            console.log(`Valor muito alto para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
    ;
}
const conta1 = new ContaPF(1111111, "Carlos");
const conta2 = new ContaPJ(2222222, "CFBCursos");
conta2.deposito(-5000);
conta2.deposito(10000);
conta2.deposito(5000);
console.log(conta2.saldo());
console.log("---------------");
conta2.saque(1000);
console.log(conta2.saldo());
