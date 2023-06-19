//import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "./EmpDirectoryStyle.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function EmpDirectory() {
  const[emp, setEmp] = useState([]);
  const [userData, setUserdata] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() =>{
    axios.get('https://localhost:7274/api/Employee')
    .then(Response =>{
      setEmp(Response.data);
    }).catch(error =>{
      console.log(error);
    });
  
   },[] );

   const handlesearch = (event) => {
    const getSearch = event.target.value;
    if (getSearch.length > 0) {
      const searchdata = userData.filter((item) =>
        item.employeeName.toLowerCase().includes(getSearch)
      );
      setUserdata(searchdata);
    } else {
      setUserdata(filterdata);
    }
    setQuery(getSearch);
  };
  return (
    <div>
    <p className="text-emp-directory">Employee Directory</p>
         <div className="EmpDirectory">
          
         <div className="search">
                           <i className="fa fa-search" style={{color:"white"}}/>
                           <input type="text " className="form-control" placeholder="Search Employee"
                           value={query}
                           onChange={(e) => handlesearch(e)}
                           />
                         </div>


         <div >

  <Slider dots={true}>
    {emp.map(employee => (
      <div key={employee.employeeId}>
      <img className="empdirectory" src={employee.imageSrc} alt={employee.employeeName} />
        <p style={{color:"white"}}>Name: {employee.employeeName}</p>
        <p style={{color:"white"}}>Designation: {employee.designation}</p>
        <p style={{color:"white"}}> Deparment: {employee.department}</p>
        <p style={{color:"white"}}>Mobile No: {employee.mobile}</p>
        
      </div>
    ))}
  </Slider>
</div>        
         </div>

    </div>
  )
}

export default EmpDirectory