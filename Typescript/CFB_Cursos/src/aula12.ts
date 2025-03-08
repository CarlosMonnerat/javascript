// Função padrão
    // function teste(): void {        //Se não declararmos o tipo, a função será do tipo 'void' por padrão
    //     console.log("Deu certo!")
    // };

// Função com Parâmetros
    // function logar(user: string, pass: string): void {
    //     console.log(`Usuario: ${user}`);
    //     console.log(`Senha..: ${pass}`);
    // };

    // logar('carlos', '1234');
    // logar('teste', '9876');

// Função com Retorno
function soma(n1: number, n2: number): number {
    let resultado = n1 + n2;
    return resultado;
}

let numero: number = soma(4, 6);

//Ao associar um 'number' em uma variável do tipo 'string', deve-se converter para 'unknown' primeiro. (Ao final, a variável será do tipo number)
let texto: string = <string> <unknown> soma(10, 15);

//Ou podemos utilizar o método 'toString'. (Ao final, a variável será do tipo string)
let texto2: string = soma(50, 30).toString();

console.log(numero);
console.log(texto);
console.log(texto2);


