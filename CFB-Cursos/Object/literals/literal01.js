const Pessoa = { //Nos Objetos literias todas as novas instâncias estarão apontando para a mesma propriedade
    nome: "Bruno",
    getNome: function(){
        return this.nome
    },
    setNome: function(nnome){
        this.nome=nnome
    }
}

//Formas de passar a nova propriedade
const p2 = Pessoa
const p3 = Pessoa

p2.nome = "Claudio"
p3["nome"] = "Jamal"   
Pessoa.setNome("Patricia")  // Todas irão receber o nome "Patricia"


console.log(Pessoa.nome)
console.log(p2.nome)
console.log(p3.getNome())
