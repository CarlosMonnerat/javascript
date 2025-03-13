"use strict";
class Computado {
    nome;
    ram;
    cpu;
    ligado;
    constructor(n, r, c) {
        this.nome = n;
        this.ram = r;
        this.cpu = c;
        this.ligado = false;
    }
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
;
const computa1 = new Computado("Rapidão", 64, 10);
const computa2 = new Computado("Carão", 32, 5);
const computa3 = new Computado("Gamer", 128, 10);
computa1.ligar();
computa3.ligar();
computa1.desligar();
computa1.info();
computa2.info();
computa3.info();
