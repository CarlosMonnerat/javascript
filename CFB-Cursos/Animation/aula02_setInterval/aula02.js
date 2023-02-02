const carro = document.getElementById("carro")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const btn_parar = document.getElementById("btn_parar")

const init = ()=>{
    carro.style.position="relative"
    carro.style.left="0px"
}

let anima = null

const mover = (dir)=>{
    carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
}

btn_esquerda.addEventListener("click", ()=>{
    clearInterval(anima)
    anima = setInterval(mover,20,-1)            //Função, intervalo(milisegundos), Parametro
})

btn_direita.addEventListener("click", ()=>{
    clearInterval(anima)
    anima = setInterval(mover,20, 1)            //Função, intervalo(milisegundos), Parametro
})

btn_parar.addEventListener("click", ()=>{
    clearInterval(anima)
})


window.onload=init
//window.addEventListener("load",init())