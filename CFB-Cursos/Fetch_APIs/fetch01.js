const endpoint = "https://cfbcursos.repl.co/"
fetch(endpoint)             //faz o consumo da API
.then(res => res.json())    //'then' Recebe o retorno da API e armazena na variavel 'res'
                            //'json()' Método que converte os dados para Json
.then(dados=>{              //Recebe o retorno da API já tratada como Json e armazena na variavel 'dados'
    console.log(dados)
})                


