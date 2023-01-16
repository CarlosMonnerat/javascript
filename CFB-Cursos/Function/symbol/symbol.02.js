//Arividade prática

class Jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores = [new Jogador("j1"),new Jogador("j2"),new Jogador("j3"),new Jogador("j1"),new Jogador("j2"),new Jogador("j3")]

//Removendo um elemento do Array pelo symbol (Elementos com o msm nome, não serão afetados)
let s1=jogadores[0].id
jogadores=jogadores.filter((j)=>{
    return j.id!=s1                         //Irá remover o elemento da posição [0]
})

//Removendo elemento do Array pelo nome (Todos os elementos com o msm nome, serão afetados)
jogadores=jogadores.filter((j)=>{
    return j.nome!="j2"                     //Irá retornar somente os elementos com o nome diferente de "j2"
})

console.log(jogadores)


