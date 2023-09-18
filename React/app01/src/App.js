import React from 'react'
import Evento from './componentes/Evento'
import Form from './componentes/Form'


export default function App(){
  
  return(
    <div>
      <h1>Testando Eventos</h1>
      <Evento numero="1"/> 
      <Evento numero="2"/>
      <Form/>
      
    </div>
  )
}
