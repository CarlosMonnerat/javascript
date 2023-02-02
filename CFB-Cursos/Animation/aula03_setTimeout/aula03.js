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
    anima = setTimeout(mover,20,dir)            //Função, intervalo(milisegundos), Parametro
}

btn_esquerda.addEventListener("click", ()=>{
    clearTimeout(anima)
    mover(-1)
             
})

btn_direita.addEventListener("click", ()=>{
    clearTimeout(anima)
    mover(1)
})

btn_parar.addEventListener("click", ()=>{
    clearTimeout(anima)
})


window.onload=init
//window.addEventListener("load",init())