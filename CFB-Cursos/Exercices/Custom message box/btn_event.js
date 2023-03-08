const btn_cxmsg = document.querySelector("#btn_cxmsg")

const config ={
    titulo:"Teste",
    texto:"CFB Cursos",
    cor: "#48f"
}
const cxmsg = new Cxmsg(config)

btn_cxmsg.addEventListener("click",()=>{
    cxmsg.mostrar()
})