//                      Métodos     unshift(),    .pop(),     .shift(),   e   .splice() 

var mochila = [];

mochila.push("poção");                                  // add um elemento ao final do array
mochila.push("chave");
mochila.push("cura");
mochila.push("capa");
mochila.push("espada");

mochila.unshift("anel");                               // add um elemento no início do array

mochila.pop();                                         // Remove o elemento do final do array (deixa uma posição no array undefined)

mochila.shift();                                       // Remove o elemento do inicio do array (deixa uma posição no array undefined)

mochila.splice(2,1);                                   // Remove um elemento do meio do array (deixa uma posição no array undefined)
            //(a partir do elemento '2', remova '1' elemento)

console.log(mochila[0]);
console.log(mochila[1]);
console.log(mochila[2]); 
console.log(mochila[3]);
console.log(mochila[4]);
console.log(mochila[5]); 