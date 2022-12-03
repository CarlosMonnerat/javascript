const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const teclaOn = document.getElementById("tecla_on")
const teclaLimpar = document.getElementById("teclaLimpar")
const teclaIqual = document.getElementById("tecla_igual")
const teclaCpy = document.getElementById("tecla_cpy")
const calc_aba = document.getElementById("calc_aba")
const calc = document.getElementById("calc")
const img_aba = document.getElementById("img_aba")

let sinal = false
let decimal = false

teclasNum.forEach((el) =>{
    el.addEventListener("click", (event) =>{
        if(sinal == true && event.target.innerHTML =="."){
            display.innerHTML += "0."
            sinal = false
            decimal = true
        }else{
            sinal = false
            if(event.target.innerHTML == "."){
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

teclaCpy.addEventListener("click", (event) =>{
    navigator.clipboard.writeText(display.innerHTML) // Copia o que estiver digitado no display

        /* Em dispositivos mobile, esse comando pode apresentar problemas com "input". Para evitar esses problemas podemos utilizar:
            teste.select()                              //Seleciona o texto que será copiado
            teste.setSelectionRange(0, 99999)           //Do zero até um número muito grande
            navigator.clipboard.writeText(teste.value)
        */
})

calc_aba.addEventListener("click", (event) =>{
    calc.classList.toggle("calc_exibir") //Se tiver a class ele retira, se não tiver ele add   
    calc.classList.contains("calc_exibir") ? img_aba.src = "img/double_arrow_left.svg" : img_aba.src = "img/double_arrow_right.svg"
})

