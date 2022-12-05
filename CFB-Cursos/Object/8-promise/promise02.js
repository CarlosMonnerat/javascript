//Para chamar uma Promise em qualquer momento, basta coloca-la dentro de uma função...
const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

btn_promessa.addEventListener("click",(event)=>{
    numero.innerHTML="Processando..."
    promessa();
})

const promessa=()=>{
    let promise = new Promise((resolve, reject)=>{ //Se "resultado = True", a promise recebe "resolve", senao recebe "reject"
        let resultado = true
        let tempo = 3000
        setTimeout(()=>{
            if(resultado){
                resolve("Deu tudo certo")
            }else{
                reject("Deu tudo errado")
            }
        },tempo)
    
    })
    
    promise.then((retorno)=>{                       // Se a promise receber "resolve", cai em "then()"
        numero.innerHTML= retorno
        numero.classList.add("ok")
        numero.classList.remove("erro")
    })               
    promise.catch((retorno)=>{                     // Se a promise receber "reject", cai em "catch()"
        numero.innerHTML= retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })             
}

numero.innerHTML="Esperando..."