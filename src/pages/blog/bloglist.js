import React, {useState, useEffect} from 'react'
import axios from "axios"
import Blog from './Blog'


const Bloglist = () => {
    const [articles, setArticles] = useState([])
    const formatDate = () => {
      let d = new Date(),
          month = '' + (d.getMonth()),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 10) 
          month = '0' + month;
      if (day.length < 10) 
          day = '0' + day;
      return(year+'-' + month +'-'+day);
  }
  formatDate();
    useEffect(()=>{
        const getArticles = async ()=>{
            const response = await axios.get(`https://newsapi.org/v2/everything?q=stock&%20market&from=${formatDate()}&sortBy=publishedAt&apiKey=1258e56490814208bdaa4ed79100d1c7`)
            setArticles(response.data.articles.slice(0, 15))
        }
        getArticles()
    }, [])


  return (
    <div>
      {
        articles.map((article)=>{
            return(
                <Blog key={article.url}
                    title={article.title}
                    author={article.author}
                    publishedAt={article.publishedAt}
                    url={article.url}
                />
            )
        })
      }
    </div>
  )
}

export default Bloglist
