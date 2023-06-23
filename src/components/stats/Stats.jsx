import React from 'react'
import { Link } from 'react-router-dom'

import './stats.css'
const Stats = () => {
  return (
    <div className='stats'>
    <div className='stat-container'>
    <div className='cta-background'></div>
    <div className='stat-image'></div>
        <div className='stats-content'>
        <div className='vertical-lines'></div>
            <h1>Contact us for you next project</h1>
            <p> Our team of experts are ready to collaborate with you and embark on a journey of <span>creativity, efficiency, and excellence.</span>  Together, we can bring your ideas to life.</p>
            
            <Link to='/contact' className='stat-button'><span>Book an Appointment</span></Link>
          
        </div>
        
    </div>
      
    </div>
  )
}

export default Stats
