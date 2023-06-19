import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './servicesPage.css';
import { servicesDate } from '../../constants';

const servicesData = [
  {
    id: 0,
    num: '01.',
    title: 'Meticulous Planning',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    id: 1,
    num: '02.',
    title: 'On-Time Delivery',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    id: 2,
    num: '03.',
    title: 'Perfect Execution',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    id: 3,
    num: '04.',
    title: 'Competitive Prices',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
];

const ServicesPage = () => {
 
  return (
    <div className="services-page">
      <div className="services-container">
      
        <div className="parallax-container">
          <Navbar />
          <div className="parallax-image">
            <div className="services-header-opacity"></div>
          </div>
          <div className="services-title">
            <h1>Services</h1>
          </div>
        </div>
        <div className="services-page-title">
          <div className="services-main-content">
            <h1>Our Services</h1>
            <div className="services-vertical"></div>
            <p>
              Green path development is an interdisciplinary engineering and consulting firm dedicated to delivering exceptional solutions that drive innovation and transform industries.
            </p>
          </div>
          <div className="services-page-cards">
            {servicesData.map((item) => (
              <div key={item.id} className="services-cards-content">
                <h1 style={{color:'#246a47' }}>{item.num}</h1>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="services-page-main">
          <div className="services-page-content">
            <h1>Our Specialization</h1>
            <div className="services-vertical"></div>
            <p>
              Green path development is an interdisciplinary engineering and consulting firm dedicated to delivering exceptional solutions that drive innovation and transform industries.
            </p>
            <div className="our-specialization">
              {servicesDate.map((item) => (
                <div className="our-spec" key={item.id}>
                  <div className="our-spec-img">
                    <img src={item.img} alt="Specialization Image" />
                  </div>
                  <div className="our-spec-content">
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <p className="our-spec-p">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
