class Cliente{
    constructor(pnome, pidade){ 
        this.nome=pnome
        this.idade=pidade

    }
    getNome(){  // Método get obtem as propriedades da classe
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(novonome){  // Método set insere as propriedades na classe
        this.nome=novonome
    }
    setIdade(novaidade){
        this.idade=novaidade
    }
    info(){
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
    clientes.map((c)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "cliente")
        div.innerHTML = `Nome: ${c.getNome()} <br/> Idade: ${c.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click", (evento) => {
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const c = new Cliente(nome.value,idade.value)
    clientes.push(c)
    nome.value =""
    idade.value =""
    nome.focus()
    console.log(clientes)
    addCliente()

})
