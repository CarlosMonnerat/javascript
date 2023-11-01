import React, {useState}from 'react'

const carros = [
  {categoria:"Esporte", preco:"110000", modelo:"Golf GTI"},
  {categoria:"Esporte", preco:"120000", modelo:"Camaro"},
  {categoria:"SUV", preco:"85000", modelo:"HRV"},
  {categoria:"SUV", preco:"83000", modelo:"T-Cross"},
  {categoria:"Utilitario", preco:"125000", modelo:"Hillux"},
  {categoria:"Utilitario", preco:"90000", modelo:"Ranger"}
]

const linhas = (cat) =>{
  const li = []
  carros.forEach((carro)=>{
      if(carro.categoria.toUpperCase() == cat.toUpperCase() || cat == ''){
        li.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    }
  )
  return li
}


const tabelaCarros = (cat) =>{
  return(
    <div>
      <table border="1" style={{borderCollapse:'collapse'}}>
          <thead>
            <tr>
              <th>Categoria</th> <th>Preço</th> <th>Modelo</th> 
            </tr>
          </thead>
          <tbody>
            {linhas(cat)}
          </tbody>
      </table>
    </div>
    
  )
}

function App() {
  const [categoria, setCategoria] = useState('')

  return (
    <>
    <h1>Olá Mundo</h1>
    {tabelaCarros(categoria)}
    </>
  )
}

export default App;
