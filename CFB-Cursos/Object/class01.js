class Pessoa{
    constructor(parametro){ //Método que é automaticamente chamado quando um novo objeto desta classe é instanciado
        this.nome = parametro 

    }
}

let p1 = new Pessoa("Bruno") //"new" instancia um novo objeto da classe "Pessoa".
                // O "()" faz referencia direta com o método "constructor" da classe.

let p2 = new Pessoa("Asdervardson")
let p3 = new Pessoa("Brenasclartel")

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);