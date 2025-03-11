// parâmetors Padrões e Opcionais

// Exemplo de Parâmetors Padrões
function somar (n1: number = 0, n2: number = 0): number {
    return n1 + n2;
};

// Exemplo de Parâmetros Opcionais
function novoUser (user: string, pass: string, nome?: string): void {
    let dados = {user, pass, nome};
    console.log(dados);
}

console.log(somar(5,5));
novoUser("carlos", "123");
