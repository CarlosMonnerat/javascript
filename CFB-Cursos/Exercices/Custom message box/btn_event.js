const btn_cxmsg = document.querySelector("#btn_cxmsg")

const config ={
    titulo:"CFB Cursos",
    texto:"Curso de javascript, criando caixa de mensagem personalizada!",
    cor: "#48f"
}
const cxmsg = new Cxmsg(config)

btn_cxmsg.addEventListener("click",()=>{
    cxmsg.mostrar()
})
