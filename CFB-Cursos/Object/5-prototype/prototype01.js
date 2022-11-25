//Prototype serve para add propriedades e/ou métodos aos objetos

const Nave = function(energia){
    this.energia = energia
    this.disparos = 100
}

const n1 = new Nave(300)

Nave.prototype.vidas = 3                        //Add propriedades ao prototype
Nave.prototype.disparar = function(){           //Add novos métodos ao prototype
    if(this.disparos > 0){
        this.disparos--
    }
}

n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();

console.log(Nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.vidas)
console.log(n1.disparos)