let nome = new String("Bruno Pinho Campos")

console.log(nome.startsWith("Pinho"))       //Verifica se a estring começa com o parâmetro passado
console.log(nome.endsWith("Campos"))        //Verifica se a estring termina com o parâmetro passado
console.log(nome.includes("nh"))            //Verifica se a string possue o parâmetro passado em alguma parte dela
console.log(nome.repeat(4))                 //Indica quantas vezes repetir a string

console.log(nome.charCodeAt(0))             //Indica o código do caractere
console.log(String.fromCodePoint(66))       //Indica o caractere do código