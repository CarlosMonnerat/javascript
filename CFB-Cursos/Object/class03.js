class Carro{
    constructor(pnome, ptipo){ 
        this.nome=pnome
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 100
        }else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 160
        }else{
            this.tipo = "Militar"
            this.velmax = 180
        }
    }
// Método get obtem as propriedades da classe
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){ //Também é possivel obter as propriedades armazenadas em um Array da seguinte forma:
        return [this.nome, this.tipo, this.velmax]
    }
}

//Instancia novos objetos da classe Carro
let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Luxo", 2)
let c3 = new Carro("carga", 3)
let c4 = new Carro("Bombado", 4)

//Chama o método e imprime na tela
console.log(c1.getNome())
console.log(c2.getTipo())
console.log(c3.getInfo())
console.log(c4.getInfo()[1])