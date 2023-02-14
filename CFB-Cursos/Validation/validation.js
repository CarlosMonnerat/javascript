const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg")

document.querySelector("btn_validar").addEventListener("click",(event)=>{
    let msg=null
    if(!f_nota.checkValidity()){            //Checa se o formulário foi preenchido corretamente ou não
        msg=f_nota.validationMessage        //Seleciona a msg de acordo com o erro de preenchimento 
    }

    f_msg.innerHTML=msg
    event.preventDefault()                  //Faz com que o o formulário não faça o submit
})