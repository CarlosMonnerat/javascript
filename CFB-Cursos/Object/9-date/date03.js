// Criando um Timer com Alarme
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

//Variaveis
const som_alarme = new Audio("alert.mp3")
som_alarme.loop = -1                                //O número indica a qtd de vezes que a ação será executada. Um nº negativo indica que a ação será executada infinitamente

let ts_atual = null                                 //timestamp atual
let ts_alarme = null                                // timestamp alarme
let alarme_ativado = false
let alarme_tocando = false

//Eventos
btn_ativar.addEventListener("click",()=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value*1000)  //O Tmp do alarme será o Timestamp do momento do click + o valor digitado no input
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)           //Recebe a data e a hora do alarme 
        let hora = dt_alarme.getHours()
        hora = hora < 10 ? "0"+hora : hora

        let minuto = dt_alarme.getMinutes()
        minuto = minuto < 10 ? "0"+minuto : minuto

        let segundo = dt_alarme.getSeconds()
        segundo = segundo < 10 ? "0"+segundo : segundo
    hora_alarme.innerHTML="Hora do Alarme:"+hora+":"+minuto+":"+segundo
})

btn_parar.addEventListener("click",()=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML="Hora do Alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0                     //rebobina o tempo do audio para o inicio
})

//Função
const relogio = ()=>{
    const data = new Date()
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){           //Se o Timestamp atual for maior ou igual ao tbm do alarme, o som deve ser emitido
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio,1000)