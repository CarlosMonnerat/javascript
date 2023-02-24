const timer = document.querySelector("#timer")

const tmpIni = Date.now()           //Timestamp de quando começa a rodar a aplicação

const contador=()=>{
    const tmpAtual = Date.now()     //Timestamp de quando a função foi chamada
    let cont = tmpAtual - tmpIni
    let seg = Math.floor((tmpAtual - tmpIni)/1000)    //Converte de milisegundos para segundos e arredonda
}

setInterval(contador,1000)
