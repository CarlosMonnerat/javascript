//P.O.O - Métodos de classes

class Computado {
    nome: string;
    ram: number;
    cpu: number;
    ligado: boolean;

    constructor(n: string, r: number, c: number){
        this.nome = n;          //'this' se refere à classe 'Computador'
        this.ram = r;
        this.cpu = c;
        this.ligado = false;
    }

    info(): void{
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("------------------------");
    }

    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }
};

//Instanciar
const computa1 = new Computado("Rapidão", 64, 10);
const computa2 = new Computado("Carão", 32, 5);
const computa3 = new Computado("Gamer", 128, 10);

computa1.ligar();
computa3.ligar();
computa1.desligar();

computa1.info();
computa2.info();
computa3.info();