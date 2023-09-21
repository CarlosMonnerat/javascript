import React from 'react'
import { useState } from 'react'
import SeuNome from './componentes/SeuNome'

export default function App(){
  const [nome, setNome] = useState()

  return(
    <div>
      <h1>State Lift</h1>
      <SeuNome setNome = {setNome}/>
      {nome}
    </div>
  )
}

