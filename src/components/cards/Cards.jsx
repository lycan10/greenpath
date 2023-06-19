import React from 'react'
import image1 from '../../assets/innovation.jpg'
import image2 from '../../assets/technical.jpg'
import image3 from '../../assets/safety.jpeg'



const cards = [
    {
        id:0,
        img: image1,
        Title: "Innovation and Excellence",
        content: 'We embrace a culture of continuous growth and strive for innovation in all aspects of our work. By pushing the boundaries of what is possible, we deliver forward-thinking solutions that set new industry standards.'
    },
    {
        id:1,
        img: image2 ,
        Title: "Technical Expertise",
        content: 'We pride ourselves on the depth and breadth of our technical expertise. Our team consists of highly skilled professionals with a wealth of knowledge and experience across various disciplines. '
    },
    {
        id:2,
        img: image3 ,
        Title: "Health and Safety",
        content: 'We are committed to sustainability and social responsibility in all our projects. We integrate environmentally friendly practices, promote energy efficiency, and prioritize the use of sustainable materials.'
    },
]
const Cards = () => {
  return (
    <div className='about-cards' style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'flex-start'}} >
    {
        cards.map((item)=>{
            return(
            <div key={item.id} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', boxShadow:'0 40px 120px -40px rgba(0,0,0,.24)', paddingBottom:'40px'}}>
                <div className='about-cards-image'>
                    <img style={{width: '500px', height:'300px', objectFit:'cover' }} src={item.img} />
                </div>
                <div className='about-cards-content' style={{padding:'2rem'}}>
                    <h1>{item.Title}</h1>
                    <p style={{maxWidth:'420px', fontSize: '17px', lineHeight: '28px', color: '#5A5A5A'}}> {item.content} </p>
                </div>
            </div>
            )
        })
    }
    
: 

    </div>
  )
}

export default Cards
