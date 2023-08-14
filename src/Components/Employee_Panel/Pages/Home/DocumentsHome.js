// import React from 'react'
// import "./DocumentsHomeStyle.css";
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// function DocumentsHome() {
//   const[motivation, seMotivation] = useState([]);

//   useEffect(() =>{
//     axios.get('https://localhost:7274/api/Motivation')
//     .then(Response =>{
//       seMotivation(Response.data);
//     }).catch(error =>{
//       console.log(error);
//     });
  
//    },[] );

//   return (
//     <div>
//     <h5 className="text-documentsHome"><span className=" " style={{padding:"0px",borderBottom:"4px solid rgb(233, 25, 133)"}}>Documents</span></h5>
//          <div className="Documents shadow">
//          <div class="scroll-container">
         
//   {/* <Slider dots={true}> */}

//       {motivation.map(employee => (
//       <div key={employee.Id}>
//       {/* <img className="empdirectory" src={employee.imageSrc} alt={employee.employeeName} /> */}
//         <p className='motivation-p'>{employee.motivation}</p>
//         {/* <p style={{color:"white"}}>Designation: {employee.designation}</p> */}
        
//       </div>
//     ))}
//   </div>
    
//   {/* </Slider> */}
 
// </div>        
//           </div>


//   )
// }

// export default DocumentsHome



import React from 'react'
import "./DocumentsHomeStyle.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { purple } from '@mui/material/colors';
function DocumentsHome() {
  const[motivation, seMotivation] = useState([]);

  useEffect(() =>{
    axios.get('https://localhost:7274/api/Document')
    .then(Response =>{
      seMotivation(Response.data);
    }).catch(error =>{
      console.log(error);
    });
  
   },[] );
   const imageCard = document => (
    
      <table cellPadding="0px" cellSpacing="0px" width="100%" className="tbl1"class="text-center " > 
   

   <tbody  >
   <tr  >
   
    <td style={{marginRight:"0px"}}>
  
   
        <img   src="http://localhost:3000/img1 (1).png"  height="55" width="59" ></img>
        
   </td>
  
   <td  style={{  textAlign:"left", backgroundColor:" #f1f0eb "}} height="40"  width="100%">
   &nbsp;<a  style={{ fontSize:"15px",fontWeight:"500", color:"black",textDecorationLine:"none"}}href={document.docSrc}>{ document.docName}</a> </td>
        </tr>
    {/* <td >
    
        <div  class="table" onClick={() => { showRecordDetails(document) }}>
        </div>
   </td> */}
        
   
{/*        
        <td >
   
   <a href={document.docSrc} target="_blank" class="table-link" style={{marginLeft:"2px", marginRight:"3px"}}>{document.docName}</a>
   </td>
  */}
   
  

   </tbody></table>
   )
  return (
    <div  >
    <h5 className="text-emp-directory" > <span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)",marginLeft:"0px"}}>Documents</span></h5>
        
        
  {/* <Slider dots={true}>  */}
  
 
     
  <div class="Documents shadow"align="center"style={{width:"330px",marginTop:"20px"}} >   
   
   <div   class="tbl-responsive" style={{ marginRight:"280px",marginTop:"20px",marginBottom:"20px",width:"300px"}}>
    <table  class="tble user-list " style={ {width:"100%",fontStyle:"Poppins",fontSize:"20px"}}>
          
              {motivation.map((e, i) =>(
                             <tr  text-align ="left" key={i}>
                                   {imageCard(motivation[i])} 
                                   <h1>     </h1>
                               
                              </tr>
                              
                           ))
                            
                       }
           
               </table>
             
            
         </div>
         <Link to="/Documents">  <input type="button"  style={{ marginTop:"-100px",marginBottom:"10px"}}value="View All" className="doc-btn"/>
       </Link>
         </div>
        
   <div className='Doc'>
      </div>
               
 
</div>        
        

    
  )
}

export default DocumentsHome  