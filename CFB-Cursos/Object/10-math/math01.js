// Math é uma biblioteca matemática do JS
    // (X) 'const math = new Math()'  Math é uma biblioteca de classe estática, e por isso não precisa ser instanciada!

const num1 = Math.PI                             //Valor de Pi
const num2 = Math.E                              //Valor de Euler
const num3 = Math.random()                       //Gera um número aleatório entre 0 e 1
const num4 = Math.random()*10                    //Gera um número aleatório entre 0 e 10
const num5 = Math.random()*100                   //Gera um número aleatório entre 0 e 100
const num6 = Math.floor(Math.random()*10)        //Gera apenas a parte inteira do número aleatório (entre 0 e 9)
const num7 = Math.round(num4)                    //Gera apenas a parte inteira do número aleatório (entre 0 e 10)
const num8 = Math.sqrt(64)                       //Retorna a raíz quadrada do número passado no parâmetro
const num9 = Math.pow(10,2)                      //Retorna 10 elevado a 2

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)
console.log(num7)
console.log(num8)
console.log(num9)