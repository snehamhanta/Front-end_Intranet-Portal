import React,{useState,useEffect} from "react";
import "./DateStyle.css";
import moment from 'moment';
import Grid from "@mui/material/Grid";
// import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import { WiDaySunnyOvercast } from "react-icons/wi";
// import ShowModalMotivation from "./ModalComponents/ShowModalMotivation"
import Motivation from "./Motivation";
function Dates() {
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

// code for showing motivation
  const [userData, setUserdata]= useState([]);
  // const [filterdata, setFilterdata]= useState([]);

useEffect( ()=>{
      const getUserdata= async()=>{
        const reqData= await fetch("https://localhost:7274/api/Employee");
        const resData= await reqData.json();
        //console.log(resData);
        setUserdata(resData);
        // setFilterdata(resData);
  
      } 
  getUserdata();
    },[]);


return (
       
    <div>
         <div className="Date">
               <Grid container className="mb-0">
               <Grid item className="grid-item2 mb-0" ><WiDaySunnyOvercast style={{ fontSize: "80px",marginTop:"-10px" }}/></Grid>
               <h3 className="h3" style={{fontSize:"15px",marginTop:"-15px"}}><span style={{textTransform:"uppercase"}}>{greeting}</span>
               <h3 className="h4" style={{fontSize:"17px"}}>{moment().format('dddd')} <br/>{moment().format('D-MM-YYYY')}</h3>
               </h3>
            
               </Grid>
               <div className="mt-0" style={{ color:"white" ,marginLeft:"15px", marginRight:"15px"}}><Motivation/>
</div>
               {/* {
                  userData.map( (getUser)=>(
                 
                 <div key={getUser.employeesID}>
                    <div className="mt-0" style={{ color:"white" ,marginLeft:"15px", marginRight:"15px"}}>{getUser.employeeName}</div>
                </div>

                 )
                )
                  } */}
         </div>
    </div>
    
  )
}

export default Dates