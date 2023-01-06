const nome = Symbol("inome")
const numero = Symbol("inumero")
const corUniforme = Symbol("icor")

const Jogador={
    [nome]: "j1",           //[] associa a propriedade ao Symbol (Propriedades escondidas)
    [numero]: 10,
    corUniforme: "amarelo"
}

for(p in Jogador){          //As propriedades Symbol não são mais acessíveis para o For, por tanto irá imprimir apenas o 'corUniforme'
    console.log(p)
}

console.log(nome.description)   //informa o valor passado no Id do Symbol
console.log(Jogador[nome])      //Para acessar, é necessário informar desta forma
console.log(Jogador[numero])
