let dados = {
    nome:"Carlos Monnerat",
    idade: 25,
    status: "A",
    ola:()=>{console.log("olá mundo")},
    info:(par:string)=>{console.log(par)}
};

dados.nome = "Josué";

console.log(typeof(dados));
console.log(dados);
console.log(dados.nome);

dados.ola();
dados.info(dados.nome);