const olhos = [...document.getElementsByClassName("olho")]

let pos_x = 0
let pos_y = 0

window.addEventListener("mousemove", (event)=>{                 //Add evento posição do mouse
    pos_x = event.clientX                                       //Retorna a posição do mouse
    pos_y = event.clientY

    const rot = Math.atan2(pos_y,pos_x)*180/Math.PI             //atan2 retorna o angulo (em rad) de 2 coeficientes (Y,X). (*180/Pi converte para Graus)

    olhos.forEach((o)=>{
        o.style.transform="rotate("+rot+"deg)"                  //olhos[0].style.transform="rotate("90deg)"  (rotaciona o elemento em graus)
    })
})

