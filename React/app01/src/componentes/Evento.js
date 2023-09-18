function Evento({ numero }){    //Recebe a propriedade "numero"
    function meuEvento(){
        console.log(`Foi ativado! ${numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento