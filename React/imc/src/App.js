import React,{useState} from 'react'

const tabelaIMC=()=>{
  return(
    <table border='1' style={{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do Peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau II</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau III</td>
          <td>Acima de 40</td>
        </tr>
      </tbody>
    </table>
  )
}

const fpeso=(peso, setPeso)=>{
  return(
    <div>
      <label>
        Peso
        <input type='text' value={peso} onChange={(e)=>{setPeso(e.target.value)}}/>
      </label>
    </div>
  )
}

const faltura=(altura, setAltura)=>{
  return(
    <div>
      <label>
        Altura
        <input type='text' value={altura} onChange={(e)=>{setAltura(e.target.value)}}/>
      </label>
    </div>
  )
}

const fcalcular=(peso, altura, setResultado)=>{
  const calc=()=>{
    setResultado(peso/(altura*altura))
  }
  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

const fresultado=(resultado)=>{
  return(
    <div>
      <p>Resultado: {resultado.toFixed(1)}</p>
    </div>
  )
}


function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  return(
    <div>
      <h1>Calculadora IMC</h1>
      {fpeso(peso, setPeso)}
      {faltura(altura, setAltura)}
      {fcalcular(peso, altura, setResultado)}
      {fresultado(resultado)}
      {tabelaIMC()}

    </div>
  )
}

export default App;
