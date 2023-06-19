import React from 'react'
import './blog.css'


const Blog = ({name, title, author, publishedAt, url }) => {
  return (
    <div className='blog'>
        <div key={name} className='blog-news'>
            <h1><a href={url}>{title}</a></h1>
            <p> {publishedAt.slice(0,10)} <span>&#40; {author}&#41;</span></p>
        </div>
        </div>
  )
}

export default Blog
