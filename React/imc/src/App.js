import React,{useState} from 'react'
import TabelaIMC from './components/TabelaIMC'
import Peso from './components/Peso'
import Altura from './components/Altura'


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
      <Peso p={peso} setP={setPeso}/>
      <Altura a={altura} setA={setAltura}/>
      {fcalcular(peso, altura, setResultado)}
      {fresultado(resultado)}
      <TabelaIMC/>

    </div>
  )
}

export default App;
