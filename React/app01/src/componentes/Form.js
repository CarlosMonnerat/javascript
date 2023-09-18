function Form(){
    function cadastrarusuario(e){
        e.preventDefault()      //Interrompe o envio do formulário para servidor
        console.log("Cadastrou o usuário!")
    }
    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarusuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form