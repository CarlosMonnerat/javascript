    //Vetores
let num = [5,8,2,9,3]
let vec = [8,4,1,3,9,6,7,5,2]


num[2]=7 //Substitui um elemento indicado no vetor! (OBs: O vetor começa em ZERO!)
num.push(17) //acrescenta um elemento diretamente ao final do vetor

vec.length // Diz quantos elementos tem o vetor (Ex. abaixo!)
vec.sort() // Organiza o vetor em ordem crescente

console.log (`Nosso vetor "num" é o ${num}`)
console.log (`O vetor "vec" em ordem crescente é: [${vec}]`)
console.log (`O vetor "vec" tem ${vec.length} elementos`)
console.log (vec[0]) //Mostra qual elemento está na posição indicada

console.log ('imprimindo o vetor com o comando FOR:')

for(let pos=0; pos<num.length; pos++) {
    console.log (num[pos])
}

