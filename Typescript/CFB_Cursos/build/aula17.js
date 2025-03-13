"use strict";
class Computa {
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
}
;
const comput1 = new Computa("Rapidão", 64, 10);
const comput2 = new Computa("Carão", 32, 5);
const comput3 = new Computa("Gamer", 128, 10);
console.log(comput1);
console.log(comput2);
console.log(comput3);
