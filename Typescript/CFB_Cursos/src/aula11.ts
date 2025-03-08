// TYPE ASSERTION
let num: number;
let stri: string;
let unk: unknown;

unk = 10;

//Type Assertion - Permite associar uma variável de 'tipo qualquer' à um outo tipo de variável
num = <number> unk;
stri = <string> unk;

console.log(typeof(unk));
console.log(unk);

console.log(typeof(num));
console.log(num);

console.log(typeof(stri));
console.log(stri);