const militar = document.querySelector("#f_tipoMilitar")
const normal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const botao = document.querySelector("#btn_addcarro")


let arrayCarros = []

const removerCarro = (quem) =>{
    arrayCarros = arrayCarros.filter((el)=>{
        return el.nome != quem
    })
}

militar.addEventListener("click", (event)=>{
    f_blindagem.value = "0"
    f_municao.value = "0"
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})
normal.addEventListener("click", (event)=>{
    f_blindagem.value = ""
    f_municao.value = ""
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})

const exibirCarros = () =>{
    carros.innerHTML = ""
    arrayCarros.forEach((car)=>{
        const div = document.createElement("div")
        const btn = document.createElement("button")
        btn.addEventListener("click", (event)=>{
            const quemRemover = event.target.parentNode.dataset.nome
            removerCarro(quemRemover);
            exibirCarros();
        })
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", car.nome)
        div.innerHTML = `Nome: ${car.nome} <br> Portas: ${car.portas} <br> Cor: ${car.cor} <br>
        Blindagem: ${car.blindagem} <br> Munição: ${car.municao}`
        btn.innerHTML = `Remover`
        carros.appendChild(div)
        div.appendChild(btn)
    })
    
}

botao.addEventListener("click", (event)=>{
    if(normal.checked){
        const car = new Carro(f_nome.value, f_portas.value)
        arrayCarros.push(car)
    }else{
        const car = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        arrayCarros.push(car)
    }
    exibirCarros();
    f_nome.value = ""
    f_portas.value = "0"
    f_blindagem.value = "0"
    f_municao.value = "0"
})

class Carro{    // Classe Pai / Base
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{ //Classe filha. Possui todos os elementos da classe pai
    constructor(nome, portas, blindagem, municao){
        super(nome, portas) //Invoca algo da classe Pai
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

// //Criação do Carro 1 (Direto na classe Pai)
// const carro1 = new Carro("Popular", 4)
// carro1.ligar()
// carro1.setCor("Preto")


// //Criação do Carro 2 (Na classe Filha)
// const carro2 = new Militar("Militar", 2, 100, 50)
// carro2.atirar()
// carro2.atirar()
// carro2.atirar()



