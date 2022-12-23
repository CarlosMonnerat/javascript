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
    constructor(arrayBolas, palco){
    //Tamanho
        this.tam = Math.floor(Math.random()*15)+10
    //Cor                       
        this.r = Math.floor(Math.random()*255)                              
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
    //Posição
        this.px = Math.floor(Math.random()*(larguraPalco - this.tam))       
        this.py = Math.floor(Math.random()*(alturaPalco - this.tam))
    //Velocidade
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
    //Direção
        this.dirx = (Math.random()*10) > 5 ? 1 : -1
        this.diry = (Math.random()*2) > 5 ? 1 : -1
    //Id de cada bolinha
        this.palco = palco
        this.arrayBolas = bolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*100000000000000)
    //Controle
        this.desenhar()
        this.controle = setInterval(this.controlar,10)
    //Relaciona bolinha instanciada no DOM com o ArrayBolas
        this.eu = document.getElementById(this.id)
    }
    minhaPos=()=>{

    }
    remover=()=>{

    }
    desenhar=()=>{

    }
    controlar=()=>{

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