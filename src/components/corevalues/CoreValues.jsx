import React from 'react'
import { coreData } from '../../constants'
import './corevalues.css'
const CoreValues = () => {
  return (
    <div className='core-values'>
        <div className='core-values-container'>
           {
            coreData.map((item)=>{
                return(
                <div key={item.id} className='core-content'>
                    <div className='core-image'> 
                    <img src={item.img} /> </div>
                    <h1>{item.title}</h1>
                </div>
                )
            })
           }
          
        </div>
    </div>
  )
}

export default CoreValues
