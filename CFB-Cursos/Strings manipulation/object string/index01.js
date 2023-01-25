let nome = new String("Bruno Pinho Campos")
let nome2 = new String("Bruno Pinho Campos")
let canal = new String("CFBCursos")

console.log(nome.charAt(0)) //Retorna o caractere da posição[0]
console.log(nome.charCodeAt(0)) //Retorna o código (do teclado) relacionado ao caractere da posição[0]
console.log(nome.concat(canal)) //Concatena a string 'nome' com a string 'canal'
console.log(nome.indexOf("o")) //Retorna a posição do Primeiro caractere "o"
console.log(nome.lastIndexOf("o")) //Retorna a posição do Último caractere "o"

console.log(nome.localeCompare(nome2)) //Compara as strings "nome" e "nome2"e verifica se são iguals. Se True retorna "0", se false retorna "1" caso "nome > nome2" ou retorna "-1" caso "nome < nome2"
console.log(nome.replace("B","P")) //Substitui o primeiro caractere "B" por "P" (Também funciona para palavras inteiras)
console.log(nome.search("Pinho")) 	// Encontra o primeiro caractere ou palavra indicada da string
console.log(nome.slice(6,11))       //Retorna o recorte da string (start, end)
console.log(nome.split(" "))        // Retorna o um array recortando a string onde há um " " (espaço vazio)

console.log(nome.substring(0,5)) //Parecido com o "slice", Retorna o recorte da string (start, end)
console.log(nome.toUpperCase())  //Converte tudo para letras Maiúsculas
console.log(canal.toLowerCase())  //Converte tudo para letras Minúsculas
