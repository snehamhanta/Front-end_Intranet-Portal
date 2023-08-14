// //import React from 'react'
// import Navbar from '../Navbar'
// import Sidebar from '../Sidebar'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import './styles.css';
// import { Card, Col, Container, Row } from 'react-bootstrap';

// // import { Container } from "react-bootstrap";
// import { BsFillEnvelopeFill } from "react-icons/bs";
// import "../Pages/FetchAPI.css";


// function People()
// {
//   const [userData, setUserdata]= useState([]);
//   const [filterdata, setFilterdata]= useState([]);
//   const [query, setQuery] = useState('');
   
//   useEffect( ()=>{
//     const getUserdata= async()=>{
//       const reqData= await fetch("https://localhost:7274/api/Employee");
//       const resData= await reqData.json();
//       //console.log(resData);
//       setUserdata(resData);
//       setFilterdata(resData);

//     } 
// getUserdata();
//   },[]);

//   const handlesearch=(event)=>{
//     const getSearch= event.target.value; 
//     if(getSearch.length > 0)
//     {     
//      const searchdata= userData.filter( (item)=> item.employeeName.toLowerCase().includes(getSearch));
//      setUserdata(searchdata);
//     } else {
//       setUserdata(filterdata);
//     }
//     setQuery(getSearch);
//   }


//   return(
//     <>
    
//     <Navbar />
//     <Sidebar />

//         <React.Fragment>              
//          <Container>
//           <div className="container-fluid mt-5"  style={{width:"90%"}}>
//     {/*  */}
//             <div className='row text-left' >
//         <div > 
//             <div className='heading'>
//               <h3 className='ss' style={{fontSize:"28px", fontWeight:"700"}}>Employee Directory</h3>      
                        
//                 <div className=''> 
//                 <div className='search'>
    
//                 <input className="col-md-3 " type="text" name='name' style={{border:"0.1px solid #030a5eb7" ,fontSize:"20px", fontWeight:"600" ,color:"#030a5eb7"}} value={query}   onChange={(e)=>handlesearch(e)} placeholder='Search Employee' />
//                </div>          
//                   </div>                
//             </div>

//           </div>
                        
//                 {
//                   userData.map( (getUser, index)=>(
//                     <div className="col-10 col-md-4 mt-4"  key={getUser.employeesID}>
//                     <div className=''>
//                         {/* card p-2 */}
//                     <div className="card" style={{borderRadius:"10px" }}>
//                         <div className='d-flex align-items-center'>
//                         <div className='image'><img src={getUser.imageSrc  } alt=""   width="100"  style={{padding:"15px", marginLeft:"15px", borderRadius:"20%" }}/> </div>
//                         <div className='ml-3 w-90' style={{marginLeft:"", fontSize:"15px"}}>
//                             <h4 className=" textLeft" style={{color:"#0018A8",fontSize:"18px" , textTransform:"capitalize" }}>{getUser.employeeName}</h4>
//                             <div className='textLeft' style={{fontSize:"12px", color:"#030589b7"}}>< BsFillEnvelopeFill/>{getUser.imagName}</div> 
//                           <i BsFillEnvelopeFill/>
//                             {/* <BsFillEnvelopeFill>{getUser.login}</> */}
//                             <div className='content' style={{fontSize:"15px"}}>                                        
//                                     <h5 className=''>Designation: {getUser.designation}</h5>   
//                                     <h5 className=''>Department:  {getUser.department}</h5>   
//                                     <h5 className=''>Branch: {getUser.type}</h5>   
//                             </div>
//                         </div>
//                     </div>

//                        <button className="viewMore"  >View More</button>
//                     </div>
                    
//                 </div>
//                 </div>
//                    )) }

//                    </div>  
//                    </div>
//       </Container>

//         </React.Fragment>
//         </>
//     );
// }

// export default People



//import React from 'react'
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
// import "./People.css";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import './styles.css';
// import { Card, Col, Container, Row } from "react-bootstrap";

// // import { Container } from "react-bootstrap";
// import { BsFillEnvelopeFill } from "react-icons/bs";
// // import "../Pages/FetchAPI.css";
// // import PeopleModal from "./PeopleModal";

// function People() {
//   const [userData, setUserdata] = useState([]);
//   const [filterdata, setFilterdata] = useState([]);
//   const [query, setQuery] = useState("");

