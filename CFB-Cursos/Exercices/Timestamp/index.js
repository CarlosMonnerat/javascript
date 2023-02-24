const timer = document.querySelector("#timer")

const tmpIni = Date.now()                   //Timestamp de quando começa a rodar a aplicação

const contador=()=>{
    const tmpAtual = Date.now()             //Timestamp de quando a função foi chamada
    let cont = tmpAtual - tmpIni
    let seg = (tmpAtual - tmpIni)/1000      //Converte de milisegundos para segundos
    timer.innerHTML = converter(seg)
}

const converter=(seg)=>{
    let hora = Math.floor(seg/3600)         //Converte de segundos para horas e arredonda
    let resto = seg % 3600
    let minuto = Math.floor(resto/60)       //Converte para minutos e arredonda
    let segundo = Math.floor(resto%60)       //Converte para seg de modo que ao chegar em 59 seg ele volta para 00 seg

    let formato = `${hora <10? "0"+hora : hora}:${minuto <10? "0"+minuto : minuto}:${segundo <10? "0"+segundo : segundo}`

    return formato
}

setInterval(contador,1000)
