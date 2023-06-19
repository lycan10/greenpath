import React from 'react'
import image from '../../assets/blog-img.jpg'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Bloglist from '../blog/bloglist'

import './blogpage.css'

const BlogPage = () => {
  return (
    <div className='blog-page'>
    <Navbar />
       <div className='blog-container'>
            <div className='blog-banner'>
            <div className='blog-opacity'></div>
                <img src={image} alt='blog-image'/>
            </div>
            <div className='blog-content'>
                    <h1>In the news</h1>
            </div>
            <Bloglist />
            <Footer />
        </div>
    </div>
  )
}

export default BlogPage
