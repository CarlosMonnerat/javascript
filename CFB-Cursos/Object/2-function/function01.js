function Pessoa(pnome, pidade){     //criando o Objeto como Function não precisa do Método "constructor"
        this.nome = pnome;
        this.idade = pidade;

    this.getNome = function(){  // Neste modelo os Métodos devem receber uma função anônima e "this." no início
        return this.nome
    },
    this.getIdade = function(){
        return this.idade
    },
    this.setNome = function(novonome){  
        this.nome=novonome
    },
    this.setIdade = function(novaidade){
        this.idade=novaidade
    },
    this.info = function(){
        console.log(`Nome: ${this.nome}`)
        console.log(`idade: ${this.idade}`)
        console.log(`--------------------`)
    }
}

let p = new Pessoa("Carlos", 37)
p.info();