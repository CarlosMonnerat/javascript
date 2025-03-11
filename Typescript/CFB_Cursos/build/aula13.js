"use strict";
function somar(n1 = 0, n2 = 0) {
    return n1 + n2;
}
;
function novoUser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
}
console.log(somar(5, 5));
novoUser("carlos", "123");
