//                           Método     .sort(),     .reverse(),     .join()

var num = [5,8,4,9,7,6,3,0,2,1];
var numeros;

num.sort();                                 //Coloca os elementos do Array em ordem crescente
num.reverse();                              //Inverte a ordem dos elementos (OBS: Ele não os coloca em ordem decescente, apenas inverte)
console.log(num);

numeros = num.join();                       //Adiciona os elementos de um array à uma variável
console.log(numeros);