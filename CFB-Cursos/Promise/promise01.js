//Uma Promise resolve o problema do JS assincrona. Excelente para trabalhar com APIs por exemplo
const numero = document.getElementById("numero")

let promise = new Promise((resolve, reject)=>{ //Se resultado for True recebe "resolve", senao recebe "reject"
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

promise.then((retorno)=>{                       // Se a promise receber "resolve", cai em "then()""
    numero.innerHTML= retorno
    numero.classList.add("ok")
    numero.classList.remove("erro")
})               
promise.catch((retorno)=>{                     // Se a promise receber "reject", cai em "catch()""
    numero.innerHTML= retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
})             

numero.innerHTML="Processando..."