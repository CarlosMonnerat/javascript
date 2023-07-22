import React from 'react'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'

export default function App(){

  const cnl = 'CFB Cursos'
  const yt = 'youtube.com/cfbcursos'
  const crs = 'React.js'

  return(
    <>
      <Header/>
      <Corpo/>
      <Dados canal={cnl} youtube={yt} curso={crs}/>
    </>
  )
}
