import React from 'react'
import Pessoa from './componentes/Pessoa'

export default function App(){
  
  return(
    <div>
      <Pessoa 
        nome="Carlos"
        idade="28" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
      />
    </div>
  )
}
