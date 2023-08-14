import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css';
import ReactPlayer from 'react-player'//install this library by using --npm install react-player
import { Card, Col, Container, Row } from 'react-bootstrap';
//import { Container, Row, Col, Video, Modal  } from 'react-bootstrap';

const YStories= () => {
  const [ystories , setYStories]=useState([]);

  useEffect (()=>{
    axios.get('https://localhost:7274/api/YStories')
    .then(Response=>{
      setYStories(Response.data);
    })
    .catch(error =>{
      console.log(error);
    });
  }, []);

  return (
    <>
    <Navbar />
    <Sidebar />
 
   
    <Container style={{ marginTop:'20px'}}>
    <h1 className='Launch mt-4 h4 text-dark' style={{marginLeft:"100px", fontWeight:"600"}} ><span style={{padding:"1px",borderBottom:"5px solid red", marginTop:"0px",textDecorationColor:"rgb(233, 25, 133)"}} >Youtube</span></h1>
<br></br>
    
<div className="video-list-container" style={{marginTop:"0px",marginLeft:"-20px"}}>

    
      {ystories.map(ystory => (
        <div className='video-item' key={ystory.videoId} xs={12} sm={6} md={4} lg={3}>
  
           
            <div classname="card-img" style={{ padding:"20px", width: '30rem',marginLeft:'50px',marginRight:'50px', height: '150px' }}>  <ReactPlayer url={ystory.videoURL} className='video' style={{ padding:"20px",marginBottom:'50px'}} controls /><br></br> </div>
          
          {/* <div><p>{ystories.Videotitle}</p></div> */}
             
          
        </div>
        
      ))}
    
    
    </div>
  </Container>

    </>
  
  )
}

export default YStories