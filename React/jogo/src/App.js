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

  return (
    <div>
      <h1>Olá mundo</h1>
      
    </div>
  );
}

