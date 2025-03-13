//P.O.O - Método Construtor

class Computa {
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
};

//Instanciar
const comput1 = new Computa("Rapidão", 64, 10);
const comput2 = new Computa("Carão", 32, 5);
const comput3 = new Computa("Gamer", 128, 10);


console.log(comput1);
console.log(comput2);
console.log(comput3);