//DESESTRUTURAÇÃO

//Desestruturação com Arrays
let av = [10,20,30,40];

//Sem desestruturação:
// let a, b, c, dd;
//     a = av[0];
//     b = av[1];
//     c = av[2];
//     dd = av[3];


//Usando a desestruturação:
let [a, b, c, dd] = av;

console.log(a);
console.log(b);
console.log(c);
console.log(dd);
console.log("---------------");

//Variações:
let [e, f, g, h] = [50, 60, 70, 80];
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log("---------------");

let [i, j, k, l] = ["vermelho", "amarelo", "azul", "verde"];
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log("---------------");

//Desestruturação com Objetos
const obj = {
    cor1: "preto",
    cor2: "rosa",
    cor3: "roxo",
    cor4: "branco"
};

//let [m, n, o, p] = obj; // Vai dar erro pois estamos desestruturando um obj em um array
let {cor1, cor2, cor3, cor4} = obj;

//Destruturação com valores padrão
let [nu1, nu2=0, nu3=0] = [10];

    //Spread
        //nesse caso as variaveis nu4 e nu5 vão receber 10 e 20 respectivamente, enquando nu6 receberá um array com todos outro valores
let [nu4, nu5, ...nu6] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; 

console.log(nu4);
console.log(nu5);
console.log(nu6);
console.log("---------------");

//Destruturação em uma função que retorna um array
const fcores=()=>{
    return ["verde", "amarelo","azul","branco", "preto", "roxo", "rosa"]
};

let [b1, b2, b3, ...b4] = fcores();
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log("---------------");

//Desestruturação de uma String
let stexto = "Curso de Typescript";
let [...t] = stexto.split(" ");
let [p1, p2, p3] = stexto.split(" ");

console.log(t);
console.log(p1);
console.log(p2);
console.log(p3);