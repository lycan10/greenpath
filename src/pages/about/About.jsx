import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './about.css'
import banner from '../../assets/about-img.jpg'
import image from '../../assets/about-us.jpg'
import Cards from '../../components/cards/Cards'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'

const About = () => {
  return (
    <div className='about'>
    <div className='about-container'>
    <div className='about-header'>
        <Navbar />
            <div className='about-image' >
            <div className='about-opacity'></div>
              <img src={banner} />
            </div>
            <div className='about-title'>
              <h1>About Us</h1>
            </div>
        </div>
        <div className='about-content-container'>
        <div className='about-content-image'>
          <img src={image} />
        </div>
          <div className='about-content'>
            <h1>Our Story</h1>
            <div className='about-vertical'></div>
            <p>
            Green path development is an interdisciplinary engineering and consulting firm dedicated to delivering exceptional solutions that drive innovation and transform industries. With a team of highly skilled personnel and a commitment to excellence, we tackle complex challenges and provide cutting-edge services to our clients. </p>
              <p> At green path development, our client-centric focus ensures that every project is tailored to their specific requirements, delivering outcomes that are both practical and visionary. 
              With a commitment to excellence, we have been serving clients across various industries, pushing the boundaries of what is possible and shaping a better future.
            </p>
          </div>
          </div>
        <div className='m-and-v'>
          <div className='vision'>
            <h3>Vision Statement</h3>
            <p>
                To be at the forefront in our industry, revolutionizing the way integrated solutions for project and infrastructural development are conceived and executed, and also encourage the use of ethical fundraising to reach a desired goal, while contributing to a sustainable and affluent future. 
            </p>
          </div>
          <div className='mission'>
            <h3>Mission Statement </h3>
            <p>
                To provide exceptional integrated services, driven by innovation and expertise, to deliver superior solutions that address complex challenges and create lasting value for our clients and the communities we serve.
            </p>
          </div>
        </div>
        <div className='offer'>
        <div className='about-content1' >
            <h1>Why Us</h1>
            <div className='about-vertical'></div>
            <p>
            Our business approach is centered around client satisfaction, innovation, collaboration, sustainability, and integrity. We strive to deliver tailored solutions, embrace new ideas, foster partnerships, prioritize environmental responsibility, and operate with transparency and ethical practices. 
            </p>
          </div>
          <div className='offers'>
              <Cards />
          </div>
        </div>
        <div className='our-team'>
        <div className='about-content2'>
            <h1>Our Team</h1>
            <div className='about-vertical'></div>
            <p>Our team members are passionate about their respective fields and are committed to staying at the forefront of industry trends and advancements. </p>
          </div>
          <div className='team-members'>
            <div className='team-image'>
              <img  height={600} src={team1} />
              <h1>Tobiloba Daniels</h1>
              <p>C.E.O</p>
            </div>
            <div className='team-image'>
              <img height={600} src={team2} />
              <h1>Jessica jopas</h1>
              <p>Legal adviser</p>
            </div>
            <div className='team-image'>
              <img height={600} src={team3} />
              <h1>Sanada tasha</h1>
              <p>Business analyst</p>
            </div>
          </div>
        </div>

        <Footer />
    </div>
    </div> 
  )
}

export default About
