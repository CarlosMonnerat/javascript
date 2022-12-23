const palco = document.getElementById("palco")
const num_objetos = document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBolas = 0

class Bola{
    constructor(){
        this.tam = Math.floor(Math.random()*15)+10                          //Tamanho
        this.r = Math.floor(Math.random()*255)                              //Cor
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.px = Math.floor(Math.random()*(larguraPalco - this.tam))       //Posição
        this.py = Math.floor(Math.random()*(alturaPalco - this.tam))
    }
}

window.addEventListener("resize", (event)=>{            //Cada vez que a janela for redimencionada, dispara o evento
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

btn_add.addEventListener("click", (event)=>{
    const qtde = txt_qtde.value
    for(let i=0; i<qtde; i++){
        //Instanciar novas bolinhas
    }
})

btn_remover.addEventListener("click", (event)=>{
    bolas.map((b)=>{
        //Remover a bolinha
    })
})