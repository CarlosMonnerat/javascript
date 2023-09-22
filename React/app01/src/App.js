import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Users from './pages/Users'
import Navbar from './componentes/layout/Navbar'
import Footer from './componentes/layout/Footer'

function App(){
  return(
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/allusers" element={<Navigate to="/users" />} />
        <Route path="/empresa" element={<Empresa />}/>
        <Route path="/contato" element={<Contato />}/>
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App

