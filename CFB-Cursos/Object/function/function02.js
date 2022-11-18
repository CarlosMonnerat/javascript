function Pessoa(pnome, pidade){     //criando o Objeto como Function não precisa do Método "constructor"
    this.nome = pnome;
    this.idade = pidade;

this.getNome = function(){  // Neste modelo os Métodos devem receber uma função anônima e "this." no início
    return this.nome
},
this.getIdade = function(){
    return this.idade
},
this.setNome = function(novonome){  
    this.nome=novonome
},
this.setIdade = function(novaidade){
    this.idade=novaidade
},
this.info = function(){
    console.log(`Nome: ${this.nome}`)
    console.log(`idade: ${this.idade}`)
    console.log(`--------------------`)
}
}

let clientes = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addCliente = () =>{
    res.innerHTML =""
    clientes.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "cliente")
        div.innerHTML = `Nome: ${p.getNome()} <br/> Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click", (evento) => {
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value,idade.value)
    clientes.push(p)
    nome.value =""
    idade.value =""
    nome.focus()
    console.log(clientes)
    addCliente()

})