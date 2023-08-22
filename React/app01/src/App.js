import React from 'react'
import logo from './componentes/imgs/logo.png'

export default function App(){
  
  return(
    <>
      <div>
        <h1>Olá Mundo!</h1>
        <p>Meu primeiro App</p>
        <img src='/img/menina.jpeg' alt="Imagem na msm pasta do Index.html"/>
        <img src={logo} alt="imagem fora da pasta do Index.html"/> 
         
      </div>
    </>
  )
}
