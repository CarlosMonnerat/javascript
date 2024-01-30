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
        <div style={tabuLinha}>
          <div style={casa} data-pos='20' onClick="">{j[2][0]}</div>
          <div style={casa} data-pos='21' onClick="">{j[2][1]}</div>
          <div style={casa} data-pos='22' onClick="">{j[2][2]}</div>  
        </div>
      </div>
    )
  }

  const verificaVitoria=()=>{
    //Linhas
    let pontos = 0
    let vitoria = false
    for(let l = 0; l < 3; l++){
      pontos = 0
      for(let c = 0; c < 3; c++){
        if(jogo[l][c] == simboloAtual){
          pontos++
        }
      }
      if(pontos >= 3){
        vitoria = true
        break
      }
    }

    //Colunas
    for(let c = 0; c < 3; c++){
      pontos = 0
      for(let l = 0; l < 3; l++){
        if(jogo[l][c] == simboloAtual){
          pontos++
        }
      }
      if(pontos >= 3){
        vitoria = true
        break
      }
    }

    //Diagonais
    pontos = 0
    for(let d = 0; d < 3; d++){
      if(jogo[d][d]){
        if(jogo[l][c] == simboloAtual){
          pontos++
        }
      }
    }
    if(pontos >= 3){
      vitoria = true
    }
    pontos = 0
    let l = 0
    for(let c = 2; c >= 0; c--){
      if(jogo[l][c] == simboloAtual){
        pontos++
      }
      l++
    }
    if(pontos >= 3){
      vitoria = true
    }
    return vitoria
  }


  return (
    <div>
      <h1>Olá mundo</h1>
      
    </div>
  );
}

