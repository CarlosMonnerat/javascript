//A função Symbol retorna um objeto do tipo Symbol que tem um identificador único. (Não se pode usar esse identificador no DOM) 
const s1 = Symbol()     
const s2 = Symbol()     //(s1==s2) Irá retornar 'false'

const s3 = Symbol.for("Carlos")     // Cria um identificador no registro global
const s4 = Symbol.for("Carlos")     // Esse identificador pode ser dado tbm a outro Symbol
                        //(s3==s2) Agora irá retornar 'True'

console.log(s3==s4)

// 'Symbol.keyFor()' Retorna a string do identificador ou um undefined (trabalha apenas com os registros globais)

console.log(Symbol.keyFor(s1))     //Retornará 'undefined'
console.log(Symbol.keyFor(s3))     //Retornará 'Carlos'