import React from 'react'
import OutraLista from './componentes/OutraLista'

export default function App(){
  
  const meusItens = ['React', 'Vue', 'Angular']

  return(
    <div>
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
    </div>
  )
}

