import{Cxmsg} from "./msg.js";
const config ={
     cor: "#48f"        //Se não configurar nenhuma cor, será usada a cor padrão definida em "msg.js"
}
Cxmsg.config(config)

const btn_cxmsg = document.querySelector("#btn_cxmsg")
const btn_cxmsg2 = document.querySelector("#btn_cxmsg2")
const btn_cxmsg3 = document.querySelector("#btn_cxmsg3")

btn_cxmsg.addEventListener("click",()=>{
    Cxmsg.mostrar("CFB Cursos", "Cursos de Javascript")
})

btn_cxmsg2.addEventListener("click",()=>{
    Cxmsg.mostrar("Youtube", "Canal com cursos de programação")
})

btn_cxmsg3.addEventListener("click",()=>{
    Cxmsg.mostrar("Javascript", "Aula 136")
})
