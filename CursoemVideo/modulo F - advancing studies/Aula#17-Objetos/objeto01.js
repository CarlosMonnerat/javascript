let amigo = 
{
    nome: 'José',
    sexo: 'Masculino',
    peso: 85.4,

    engordar (p = 0) {
        console.log(`engordou`)
        this.peso += p                                      //'this' é uma auto referência ao objeto

    }

}

amigo.engordar(2)                                          //Chama a função 'engordar'

//  'console.log(amigo)' Comando para imprimir na tela o objeto
//  "console.log(typeof amigo)" comando que indica o tipo da variável
//  'console.log(amigo.nome)' Vai imprimir apenas o elemento 'nome'
    console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
