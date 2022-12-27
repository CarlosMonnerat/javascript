const computador = {    // As {} já indicam que é um objeto
    cpu:"i9",
    ram:"64gb",         //A propriedades devem ser separadas por vírgula
    hd:"2tb",
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

const computadores = [      // Array de Objetos Literais
    {     
        cpu:"i9",
        ram:"64gb", 
        hd:"2tb"
    },
    {     
        cpu:"i7",
        ram:"32gb", 
        hd:"2tb"
    },
    {     
        cpu:"i5",
        ram:"16gb", 
        hd:"1tb"
    }

]  

//Para Add propriedades temos duas formas:
    computador["monitor"]="22pol"
    computador.placaVideo="rtx"

console.log(computador)
console.log(computadores)
computador.info()
