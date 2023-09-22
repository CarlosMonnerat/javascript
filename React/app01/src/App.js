import React from "react"
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Users from './pages/Users'

function App(){
  return(
    <Router>
      <Routes>

        <Route path="/" exact element={<Home />} />  
        <Route path="/users" element={<Users />} />  
        <Route path="/allusers" element={<Navigate to="/users"/>} />
        <Route path="/Contato" element={<Contato />} />
          
      </Routes>
    </Router>
  )
}

export default App

