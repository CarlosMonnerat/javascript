class Carro{
    constructor(pnome, ptipo){ //Método que é automaticamente chamado quando um novo objeto desta classe é instanciado
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
    informacao(){ //Método que age no modo de função
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log("Vel Max: " + this.velmax)
        console.log("-------------------------")
    }
}

//Instancia novos objetos da classe Carro
let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Luxo", 2)
let c3 = new Carro("carga", 3)
let c4 = new Carro("Bombado", 4)

//Chama o método
c1.informacao();
c2.informacao();

