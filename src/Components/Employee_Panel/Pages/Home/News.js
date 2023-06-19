import React, {useState, useEffect}from 'react'
import "./NewsStyle.css";
import { Carousel } from 'react-responsive-carousel';  
import axios from 'axios';
// import CommentBox from '../CommentBox';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import news1 from "../../Images/emp1.jpg"
import { Height } from '@mui/icons-material';

function News() {

  const [news, setNews] = useState([]);

  useEffect(() =>{
  axios.get('https://localhost:7274/api/News')
  .then(Response =>{
    setNews(Response.data);
  }).catch(error =>{
    console.log(error);
  });

 },[] );

  return (
  <div>

    <p className="text-news">Company News</p>
            <div className='News'> 
            
                <Carousel className="carousel" showThumbs={false} showIndicators={false} showStatus={false} stopOnHover={false} autoPlay={true}>  
                {news.map(item =>(
                        <div key={item.newsId}>  
                            <img style={{width:"450px",height:"200px" ,marginLeft:"0px", marginTop:"50px"}} src={item.imageUrl} alt={item.newsTitale}  />  
                            <h1 className='news-h1' style={{marginTop:"-100px", marginLeft:"150px"}}> {item.newsTitale}</h1>
                            <p className="news-p"style={{marginLeft:"200px"}}>{item.content}</p>
                            {/* <CommentBox/> */}
                       </div>  
                       ))}     
            </Carousel>
            
            </div>  
  </div>
  )
}

export default News