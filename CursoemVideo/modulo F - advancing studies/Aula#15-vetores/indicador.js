let num = [5,8,2,9,3]
num.push(1)                                                         //Acrescenta um elemento ao final do vetor
num.sort()                                                          //Coloca em ordem crescente
let pos = num.indexOf(4)                                            //Diz em qual posição o nº indicado está

console.log(num)
console.log(`O vetor tem ${num.length} posições`)                   //.length diz quantas posições tem o elemento
console.log(`o primeiro valor do vetor é ${num[0]}`)                // Mostra o primeiro elemento do vetor

if (pos == -1){                                                     //Caso o nº indicado no '.indexOf(nº) não existir, será indicado como -1
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor está na posição ${pos}`)

}