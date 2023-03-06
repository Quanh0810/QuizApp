import React, {useEffect} from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {SiYourtraveldottv} from 'react-icons/si'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'
  
 const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

   return (
     <div className='footer'>
      <div className="secCotainer container grid">
         <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
         <div className="footerLogo">
            <a href="#" className="logo flex"><h1><SiYourtraveldottv className='icon' />  Qi</h1></a>
          </div>

          <div  className="socials flex">
              <ImFacebook className="icon"/>
              <BsTwitter className="icon"/>
              <AiFillInstagram className="icon"/>
          </div>
         </div>

         <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle">Information</span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Leaderboard</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          
         </div>
         <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
            <li>
              <a href="#">PHP</a>
            </li>
            <li>
              <a href="#">ReactJS</a>
            </li>
            <li>
              <a href="#">React Navtive</a>
            </li>
            <li>
              <a href="#">TypeScript</a>
            </li>
          
         </div>
         <div data-aos="fade-up" data-aos-duration="3500" className="footerLinks">
          <span className="linkTitle">Contact</span>
           <span className='phone'>+8469 036 124</span>
           <span className="email">nqunhanh35@gmail.com</span>
          
         </div>
      </div> 
     </div>
   )
 }
 
 export default Footer