//                           Método  .concat()  e   .length()

var itens1 = ['faca', 'corda', 'chave', 'pedra'];
var itens2 = ['lanterna', 'esqueiro', 'pistola', 'alcool'];


itens1.push('canivete');
mochila = itens1.concat(itens2);                                //Concatena dois vetores em uma variável

console.log(mochila);
console.log(`Ítens da sua mochila: ${mochila}`);


console.log(`Tamanho do vetor Ítens 1: `+itens1.length);        //Retorna quantos elementos existem dentro de um vetor
console.log(`Tamanho do vetor Ítens 2: `+itens2.length);
console.log(`Tamanho do vetor Mochila: `+mochila.length);



