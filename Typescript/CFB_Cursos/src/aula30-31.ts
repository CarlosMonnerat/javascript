import Pessoa, {Objeto, Coisas} from "./Classes"; //'Pessoa' vai for da chaves pois está sendo exportado como 'default'
//import {Objeto} from "./Classes";

const p1 = new Pessoa("Carlos", 1.65);
const p2 = new Objeto("Mesa");

console.log(p1.nome);
console.log(p1.altura);
console.log(p2.nome);
console.log(Coisas);
