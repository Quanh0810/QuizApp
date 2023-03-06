import React, {useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
 
 const Home = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
 
   return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
           <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
            Prepare to Learn with Qi
           </h1>
           <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
             
           </p>
           <button data-aos="fade-up" data-aos-duration="3000" className="btn">
                <a href="#">Start Now</a>
              </button>
        </div>

        <div  className="homeCard grid">
           <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
              <label htmlFor="location">Search</label>
              <input type="text" placeholder='Item'/>
           </div>
           
           <button data-aos="fade-left" data-aos-duration="3500" className='btn'>Search</button>
        </div>
      </div>
    </section>
   )
 }
 
 export default Home