import React,{useState,useEffect} from "react";
import "./DateStyle.css";
import moment from 'moment';
import Grid from "@mui/material/Grid";
// import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import { WiDaySunnyOvercast } from "react-icons/wi";
import {MdOutlineSpeakerNotes} from "react-icons/md"
// import ShowModalMotivation from "./ModalComponents/ShowModalMotivation"
import Motivation from "./Motivation";
import MyModal from './ModalComponents/MotivationModal';

function Dated() {
let curDate = new Date();
curDate = curDate.getHours();
let greeting ="";
if (curDate < 12) {
     greeting ="Good Morning";

   } else if (curDate < 18) {
     greeting ="Good Afternoon";

   } else {
     greeting='good evening';
   }


  //  for motivation
  const [showModal, setShowModal] = useState(false);
  const closeModal =() => setShowModal(false);
return (
       
  
  <div className="Date mt-0">
        
        <Grid className="grid-item2  float-start" ><WiDaySunnyOvercast style={{ fontSize: "100px",color:"white", padding:"10px"}}/></Grid>
        <h3 className="h3" style={{fontSize:"20px",color:"white"}}><span style={{textTransform:"uppercase", padding:""}}>{greeting}</span>
        <h3 className="h4" style={{fontSize:"17px",color:"white", padding:"15px",marginLeft:""}}>{moment().format('dddd')} <br/>{moment().format('D-MM-YYYY')}</h3>
        </h3>
     
        <h3 className="h4" style={{fontSize:"17px",color:"white",marginLeft:"", textAlign:"center"}}>
        <MdOutlineSpeakerNotes style={{marginRight:"3px", fontSize:"20px"}}/>
          Today's Motivation </h3>
        
        {/* <div className="moti" onClick={()=> setShowModal(true)} style={{ color:"white", fontSize:"17px",textAlign:"justify"}}>
         <Motivation/></div> */}
        {/* {
           userData.map( (getUser)=>(
          
          <div key={getUser.employeesID}>
             <div className="mt-0" style={{ color:"white" ,marginLeft:"15px", marginRight:"15px"}}>{getUser.employeeName}</div>
         </div>

          )
         )
           } */}
             {showModal && <MyModal closeModal ={closeModal}/>} 

  </div>

    
  )
}

export default Dated

