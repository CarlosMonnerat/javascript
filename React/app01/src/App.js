import React from 'react'
import Logo from './componentes/imgs/logo.png'
import menina from './componentes/imgs/menina.jpeg'

export default function App(){
  const canal=()=>{
    return('CFB Cursos')
  }
  function curso(){
    return('Curso de React')
  }

  return(
    <section>
      <p>Canal: {canal()}</p>
      <p>{'Curso: ' + curso()}</p>
      <img src={Logo}></img>
      <img src={menina}></img>
    </section>
  )
}
