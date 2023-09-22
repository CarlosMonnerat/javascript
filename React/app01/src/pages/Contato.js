import { Link } from 'react-router-dom'

function Contato(){
    return(
        <section>
            <h1>Contato</h1>
            <p>
                Ver todos os usuários: <Link to="/allusers">Clique aqui</Link>
            </p>
        </section>
    )
}

export default Contato