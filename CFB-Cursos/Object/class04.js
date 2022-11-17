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
// Método set insere as propriedades na classe
    setNome(valor){
        this.nome = valor
    }
    setTipo(param){
        this.tipo = param
    }
    setVelMax(vel){
        this.velmax = vel
    }
    info(){ //Método que age no modo de função
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log("Vel Max: " + this.velmax)
        console.log("-------------------------")
    }
}

//Instancia novos objetos da classe Carro
let c1 = new Carro()

//Chama o método e informa a nova propriedade
c1.setNome("Super veloz")
c1.setTipo("Trabalho")
c1.setVelMax(500)


//Chama o método info para imprimir
c1.info()