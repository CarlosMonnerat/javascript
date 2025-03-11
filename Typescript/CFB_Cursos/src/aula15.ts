// Parâmetros REST com SPREAD

//Podemos passar quantos valores quisermos sem a necessidade de deplaclar na função
function fsoma (...n: number[]) { 
    let s: number = 0;
    // n.forEach((en) => {
    //     s += en;
    // })
// Usando For Off
    for(let en of n){
        s += en;
    }
    return s;
};

console.log(fsoma(10, 20, 30, 40, 100, 700, 150)); 