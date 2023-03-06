import React, {useEffect}  from 'react'
import './about.css'
import customerImg from '../../Assets/customer.png'
import mountainImg from '../../Assets/mountain.png'
import climbingImg from '../../Assets/climbing.png'
import video from '../../Assets/video.mp4'

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'

 
 const About = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 
  
   return (
     <section className='about  section'>
      <div className="secContainer">
       
        <h2 className='title'>
          Why Coding?
        </h2>
        

        <div className="mainContent container grid">

              <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
                <img src={mountainImg} alt="Image" />
                <h3>What is coding?</h3>
                <p>coding is the process of giving computers instructions in a language that they understand. </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
                <img src={climbingImg} alt="Image" />
                <h3>Why is it importants?</h3>
                <p>It teaches you important skills such as critical thinking, problem solving and creativity. </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
                <img src={customerImg} alt="Image" />
                <h3>What are the benefits?</h3>
                <p>Coding teaches critical thinking, problem-solving, creativity and resilience. </p>
              </div>
        </div>

        
      </div>

     </section>
   )
 }
 
 export default About