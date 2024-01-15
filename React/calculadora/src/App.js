import React, {useState} from 'react'

export default function App() {
  const [valorTela, setValorTela]=useState('')
  const [resultado, setResultado]=useState(0)
  const [acumulador, setAcumulador]=useState(0)
  const [operado, setoperado]=useState(false)

  return (
    <div>
      <h1>Olá mundo</h1>
    </div>
      
  );
}


