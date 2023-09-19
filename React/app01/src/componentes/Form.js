import { useState } from 'react'        //Importa o Hook do useState

function Form(){
    function cadastrarusuario(e){
        e.preventDefault()              //Interrompe o envio do formulário para servidor
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()  //[Variável recebida, variável que será alterada]
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarusuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form