const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click",(event)=>{
    let msg=null
    if(!f_nota.checkValidity()){            //Checa se o formulário foi preenchido corretamente ou não
        msg=f_nota.validationMessage        //Seleciona a msg de acordo com o erro de preenchimento 
    }

    f_msg.innerHTML=msg
    event.preventDefault()                  //Faz com que o o formulário não faça o submit
})

//Métodos de Validação do DOM:
/*
    el.checkValidity()	                    //Checa se o formulário foi preenchido corretamente ou não
    el.setCustomValidity(“Mensagem aqui”)	//Permite customizar a mensgem
*/
//Propriedades de Validação do DOM:
/*
    el.Validity                             //Verifica qual é o estado de validação do elemento e rotorna o resultado
    el.validationMessage                    //Seleciona a msg de acordo com o erro de preenchimento
*/
//Propriedades de Validação 
/*
    customError: true, se uma mensagem de validação personalizada for definida.
    patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
    rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
    rangeUnderflow: true, se o valor se um elemento for menor que seu atributo min.
    stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
    tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
    typeMismatch: true, se o valor de um alemento for inválido por seu atributo type.
    valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
    valid: true, se o valor de um elemento for válido.
*/
