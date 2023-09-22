import { Link } from 'react-router-dom'

function Empresa(){
    return(
        <section>
            <h1>Empresa</h1>
            <p>
                Ver todos os usuários: <Link to="/allusers">Clique aqui</Link>
            </p>
        </section>
    )
}

export default Empresa
