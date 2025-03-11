"use strict";
teste();
function teste() {
    console.log("Função 1: Tudo certo!");
}
;
const teste2 = () => {
    console.log("Função 2: Tudo certo também!");
};
teste2();
const somaArray = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numer = [10, 20, 30, 40];
console.log(somaArray(numer));
