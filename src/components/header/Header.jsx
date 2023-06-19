import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import './header.css'
const Header = () => { 
  return (
    <div className='header'>
    <Navbar />
      <div className='header-container'>
      
        <div className='header-img'>
        <div className='background-opacity'></div>

        </div>
        <div className='header-text'>
            <h1> Broad Vision Honest Service <br/> Great <span>value</span></h1>
            <p>Our goal then and now is provide quality services that exceed expectations</p>
           <div className='header-btn-div'>
           <Link className='header-button' to = '/'>Get In Touch</Link>
           </div>
        </div>
      
      </div>
    </div>
  )
}

export default Header
