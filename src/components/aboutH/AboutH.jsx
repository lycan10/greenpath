import React from 'react'
import './aboutH.css'
import { Link } from 'react-router-dom'
import meeting from '../../assets/img2.jpg'

const AboutH = () => {
  return (
    <div className='aboutH'>
        <div className='aboutH-container'>
            <div className='aboutH-content'>
                <h1>About us</h1>
                <div className='about-us-title'></div>
                <p>Green path development is an interdisciplinary engineering and consulting firm dedicated to delivering exceptional solutions that drive innovation and transform industries. At green path development, collaboration lies at the heart of our approach. We partner closely with our clients, understanding their unique needs, and working hand-in-hand to achieve their goals. </p>
                <Link to={'/about'} className='aboutH-button'><span>Read More</span></Link>
            </div>
            <div className='aboutH-image'>
                <img src={meeting} alt='about-us image' />
            </div>
        </div>
    </div>
  )
}

export default AboutH
