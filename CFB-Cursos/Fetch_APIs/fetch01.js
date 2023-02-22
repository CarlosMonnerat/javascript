const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")
const btn_texto = document.getElementById("btn_texto")

//Recebendo dados da API
const obterDados=()=>{
    const endpoint = "https://cfbcursos.repl.co/"   //Endereço da API
    fetch(endpoint)             //faz o consumo da API
    .then(res => res.json())    //'then' Recebe o retorno da API e armazena na variavel 'res'
                                //'json()' Método que converte os dados para Json
    .then(dados=>{              //Recebe o retorno da API já tratada como Json e armazena na variavel 'dados'
        console.log(dados)
        p_temp.innerHTML="Temperatura: "+ dados.temperatura
        p_nivel.innerHTML="Nivel: "+ dados.nivel
        p_press.innerHTML="Pressão: "+ dados.pressao
    })             
}

let intervalo=setInterval(obterDados,3000)

//Enviando dados para a API
let dados = {
    nome: "Carlos",
    canal: "CFBCursos",
    curso: "Javascript"
}

let cabecalho = {
    method: "POST",
    body: JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint = "https://cfbcursos.repl.co/"
    fetch(endpoint, cabecalho)
    .then(res => res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener("click", (event)=>{
    gravarDados()
})