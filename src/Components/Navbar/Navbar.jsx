import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {SiYourtraveldottv} from 'react-icons/si'
import {Link} from "react-router-dom";

const Navbar = () => {
  
  const [active, setActive]  = useState('navBar')

  const showNav = ()=>{
      setActive('navBar activeNavbar')
  }
  const removeNav = ()=>{
      setActive('navBar')
  }
  
  //code statement to add a background color to the header.
  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
       <header className={transparent}>
        
          <div className="logoDiv">
            <a href="#" className="logo flex"><h1><SiYourtraveldottv className='icon' />  Qi</h1></a>
          </div>

          <div className={active}>
            <ul onClick={removeNav} className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Docs</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Leaderboard</a>
               </li>
              <li className="navItem">
                <a href="#" className="navLink">Contact</a>
              </li>
              
              <div className="headerBtns flex">
              <button className="btn loginBtn">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn">
                <Link to="/register">Sign Up</Link>
              </button>
              </div>
            </ul>
            <div onClick={removeNav} className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
              </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon'/>
          </div>
       </header>
    </section>
  )
}

export default Navbar