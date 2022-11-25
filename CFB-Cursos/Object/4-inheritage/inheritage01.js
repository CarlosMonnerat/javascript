// Herança é uma classe que herda uma outra classe
class Carro{    // Classe Pai / Base
    constructor(modelo, portas){
        this.modelo = modelo
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{ //Classe filha. Possui todos os elementos da classe pai
    constructor(modelo, portas, blindagem, municao){
        super(modelo, portas) //Invoca algo da classe Pai
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

//Criação do Carro 1 (Direto na classe Pai)
const carro1 = new Carro("Popular", 4)
carro1.ligar()
carro1.setCor("Preto")

//Criação do Carro 2 (Na classe Filha)
const carro2 = new Militar("Militar", 2, 100, 50)
carro2.atirar()
carro2.atirar()
carro2.atirar()



console.log(`Modelo: ${carro1.modelo}`)
console.log(`Portas: ${carro1.portas}`)
console.log(`Ligado: ${carro1.ligado ? "Sim" : "Não"}`)
console.log(`Velocidade: ${carro1.vel}`)
console.log(`Cor: ${carro1.cor}`)
console.log(`-----------------------------`)

console.log(`Modelo: ${carro2.modelo}`)
console.log(`Portas: ${carro2.portas}`)
console.log(`Ligado: ${carro2.ligado ? "Sim" : "Não"}`)
console.log(`Velocidade: ${carro2.vel}`)
console.log(`Blindagem: ${carro2.blindagem}`)
console.log(`Munição: ${carro2.municao}`)
console.log(`Cor: ${carro2.cor}`)
console.log(`-----------------------------`)