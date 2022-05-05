import React from 'react'
import NavBar from './components/NavBar.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
      <BrowserRouter>
        <NavBar/>
        <Main/>
        <Footer/>
      </BrowserRouter>
  )
    
}

export default App
