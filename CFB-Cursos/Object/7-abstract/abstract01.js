//O conceito de "class Abstract" em POO não pode ser instanciada, ou seja, só serve de base para outras classes (Herança)

class Padrao{
    constructor(){
        if(this.constructor == Padrao){           //Torna esta classe Abstrata
            throw new TypeError("Esta classe não pode ser instanciada!")
        }
        if(this.ligar == undefined){            //Obriga a implementação de um método
            throw new TypeError("É obrigatório implementar o método ligar!")
        }
        if(this.desligar == undefined){         
            throw new TypeError("É obrigatório implementar o método Desligar!")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    } 
    
}


class Carro extends Padrao{                     // Classe filha da classe Padrao
    constructor(tipo, tipoTurbo){
        super()                                 //Chama o construtor do Pai
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
        console.log(`Nº Rodas: ${this.rodas}`)
        console.log(`Nº Portas: ${this.portas}`)
        console.log(`Ligado: ${this.ligado}`)
        console.log(this.turbo)
        console.log(`-----------------------`)
    }
    ligar(){                            // Cumpre a exigencia de criada na classe Padrao
        this.desligado = true
    }
    desligar(){
        this.ligado = false
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

class CarroEspecial extends Carro{      //Automaticamente, a classe "CarroEspecial" sendo filha da classe "Carro", tbm passa a ser do tipo "Padrao"
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

const c1 = new Carro(1,0)
const c2 = new Carro(2,1)
const c3 = new CarroEspecial(3)         //Não precisa passar o "tipo", pois já foi definido, passa-se apenas o "tipoTurbo"
// const c4 = new Padrao()              // Como a classe Padrao é Abstrata, se descomentar esta instancia, ocorrerá o erro definido em "typeError"

c1.info()
c2.info()
c3.info2()