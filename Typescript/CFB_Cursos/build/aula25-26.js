"use strict";
class Contas {
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
    get saldo() {
        return this.saldoConta;
    }
    ;
    set saldo(saldoConta) {
        this.saldoConta = saldoConta;
    }
    ;
    deposito(valor) {
        if (valor < 0) {
            console.log(`Valor Inválido`);
            return;
        }
        this.saldo += valor;
        console.log(`Depósito realizado com sucesso`);
    }
    ;
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor Inválido`);
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldo -= valor;
            console.log(`Saque realizado com sucesso`);
        }
        else {
            console.log(`Saldo insuficiente`);
        }
    }
    ;
}
;
class Cont_PF extends Contas {
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
class Cont_PJ extends Contas {
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
const conta3 = new Cont_PF(1111111, "Carlos");
const conta4 = new Cont_PJ(2222222, "CFBCursos");
conta3.deposito(800);
conta3.deposito(500);
conta3.deposito(700);
console.log(conta3.saldo);
conta3.info();
