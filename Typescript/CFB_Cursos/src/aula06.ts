let numeros:number[] = [10, 20, 30, 40];
//let numeros: Array <number | string> = [10, 20, 30, 40];
//let numeros: (number | string)[] = [20, 30, 40, "Carlos"];

numeros.push(50);   //Add no final do Array
numeros.unshift(5); //Add no início do Array

numeros.pop();      //Retira o último elemento do Array
numeros.shift();    //Retira o primeiro elemento do Array

console.log(numeros);


let numeros_ro: ReadonlyArray<number> = [100, 200, 300]; //Não permite incluir nem remover nenhum elemento, apenas leitura.







