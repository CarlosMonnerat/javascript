// GENERICS

//Permite que a função receba qualquer tipo de parâmetro
function f_teste<T, U>(v: T, r: U): U {
    return r;
};

// console.log(f_teste<number, string>(10, "K"));
// console.log(f_teste<string, number>("Carlos", 100));
// console.log(f_teste<boolean, boolean>(true, false));

//Generic em uma classe
class C_teste<T>{
    public valor: T;

    constructor(valor: T){
        this.valor = valor;
    }
};

const ct1 = new C_teste<number>(10);
const ct2 = new C_teste<string>("Typescript");

console.log(ct1.valor);
console.log(ct2.valor);