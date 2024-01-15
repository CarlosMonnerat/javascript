import React, {useState} from 'react'

export default function App() {
  const [valorTela, setValorTela]=useState('')
  const [resultado, setResultado]=useState(0)
  const [acumulador, setAcumulador]=useState(0)
  const [operado, setOperado]=useState(false)

//COMPONENTES
  const Tela=(valor,res)=>{
    return(
      <div style={csstela}>
        <span style={csstelaOper}>{valor}</span>
        <span style={csstelaRes}>{res}</span>
      </div>
    )
  }

  const Btn=(label,onClick)=>{
    return(
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )

  }

//FUNÇÕES
  const addDigitoTela=(d)=>{
    if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
      console.log("okay")
      setOperado(false)
      setValorTela(resultado + d)
      return
    }
    if(operado){
      setValorTela(d)
      setOperado(false)
      return
    }

    const valorDigitadoTela = valorTela + d
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria=()=>{
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
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
  
  const cssBtn={
    fontSize:30,
    height:75,
    width:75,
    padding:20,
    backgroundColor:'#000',
    color:'#fff',
    borderColor:'#000',
    textAlign:'center',
    outline:'none'
  }

  return (
    <div>
      <h1>Olá mundo</h1>
    </div>
      
  );
}


