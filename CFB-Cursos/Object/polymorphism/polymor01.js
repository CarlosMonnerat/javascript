class Carros{
    constructor(tipo, tipoTurbo){
        this.turbo = new Turbo(tipoTurbo)
        if(tipo == 1){
            this.vel = 120
            this.nome = "Normal"
        }else if(tipo == 2){
            this.vel = 160
            this.nome = "Esportivo"
        }else if(tipo == 3){
            this.vel = 200
            this.nome = "Especial"
        }

        this.velMax = this.vel + this.turbo.potencia
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Vel: ${this.vel}`)
        console.log(`Vel Máx: ${this.velMax}`)
        console.log(this.turbo)
        console.log(`-----------------------`)
    }
}

class Turbo{
    constructor(e){
        if( e == 0){
            this.potencia = 0
        }else if(e == 1){
            this.potencia = 50   
        }else if(e == 2){
            this.potencia = 75
        }else if(e == 3){
            this.potencia = 100
        }
    }
}

class CarroEspecial extends Carros{
    constructor(tipoTurbo){
        super(4,tipoTurbo)              //Chama o construtor do Pai, pré-definindo o valor do "tipo" 
        this.nome = "Formula 1"
        this.vel = 300
        this.velMax = this.vel + this.turbo.potencia
    }
    info2(){
        console.log("AVISO: Carro projetado para corridas")
        super.info() //Importa o Método info do Pai
    }

    
}

const c1 = new Carros(1,0)
const c2 = new Carros(2,1)
const c3 = new CarroEspecial(3)         //Não precisa passar o "tipo", pois já foi definido, passa-se apenas o "tipoTurbo"

c1.info()
c2.info()
c3.info2()