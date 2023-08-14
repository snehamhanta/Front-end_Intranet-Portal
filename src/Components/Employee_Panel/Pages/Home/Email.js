import React from 'react'
import { Link } from 'react-router-dom'
import "./EmailStyle.css";

function Email() {
  return (
    <>
     <div>
      {/* <h4></h4> */}
    <h5 className="text-emp-directory" > <span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>Email</span></h5>
         <div className="EmpDirectory shadow"></div>
   </div>

    </>
  )
}

export default Email