//   // useEffect(() => {
//   //   const getUserdata = async () => {
//   //     const reqData = await fetch("https://api.github.com/users");
//   //     const resData = await reqData.json();
//   //     //console.log(resData);
//   //     setUserdata(resData);
//   //     setFilterdata(resData);
//   //   };
//   //   getUserdata();
//   // }, []);

//   useEffect( ()=>{
//       axios.get("https://localhost:7274/api/Employee")
//       .then(Response=>{
//         setUserdata(Response.data);
//           })
//           .catch(error =>{
//             console.log(error);
//           });
//         }, []);

//   // useEffect (()=>{
//   //   axios.get('https://localhost:7274/api/Employee')
//   //   .then(Response=>{
//   //     setEmployee(Response.data);
//   //   })
//   //   .catch(error =>{
//   //     console.log(error);
//   //   });
//   // }, []);
// // code for filtering data
//   const handlesearch = (event) => {
//     const getSearch = event.target.value;
//     if (getSearch.length > 0) {
//       const searchdata = userData.filter((item) =>
//         item.login.toLowerCase().includes(getSearch)
//       );
//       setUserdata(searchdata);
//     } else {
//       setUserdata(filterdata);
//     }
//     setQuery(getSearch);
//   };

//   // code for model it means popup
//   const [model, setModel] = useState(false);
//   const [tempdata, setTempdata] = useState([]);

//   const getData = (avatar_url, login, url, type) => {
//     let tempData = [avatar_url, login, url, type];
//     setTempdata((item) => [1, ...tempData]);

//     return setModel(true);
//   };

//   const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//   return (

//     <>
//     <Navbar />
//       <Sidebar />
//       {/* <div className="container"/> */}
//       {/* <div className="row row-cols-1 row-cols-md-3 g-2 py-5" style={{width:"85%"}}> */}
                  
//       <div className="container mt-0 mb-0 d-flex justify-content-center pl-5">
//              <div className="row row-cols-md-3 " style={{width:"85%"}}>                        
//                          <div className="heading"><h2 className="">Employee Directory</h2></div>
//                          <div className="col-md-4">
//                          <div className="search">
//                            <i className="fa fa-search"/>
//                            <input type="text " className="form-control" placeholder="Search Employee"
//                            value={query}
//                            onChange={(e) => handlesearch(e)}
//                            />
//                          </div>
//                          </div>
//               </div>
//             </div>
     

      
//        <div className="container mt-0 d-flex justify-content-center pl-5">
             

//         <div className="row row-cols-1 row-cols-md-3 g-2 py-5" style={{width:"85%"}}>
              

//         {userData.map((getUser, index) => (
//             <div className="col mt-0"   key={getUser.id}>
//                 <div className="card">
                         
//                             <div className="d-flex">
//                               <img src={getUser.imageSrc} className="rounded" width="80" alt="..."/>
//                                 <div className="cardbody ml-4">
//                                     <h6 className="cardtitle"> {getUser.login}</h6>
//                                     <h6 className="cardtext" style={{fontSize:"10px"}}><BsFillEnvelopeFill style={{float:"left", paddingRight:"2px", fontSize:"14px"}}/>{getUser.url}</h6>
//                                 </div>
//                             </div>
                        
                            
                    
                                
//                                 <div className="slider"
//                                  onClick={() =>
//                                   getData(
//                                     getUser.avatar_url,
//                                     getUser.login,
//                                     getUser.url,
//                                     getUser.type
//                                   )
//                                 }>
//                                   <div className="contents">
//                                               <h5 className="">Designation: {getUser.designation}</h5>
//                                               <h5 className="">Department: {getUser.department}</h5>
//                                               <h5 className="">Branch: {getUser.type}</h5>
//                                   </div>
//                                 </div>
//                                 <div className="justify-content-center">
//                                     <button className="btnn" onClick={() =>
//                                       getData(
//                                         getUser.avatar_url,
//                                         getUser.login,
//                                         getUser.url,
//                                         getUser.type
//                                         )
//                                       }>View More</button>
//                                 </div>
//                 </div>
//             </div>
//         ))}
          
//           </div>
//           </div>  
//           {/* {model === true ? (
//         <PeopleModal
//           avatar_url={tempdata[1]}
//           login={tempdata[2]}
//           url={tempdata[3]}
//           type={tempdata[4]}
//           hide={() => setModel(false)}
//         />
//       ) : (
//         ""
//       )}   */}
//     </>
//   );
// }

// export default People;




//import React from 'react'
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./People.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import './styles.css';
import { Card, Col, Container, Row } from "react-bootstrap";

