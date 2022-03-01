//                               Método IndexOf()

var mochila = ["poção", "chave", "cura", "capa", "espada", "anel"];
var pos;

// mochila.indexOf("elemento");                     Retorna a posição do elemento informado

console.log(mochila.indexOf('espada'));
console.log(mochila.indexOf('magia'));              //Se o elemento não estiver no array é retornado '-1'

pos = mochila.indexOf('cura');

    if(pos == -1){
        console.log('Você nao possue magia na sua mochila');
    }else{
        console.log("o ítem está na posição: " +pos);
    }