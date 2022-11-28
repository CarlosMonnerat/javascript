const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const teclaOn = document.getElementById("tecla_on")
const teclaLimpar = document.getElementById("teclaLimpar")

teclasNum.forEach((el) =>{
    el.addEventListener("click", (event) =>{
        display.innerHTML += event.target.innerHTML
    })
})

teclasOp.forEach((el) =>{
    el.addEventListener("click", (event) =>{
        display.innerHTML += event.target.innerHTML
    })
})

teclaLimpar.addEventListener("click", (event) =>{
    display.innerHTML = "0"
})

