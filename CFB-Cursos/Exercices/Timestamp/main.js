import { Cxmsg } from "../Custom message box/msg.js";
const config ={
    cor: "#082",                            //Se não configurar nenhuma cor, será usada a cor padrão definida em "msg.js"
    tipo: "ok"       
}

const timer = document.querySelector("#timer")
const btn_iniciar = document.querySelector("#btn_iniciar")
const btn_registrar = document.querySelector("#btn_registrar")
const btn_parar = document.querySelector("#btn_parar")
const btn_zerar = document.querySelector("#btn_zerar")
const btn_limpar = document.querySelector("#btn_limpar")
const parciais = document.querySelector("#parciais")


let intervalo = null
let tmpIni = null                           //Timestamp de quando começa a rodar a aplicação

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

    let tmpFormato = `${hora <10? "0"+hora : hora}:${minuto <10? "0"+minuto : minuto}:${segundo <10? "0"+segundo : segundo}`

    return tmpFormato
}

btn_iniciar.addEventListener("click",()=>{
    clearInterval(intervalo)
    tmpIni = Date.now()                     //Timestamp de quando o btn é clicado
    intervalo = setInterval(contador,1000)
    btn_iniciar.innerHTML="Reiniciar"
})

btn_parar.addEventListener("click",()=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click",()=>{
    timer.innerHTML="00:00:00"
    clearInterval(intervalo)
    btn_iniciar.innerHTML="Iniciar"
    Cxmsg.mostrar(config, "Cronômetro", "O cronômetro foi zerado.")
})

btn_registrar.addEventListener("click", ()=>{
    let registro = "<div>"+ timer.innerHTML +"</div>"
    parciais.innerHTML += registro
})

btn_limpar.addEventListener("click", ()=>{
    parciais.innerHTML = ""
})