// import { Container } from "react-bootstrap";
import { BsFillEnvelopeFill } from "react-icons/bs";
// import "../Pages/FetchAPI.css";
import PeopleModal from "./PeopleModal";

function People() {
  const [userData, setUserdata] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getUserdata = async () => {
      const reqData = await fetch("https://localhost:7274/api/Employee");
      const resData = await reqData.json();
      //console.log(resData);
      setUserdata(resData);
      setFilterdata(resData);
    };
    getUserdata();
  }, []);

  // useEffect( ()=>{
  //     axios.get("https://api.github.com/users")
  //     .then(Response=>{
  //       setUserdata(Response.data);
  //         })
  //         .catch(error =>{
  //           console.log(error);
  //         });
  //       }, []);

  // useEffect (()=>{
  //   axios.get('https://localhost:7274/api/Employee')
  //   .then(Response=>{
  //     setEmployee(Response.data);
  //   })
  //   .catch(error =>{
  //     console.log(error);
  //   });
  // }, []);
// code for filtering data
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

  // code for model it means popup
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (avatar_url, employeeName, department, designation,dob,mobile) => {
    let tempData = [avatar_url, employeeName, department, designation,dob,mobile];
    setTempdata((item) => [1, ...tempData]);

    return setModel(true);
  };

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (

    <>
    <Navbar />
      <Sidebar />
      {/* <div className="container"/> */}
      {/* <div className="row row-cols-1 row-cols-md-3 g-2 py-5" style={{width:"85%"}}> */}
                  
      <div className="container mt-2 mb-0 d-flex justify-content-center pl-5" >
             <div className="row row-cols-md-3 " style={{width:"92%"}}>                        
             <h1 className='Launch mt-0 h4 text-dark' style={{marginLeft:"0px", fontWeight:"600"}} ><span style={{padding:"1px",borderBottom:"5px solid red", marginTop:"0px"}} >Employee Directory</span></h1>
                         <div className="col-md-4" style={{marginLeft:"350px",marginTop:"0px"}}>
                         <div className="search"  style={{marginTop:"-30px",marginLeft:"60px",width:"300px",height:"70px"}}>
                           <i className="fa fa-search" style={{marginLeft:"60px",marginTop:"-10px"}}/>
                           <input type="text " className="form-control" placeholder="Search Employee"
                           value={query}
                           onChange={(e) => handlesearch(e)}
                           />
                         </div>
                         </div>
              </div>
            </div>
     

      
       <div className="container mt-0 d-flex justify-content-center pl-5" >
             

        <div className="row row-cols-1 row-cols-md-3 g-2 py-5" style={{width:"88%",marginTop:"-50px",marginLeft:"-55px"}}>
              

        {userData.map((getUser, index) => (
            <div className="col mt-0"   key={getUser.id}>
                <div className="card">
                         
                            <div className="d-flex">
                              <img src={getUser.imageSrc} className="rounded" width="80" alt="..."/>
                                <div className="cardbody ml-4">
                                    <h6 className="cardtitle"> {getUser.employeeName}</h6>
                                    <h6 className="cardtext" style={{fontSize:"10px"}}><BsFillEnvelopeFill style={{float:"left", paddingRight:"2px", fontSize:"14px"}}/>{getUser.department}</h6>
                                </div>
                            </div>
                        
                            
                    
                                
                                <div className="slider"
                                 onClick={() =>
                                  getData(
                                    getUser.imageSrc,
                                    getUser.employeeName,
                                    getUser.department,
                                    getUser.designation,
                                    getUser.dob,
                                    getUser.mobile
                                  )
                                }>
                                  <div className="contents">
                                              <h5 className="">Designation: {getUser.designation}</h5>
                                              <h5 className="">Department: {getUser.department}</h5>
                                              <h5 className="">Designation: {getUser.designation}</h5>
                                  </div>
                                </div>
                                <div className="justify-content-center">
                                    <button className="btnn" onClick={() =>
                                      getData(
                                        getUser.imageSrc,
                                        getUser.employeeName,
                                        getUser.department,
                                        getUser.designation,
                                        getUser.dob,
                                        getUser.mobile
                                        )
                                      }>View More</button>
                                </div>
                </div>
            </div>
        ))}
          
          </div>
          </div>  
          {model === true ? (
        <PeopleModal
          avatar_url={tempdata[1]}
          employeeName={tempdata[2]}
          department={tempdata[3]}
          designation={tempdata[4]}
          dob={tempdata[5]}
          mobile={tempdata[6]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}  
    </>
  );
}

export default People;
