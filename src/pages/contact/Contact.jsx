import React from 'react'
import Footer from '../../components/footer/Footer'
import Map from '../../components/map/Map'
import Navbar from '../../components/navbar/Navbar'
import './contact.css'
import banner from '../../assets/contact.jpg'
import image1 from '../../assets/phone.svg'
import image2 from '../../assets/map-pin.svg'
import image3 from '../../assets/envelope.svg'
import image4 from '../../assets/clock.svg'
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='contact-header'>
        <Navbar />
            <div className='contact-image' >
            <div className='contact-opacity'></div>
              <img src={banner} />
            </div>
            <div className='contact-title'>
              <h1>Contact Us</h1>
            </div>
        </div>
        <div className='contact-content'>
          <h1>Get in Touch</h1>
          <div className='contact-vertical'></div>
          <p>Our dedicated team is ready to respond to your inquiries promptly. We value your feedback and strive to provide the best possible service. Don't hesitate to get in touch with us, and we'll be more than happy to assist you.</p>
        </div>
       <div className='contact-address'>
        <div className='contact-form'>
          <h1>Send Us A Message</h1>
          <form >
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Message' />
            <button>Contact Us</button>
          </form>
        </div>
        <div className='contact-details'>
          <h1>Contact Info</h1>
          <div className='contact-info'>
              <div className='CD'>
              <div className='CD-image'>
                <img src={image1} />
              </div>
              <div className='CD-text'>
                <h3>Call Us</h3>
                <p>090X XXX XXXX</p>
                <p>090X XXX XXXX</p>
              </div>
              </div>
              
              <div className='CD'>
              <div className='CD-image'>
                <img src={image2} />
              </div>
              <div className='CD-text'>
                <h3>Our Location</h3>
                <p>No. 3 Tito Bros Street, <br/>Asokoro Abuja</p>
              </div>
              </div>      
              <div className='CD'>
              <div className='CD-image'>
                <img src={image3} />
              </div>
              <div className='CD-text'>
                <h3>Our Email</h3>
                <p>Info@example.com</p>
                <p>Info@example.com</p>
              </div>
              
                </div> 
                <div className='CD'>
              <div className='CD-image'>
                <img src={image4} />
              </div>
              <div className='CD-text'>
                <h3>Working Hours</h3>
                <p>Mon-Fri: 10AM-5PM</p>
                <p>Sat-Sun: 10AM-1PM</p>
              </div>
              </div>  
          </div>
          <div className='contact-SM'>
          <h1>Follow Us</h1>
          <div className='SM-icons'>
            <FaFacebookF className='sm-logos'  />
            <AiFillTwitterCircle className='sm-logos' />
            <AiOutlineInstagram className='sm-logos' />
          </div>
        </div>
        </div>
       </div>
       <div className='contact-map'>
        <Map />
        </div>
        <Footer /> 
      </div>
    </div>
  )
}

export default Contact
