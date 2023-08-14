// // //import {useState, useEffect} from 'react'
// // import { NavLink } from 'react-router-dom'
// // import "./EmpDirectoryStyle.css";
// // import axios from 'axios';
// // import { useEffect, useState } from 'react';
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';

// // function EmpDirectory() {
// //   const[emp, setEmp] = useState([]);
// //   const [userData, setUserdata] = useState([]);
// //   const [filterdata, setFilterdata] = useState([]);
// //   const [query, setQuery] = useState("");
// //   useEffect(() =>{
// //     axios.get('https://localhost:7274/api/Employee')
// //     .then(Response =>{
// //       setEmp(Response.data);
// //     }).catch(error =>{
// //       console.log(error);
// //     });
  
// //    },[] );

// //    const handlesearch = (event) => {
// //     const getSearch = event.target.value;
// //     if (getSearch.length > 0) {
// //       const searchdata = userData.filter((item) =>
// //         item.employeeName.toLowerCase().includes(getSearch)
// //       );
// //       setUserdata(searchdata);
// //     } else {
// //       setUserdata(filterdata);
// //     }
// //     setQuery(getSearch);
// //   };
// //   return (
// //     <div>
// //     <p className="text-emp-directory">Employee Directory</p>
// //          <div className="EmpDirectory">
          
// //          {/* <div className="search">
// //                            <i className="fa fa-search" style={{color:"white"}}/>
// //                            <input type="text " className="form-control" placeholder="Search Employee"
// //                            value={query}
// //                            onChange={(e) => handlesearch(e)}
// //                            />
// //                          </div> */}


// //          <div >

// //   <Slider dots={true}>
// //     {emp.map(employee => (
// //       <div key={employee.employeeId}>
// //       <img className="empdirectory" src={employee.imageSrc} alt={employee.employeeName} />
// //         <p style={{color:"black"}}>Name: {employee.employeeName}</p>
// //         <p style={{color:"black"}}>Designation: {employee.designation}</p>
// //         <p style={{color:"black"}}> Deparment: {employee.department}</p>
// //         <p style={{color:"black"}}>Mobile No: {employee.mobile}</p>
        
// //       </div>
// //     ))}
// //   </Slider>
// // </div>        
// //          </div>

// //     </div>
// //   )
// // }

// // export default EmpDirectory

// //import {useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
// import "./EmpDirectoryStyle.css";
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { MarginTwoTone } from '@mui/icons-material';
// import { GrFormNext } from "react-icons/gr";
// import { GrFormPrevious } from "react-icons/gr";
// // C:\Users\LENOVO\Desktop\DESKTOPFILES\Internship\INTRA\Intranet-portal\src\Components\Employee_Panel\Pages\People.js
// // Intranet-portal\src\Components\Employee_Panel\Pages\People.js
// import People from "../../Pages/People"

// import { BsFillBrightnessAltHighFill } from "react-icons/bs";

// // BsFillBrightnessAltHighFill

// function EmpDirectory() {

//   const navigate = useNavigate();

//   // Define your custom arrow components
//   const CustomPrevArrowP = (props) => (
//     <div className="custom-prev-arrowP"  onClick={props.onClick} ><GrFormPrevious/></div>
//   );
  
//   const CustomNextArrowP = (props) => (
//     <div className="custom-next-arrowP"  onClick={props.onClick} ><GrFormNext/></div>
//   );
  
//   // Use the custom arrow components in your slider
    
// const settings = {
//   // other settings for the slider...
//   prevArrow: <CustomPrevArrowP />,
//   nextArrow: <CustomNextArrowP />,
// };

//   const[emp, setEmp] = useState([]);
//   const [userData, setUserdata] = useState([]);
//   const [filterdata, setFilterdata] = useState([]);
//   const [query, setQuery] = useState("");

  
//   useEffect(() =>{
//     axios.get('https://localhost:7274/api/Employee')
//     .then(Response =>{
//       setEmp(Response.data);
//     }).catch(error =>{
//       console.log(error);
//     });
  
//    },[] );

//    const handlesearch = (event) => {
//     const getSearch = event.target.value;
//     if (getSearch.length > 0) {
//       const searchdata = userData.filter((item) =>
//         item.employeeName.toLowerCase().includes(getSearch)
//       );
//       setUserdata(searchdata);
//     } else {
//       setUserdata(filterdata);
//     }
//     setQuery(getSearch);
//   };


  
  
    
  
  
  
