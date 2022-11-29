const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const teclaOn = document.getElementById("tecla_on")
const teclaLimpar = document.getElementById("teclaLimpar")
const teclaIqual = document.getElementById("tecla_igual")

let sinal = false
let decimal = false

teclasNum.forEach((el) =>{
    el.addEventListener("click", (event) =>{
        if(sinal == true && event.target.innerHTML ==","){
            display.innerHTML += "0,"
            sinal = false
            decimal = true
        }else{
            sinal = false
            if(event.target.innerHTML == ","){
                 if(!decimal){
                    decimal = true
                    display.innerHTML += event.target.innerHTML        
                }   
            }else{
                if(display.innerHTML == "0"){
                    display.innerHTML = ""
                }
                display.innerHTML += event.target.innerHTML
            }
        }
        
        
    })
})

teclasOp.forEach((el) =>{
    el.addEventListener("click", (event) =>{
        decimal = false
        if(!sinal){
            sinal = true
            if(display.innerHTML == "0" && event.target.innerHTML == "-"){
                display.innerHTML = ""
            }
            if(event.target.innerHTML == "x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += event.target.innerHTML
            }
            
        }
        
    })
})

teclaLimpar.addEventListener("click", (event) =>{
    sinal = false
    decimal = false
    display.innerHTML = "0"
    
})

teclaIqual.addEventListener("click", (event)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML) // Avalia a expressão recebida no parâmetro, e se for tudo com caracteres matemático, ele resolve os calculos
    display.innerHTML = res

})

