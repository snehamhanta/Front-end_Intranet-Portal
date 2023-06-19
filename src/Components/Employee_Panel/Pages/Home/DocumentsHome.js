import React from 'react'
import "./DocumentsHomeStyle.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function DocumentsHome() {
  const[motivation, seMotivation] = useState([]);

  useEffect(() =>{
    axios.get('https://localhost:7274/api/Motivation')
    .then(Response =>{
      seMotivation(Response.data);
    }).catch(error =>{
      console.log(error);
    });
  
   },[] );

  return (
    <div>
    <p className="text-documentsHome">Motivations</p>
         <div className="Documents">
         <div class="scroll-container">
         
  {/* <Slider dots={true}> */}

      {motivation.map(employee => (
      <div key={employee.Id}>
      {/* <img className="empdirectory" src={employee.imageSrc} alt={employee.employeeName} /> */}
        <p className='motivation-p'>{employee.motivation}</p>
        {/* <p style={{color:"white"}}>Designation: {employee.designation}</p> */}
        
      </div>
    ))}
  </div>
    
  {/* </Slider> */}
 
</div>        
        //  </div>


  )
}

export default DocumentsHome