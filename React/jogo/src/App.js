import React, {useState} from 'react';

export default function App() {
  //ESTILOS
  const tabu={
    display: 'flex',
    flexDirection: 'column'
  }
  const tabuLinha={
    display: 'flex',
    flexDirection: 'row'
  }
  const casa={
    width:100,
    heigth:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    cursor:'pointer',
    fontSize:60,
    border:'1px solid #000'
  }

  const jogoInicial=[['','',''],['','',''],['','','']]
  const [jogo,setJogo]=useState([['','',''],['','',''],['','','']])
  const [simboloAtual, setSimboloAtual]=useState('X')
  const [jogando, setJogando]=useState(true)

  const tabuleiro=(j)=>{
    return(
      <div style={tabu}>
        <div style={tabuLinha}>
          <div style={casa} data-pos='00' onClick="">{j[0][0]}</div>
          <div style={casa} data-pos='01' onClick="">{j[0][1]}</div>
          <div style={casa} data-pos='02' onClick="">{j[0][2]}</div>  
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='10' onClick="">{j[1][0]}</div>
          <div style={casa} data-pos='11' onClick="">{j[1][1]}</div>
          <div style={casa} data-pos='12' onClick="">{j[1][2]}</div>  
        </div>
      </div>
    )
  }


  return (
    <div>
      <h1>Olá mundo</h1>
      
    </div>
  );
}

