// Arrow Function

// Funções tradicionais são elevadas, o que significa que pode ser chamada antes de ser criada
teste();

function teste (): void {
    console.log("Função 1: Tudo certo!");
};

//Já as Arrow Functions não não são elevadas, por tanto NÃO podem ser chamadas antes de serem criadas
 const teste2 = (): void => {
    console.log("Função 2: Tudo certo também!");
};

teste2();

// Arrow Functions que soma todos os elementos de um Array
const somaArray = (n: number[]): number => {
    let s: number = 0;
    n.forEach((e) =>{
        s += e;
    });
    return s;
};

let numer: number[] = [10, 20, 30, 40];

console.log(somaArray(numer));