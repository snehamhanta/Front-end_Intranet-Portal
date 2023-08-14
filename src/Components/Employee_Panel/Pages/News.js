//import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container,Row, Col, Card } from 'react-bootstrap';
import './News.css';
const News = () => {
  
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7274/api/News')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <>
  
    <Navbar />
    <Sidebar />
     
     {/* News Code  

     <Container>
      <h2 className="text-center mt-5">Company News</h2>
      <div className=" mt-4 "  >
        {news.map(item => (
          <Col md={4} >
            <Card key={item.newsId} className="mb-4" >
              <Card.Img variant="top"  height="200" width="50" src={item.imageUrl} alt={item.newsTitale} />
              <Card.Body>
                <Card.Title>{item.newsTitale}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </Container> */}

    <Container className='mt-0'>
      {/* <h2 className="text-center mt-5">Company News</h2> */}
      <h1 className='Launch mt-3 h4 text-dark' style={{marginLeft:"108px", fontWeight:"600" , marginTop:"0px"}} ><span style={{padding:"1px",borderBottom:"5px solid red", marginTop:"0px"}} >Company News</span></h1>
     <div  className='newsbox'>
        {news.map(item => (
          <Col md={4} key={item.newsId} >
            <Card className="mb-4 border-top-0 shadow" style={{ width: '60rem', width:"1090px"}} >
              <Row >
                <Col md={4}  >
                  <Card.Img style={{ width: '300px', height: '200px', objectFit: 'cover' ,padding:"25px"}} src={item.imageUrl} alt={item.newsTitale} />
                </Col>
                <Col md={8} >
                  <Card.Body width='350px' height='150px'>
                    <Card.Title style={{marginLeft:"-10px",fontSize:"20px",marginTop:"10px",marginRight:"100px"}}>{item.newsTitale}</Card.Title>
                    <Card.Text style={{marginLeft:"-10px",fontSize:"15px",marginRight:"70px",maxWidth:"900p",textIndent:"0%"}}>{item.content}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
        </div>
    </Container>


    </>
  )
}

export default News