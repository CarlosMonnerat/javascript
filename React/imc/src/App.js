import React,{useState} from 'react'
import TabelaIMC from './components/TabelaIMC'
import Peso from './components/Peso'
import Altura from './components/Altura'
import Calcular from './components/Calcular'


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
      <Calcular p={peso} a={altura} setR={setResultado}/>
      {fresultado(resultado)}
      <TabelaIMC/>

    </div>
  )
}

export default App;