//   return (
   
//     <div>
//       {/* <h4></h4> */}
//     <h5 className="text-emp-directory" > <span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>Employee Directory</span></h5>
//          <div className="EmpDirectory shadow">
          
//          <div className="search">
//            <i className="fa fa-search" style={{color:"black", marginTop:"20px" }}/>
//                            <input type="text" style={{borderRadius:"50px"}} className="form-control" placeholder="Search Employee"
//                            value={query}
//                            onChange={(e) => handlesearch(e)}
//                            />
                            
                            

//                          </div>

                         


//          <div >

//     <Slider dots={false}  {...settings}>
//     {emp.map(employee => (
//       <div key={employee.employeeId}>
//       <img className="empdirectory rounded" src={employee.imageSrc} alt={employee.employeeName} />
//         <div>
//         <p className='empP' style={{color:"black"}}>Name:         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       {employee.employeeName}</p>
//         <p className='empP' style={{color:"black"}}>Designation:  &nbsp;   {employee.designation}</p>
//         <p className='empP' style={{color:"black"}}>Deparment:    &nbsp;&nbsp;&nbsp;  {employee.department}</p>
//         <p className='empP' style={{color:"black"}}>Mobile No.:   &nbsp;&nbsp;&nbsp;   {employee.mobile}</p>
        
//         </div>
//         <div>
//                 <button class="button-18" role="button"
//                 onClick={()=>navigate("/People")}
//                 >View All</button>
//         </div>

//       </div>
//     ))}
//   </Slider>
// </div>        
//          </div>

//     </div>
//   )
// }

// export default EmpDirectory



//import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./EmpDirectoryStyle.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import People from "../../Pages/People"
import { AiOutlineSearch } from 'react-icons/ai';

// BsFillBrightnessAltHighFill

function EmpDirectory() {

  const navigate = useNavigate();

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', fontSize: '24px', marginLeft:"40px", 
        // position: 'relative', // Set position to relative
        zIndex: 99,
        pointerEvents:"auto"
       }}
        onClick={onClick}
      >
      <div>

        <GrFormPrevious style={{ pointerEvents: 'auto' }} onClick={onClick} />
      </div>
      </div>
      

    );
  };

  // Define your custom arrow components
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', fontSize: '24px', marginRight:"40px", pointerEvents:"auto" }}
        onClick={onClick}
      >
        <GrFormNext />
      </div>
    );
  };
  
  // Use the custom arrow components in your slider
    
const settings = {
  // other settings for the slider...
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

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
      {/* <h4></h4> */}
    <h5 className="text-emp-directory" > <span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>Employee Directory</span></h5>
         <div className="EmpDirectory shadow">
          
         {/* <div className="search">
           <i className="fa fa-search" style={{color:"black", marginTop:"20px" }}/>
                           <input type="text" style={{borderRadius:"50px"}} className="form-control" placeholder="Search Employee"
                           value={query}
                           onChange={(e) => handlesearch(e)}
                           />
                            
                            

                         </div>
*/}
         <div > 

            <div className="search-barE">
              <AiOutlineSearch className="search-iconE" />
              <input type="text" className="search-inputE" placeholder="Search..." />
            </div>

    <Slider dots={false} fade={true}
    {...settings}>
    {emp.map(employee => (
      <div key={employee.employeeId} className='empblock'>
      <img className="empdirectory rounded" src={employee.imageSrc} alt={employee.employeeName} />
        <div>
        <p className='empP' style={{color:"black"}}>Name:         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       {employee.employeeName}</p>
        <p className='empP' style={{color:"black"}}>Designation:  &nbsp;   {employee.designation}</p>
        <p className='empP' style={{color:"black"}}>Deparment:    &nbsp;&nbsp;&nbsp;  {employee.department}</p>
        <p className='empP' style={{color:"black"}}>Mobile No.:   &nbsp;&nbsp;&nbsp;   {employee.mobile}</p>
        
        </div>
        <div>
                <button class="button-18" role="button"
                onClick={()=>navigate("/People")}
                >View All</button>
        </div>

      </div>
    ))}
  </Slider>
</div>        
         </div>

    </div>
  )
}

export default EmpDirectory