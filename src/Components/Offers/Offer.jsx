import React, {useEffect} from 'react'
import './offer.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {MdKingBed} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdBathtub} from 'react-icons/md'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'


// Images ======================>
import img6 from '../../Assets/image (6).jpg'
import img7 from '../../Assets/image (7).jpg'
import img8 from '../../Assets/image (8).jpg'
// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
 
  {
  id:1,
  imgSrc: img8,
  destTitle: 'Machu Picchu',
  location: 'HTML Advanced',
  price: '$700'
  },

  {
  id:2,
  imgSrc: img6,
  destTitle: 'Guanajuato',
  location: 'CSS Advanced',
  price: '$2,000'
  },

  {
  id:3,
  imgSrc: img7,
  destTitle: 'Angkor Wat',
  location: 'JS Advanced',
  price: '$4,000',  
  },

]

 
 const Offer = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, []) 


   return (
     <section className='offer section container'>
      <div className="secContainter">

        <div data-aos="fade-up" data-aos-duration="2000"  className="secIntro">
          <h2 className='secTitle'>
          Special Offers
          </h2>
          <p>
          From easy to difficult, come see!
          </p>
 
        </div>

        <div className="mainContent grid">
          {/* Single Offer from the map Array */}

          {
            Data.map(({id, imgSrc, destTitle, location, price })=>{
              return (
                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt={destTitle} />

             <span className="discount">
              10% Off
             </span>
            </div>

              <div className="offerBody">
                <div className="price flex">
                  <h4>
                    {price}
                  </h4>
                  <span className="status">
                    For Buying
                  </span>
                </div>

                
                
                <div className="location flex">
                    {/* <MdLocationOn className="icon"/> */}
                   <small>{location}</small> 
                </div>

                <button className='btn flex'>Click here to Buy <BsArrowRightShort className='icon'/></button>

              </div>
            </div>
              )
            })
          }

        
           
        </div>
      </div>
     </section>
   )
 }
 
 export default Offer