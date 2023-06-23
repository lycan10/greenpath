import React from 'react'
import './services.css'
import { servicesDate } from '../../constants'

const Services = () => {
  return (
    <div className='services'>
        <div className='services-container'>
            <h1>Our Services</h1>
            <div className='services-content-container'>
            {
                servicesDate.map((item)=>{
                    return(
                        <div key={item.id} className='services-content'>
                            <div className='services-image'>
                            <div className='services-opacity'></div>
                                <img src={item.img} />
                            </div>
                            <div className='service-content-text'>
                                <p className='content-text'>{item.title}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Services
