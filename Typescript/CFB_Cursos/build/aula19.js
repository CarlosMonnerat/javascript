"use strict";
class Computador {
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
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`Quantidade ${qtde} para o computador '${this.nome}' não é permitida`);
        }
    }
}
;
const comp1 = new Computador("Rapidão", 64, 10);
const comp2 = new Computador("Carão", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);
comp1.ligar();
comp3.ligar();
comp1.desligar();
comp1.nome = "Super Rápido";
comp1.upRam(128);
comp1.info();
comp2.info();
comp3.info();
