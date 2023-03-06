import React from 'react'
import './app.css'
import Home from './Components/Home/home'
import Navbar from './Components/Navbar/Navbar'
import Popular from './Components/Popular/Popular'
import Offers from './Components/Offers/Offers'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <Popular/>
    <Offers/>
    <About/> 
    <Blog/> 
    <Footer/>  */}
   </>
  )
}

export default App