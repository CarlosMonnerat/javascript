import PropTypes from 'prop-types' // Importa o pacote do React

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
            
        </>
    )
}

Item.propTypes = { 
    marca: PropTypes.string.isRequired, //'isRequired' exige que alguma informação seja passada
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item