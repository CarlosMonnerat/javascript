import Button from './evento/Button'

function Evento(){
    function meuEvento(){           //Método 1
        console.log(`Ativando o primeiro evento!`)
    }

    function segundoEvento(){       //Método 2
        console.log(`Ativando o segundo evento!`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento
