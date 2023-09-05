import PropTypes from 'prop-types' // Importa o pacote do React

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
            
        </>
    )
}

Item.propTypes = { // Vai garantir que as propriedades passadas sejam do tipo 'string' e 'number' respectivamente.
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

export default Item