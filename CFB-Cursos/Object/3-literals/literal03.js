//Clonando um objeto literal
const computador = {    
    cpu:"i9",
    ram:"64gb",        
    hd:"2tb",
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

const c1 = Object.assign({}, computador)    //C1 passa a ser um objeto exatamente igual a computador

//Mesclando vários Objetos em um só
const o1={obj1: "1"}
const o2={obj2: "2"}
const o3={obj3: "3"}
const o4 = Object.assign(o1, o2, o3)    //o4 será a junção de 01, o2 e o3

console.log(o4)