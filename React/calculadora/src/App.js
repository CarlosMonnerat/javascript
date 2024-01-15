import React, {useState} from 'react'

export default function App() {
  const [valorTela, setValorTela]=useState('')
  const [resultado, setResultado]=useState(0)
  const [acumulador, setAcumulador]=useState(0)
  const [operado, setoperado]=useState(false)

  const Tela=(valor,res)=>{
    return(
      <div style="">
        <span style={}>{valor}</span>
        <span style={}>{res}</span>
      </div>
    )
  }

  
  return (
    <div>
      <h1>Olá mundo</h1>
    </div>
      
  );
}


