import{Cxmsg} from "./msg.js";
const config ={                 //Se não passar nenhuma configuração, será usada a padrão definida em "msg.js"
    cor: "#48f",                
    tipo: "ok",                 // Tipos: "Ok (ok)", "Sim e Não (sn)"
    textos_btn: ["Sim", "Não"], //Configurável se tipo: sn
    comando_sn:()=>{}
}

const fsim=()=>{
    alert("Botao sim pressionado")
}

const btn_cxmsg = document.querySelector("#btn_cxmsg")
const btn_cxmsg2 = document.querySelector("#btn_cxmsg2")
const btn_cxmsg3 = document.querySelector("#btn_cxmsg3")

btn_cxmsg.addEventListener("click",()=>{
    config.tipo="ok"
    Cxmsg.mostrar(config, "CFB Cursos", "Cursos de Javascript")
})

btn_cxmsg2.addEventListener("click",()=>{
    config.tipo="sn"
    config.comando_sn =()=>{fsim()}
    Cxmsg.mostrar(config, "Youtube", "Canal com cursos de programação")
})

btn_cxmsg3.addEventListener("click",()=>{
    config.tipo="sn"
    config.textos_btn=["Ok", "Cancelar"]
    config.comando_sn =()=>{}
    Cxmsg.mostrar(config, "Javascript", "Aula 136")
})
