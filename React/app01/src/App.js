import React from 'react'
import Pessoa from './componentes/Pessoa'
import Frase from './componentes/Frase'

export default function App(){
  
  return(
    <div>
      <h1>Testando o CSS</h1>
      <Frase/>
      <Pessoa 
        nome="Carlos"
        idade="28" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
      />
    </div>
  )
}
