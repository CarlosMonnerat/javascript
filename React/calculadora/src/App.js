import React, {useState} from 'react'

export default function App() {
  const [valorTela, setValorTela]=useState('')
  const [resultado, setResultado]=useState(0)
  const [acumulador, setAcumulador]=useState(0)
  const [operado, setoperado]=useState(false)

  const Tela=(valor,res)=>{
    return(
      <div style={csstela}>
        <span style={csstelaOper}>{valor}</span>
        <span style={csstelaRes}>{res}</span>
      </div>
    )
  }

  //ESTILOS
  const csstela={
    display: 'flex',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#444',
    flaxDirection: 'column',
    window:260
  }

  const csstelaOper={
    fontSize:25,
    color:'#fff',
    height:20,
  }

  const csstelaRes={
    fontSize:50,
    color:'#fff',
  }
  

  return (
    <div>
      <h1>Olá mundo</h1>
    </div>
      
  );
}


