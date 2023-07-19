import React from 'react'
import Logo from './componentes/imgs/logo.png'

export default function App(){
  const canal=()=>{
    return('CFB Cursos')
  }
  function curso(){
    return('Curso de React')
  }

  return(
    <section>
      <header>
        <p>Canal: {canal()}</p>
        <p>{'Curso: ' + curso()}</p>
      </header>
      <section>
        <img src={Logo}></img>
        <img src='img/menina.jpeg'></img>
      </section>  
    </section>
  )
}
