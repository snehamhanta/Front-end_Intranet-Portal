import React from 'react'
// import "./MotivationStyle.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyModal from './ModalComponents/ShowModalMotivation';
function Motivation() {
  const[motivation, seMotivation] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const closeModal =() => setShowModal(false);
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
    {/* <p className="text-documentsHome">Motivations</p> */}
         <div className="Motivation" style={{marginTop:"-110px"}}>
         {/* <div class="scroll-container"> */}
         
  {/* <Slider dots={true}> */}

      {motivation.map(employee => (
      <div key={employee.Id}>
      {/* <img className="empdirectory" src={employee.imageSrc} alt={employee.employeeName} /> */}
        <p className='motivation-p'>{employee.motivation}</p>
        {/* <p style={{color:"white"}}>Designation: {employee.designation}</p> */}
        
      </div>
    ))}
  </div>
  <button className='btn' onClick={()=> setShowModal(true)} style={{textDecoration:"none"}}>
                <div className=''>
                {/* <h3 className='h3-values' style={{textDecoration:"none"}}>
                        Core Values</h3> */}
                </div>
             </button>
             {showModal && <MyModal closeModal ={closeModal}/>} 

  {/* </Slider> */}
 
</div>        

 


  )
}

export default Motivation