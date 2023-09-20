import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()            //[Variável recebida, variável alterada]
    const [userEmail, setUserEmail] = useState()
    

    function enviarEmail(e){
        e.preventDefault()  //Não envia o formulário para o backend
        setUserEmail(email) //Segunda etapa do useState
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite seu email..."
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar</button>
                {userEmail && (         //Condicional: Se userEmail estiver preenchido (True), faça...
                    <div>
                       <p>O email do usuário é: {userEmail}</p> 
                    </div>
                )}
            </form>

        </div>
    )
}

export default Condicional