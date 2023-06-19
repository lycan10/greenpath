import React from 'react'
import { cardsData } from '../../constants'
import './review.css'
const Review = () => {
  return (
    <div className='review'>
        <div className='review-container'>
           <h1>What people are saying</h1> 
           <div className='cards-container'>
            {
                cardsData.map((item)=>{
                    return(
                        <div key={item.id} className='cards'>
                            <div> {item.img} </div>
                            <p>"{item.content}"</p>
                            <p>{item.author}</p>
                        </div>
                    )
                })
            }
           </div>
        </div>
      
    </div>
  )
}

export default Review
