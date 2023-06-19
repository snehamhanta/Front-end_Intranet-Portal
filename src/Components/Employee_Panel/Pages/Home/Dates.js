// import React from "react";
// import "./DateStyle.css";
// import moment from 'moment';
// import Grid from "@mui/material/Grid";
// import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
// function Date() {
//   return (
//     <div>
//          <div className="Date">
//                <Grid container>
//                <Grid item className="grid-item2"><TodayRoundedIcon sx={{ fontSize: 50 }}/></Grid>
//                </Grid>
//                <h3 className="h3">{moment().format('dddd')}</h3>
//                <p className="p2">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
//          </div>
//     </div>
//   )
// }

// export default Date

import React from "react";
import "./DateStyle.css";
import moment from 'moment';
import Grid from "@mui/material/Grid";
// import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import { WiDaySunnyOvercast } from "react-icons/wi";
import ShowModalMotivation from "./ModalComponents/ShowModalMotivation"
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
return (
       
    <div>
         <div className="Date">
               <Grid container>
               <Grid item className="grid-item2" ><WiDaySunnyOvercast style={{ fontSize: "50px",marginTop:"-20px" }}/></Grid>
               <h3 className="h3" style={{fontSize:"15px",marginTop:"-25px"}}><span style={{textTransform:"uppercase"}}>{greeting}</span>
               <h3 className="h4" style={{fontSize:"17px"}}>{moment().format('dddd')} <br/>{moment().format('D-MM-YYYY')}</h3>
               </h3>
               {/* <ShowModalMotivation/> */}
               <div style={{marginTop:"-20px"}}>
               {/* <Motivation/> */}
               {/* <ShowModalMotivation/> */}
               </div>
               {/* <p className="h3">{moment().format('D-MM-YYYY')}</p> */}
               </Grid>
         </div>
    </div>
    
  )
}

export default Dates