// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Container, Row, Col, Card } from "react-bootstrap";
// // import Navbar from '../Navbar'
// // import Sidebar from '../Sidebar'
// // import defaultDocImage from '../Images/images (1).png';

// // const Documents = () => {

// //   const [documents, setDocuments] = useState([]);

// //   useEffect(() => {
// //     axios.get("https://localhost:7274/api/Document").then((response) => {
// //       setDocuments(response.data);
// //     });
// //   }, []);

// //   return (
// //     <>
// //     <Navbar />
// //     <Sidebar />



// //     <Container>
// //     <h2 className="text-center mt-3">Document</h2>
// //       <Row>
// //         {documents.map((document) => (
// //           <Col sm={2} key={document.docID}>
// //             <Card className="mb-4 border-top-0 shadow" >
// //             <Card.Img variant="top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={defaultDocImage} />
// //               <Card.Body>
// //                 <Card.Title>{document.docName}</Card.Title>
// //                 <a href={document.docSrc} target="_blank" rel="noreferrer">
// //                   View Document
// //                 </a>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>


// //     </>
// //   )
// // }

// // export default Documents

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Navbar from '../Navbar'
// import Sidebar from '../Sidebar'


// import "./DocumentsStyle.css";

// const Documents = () => {

//   const [documents, setDocuments] = useState([]);
//   const [recordForEdit, setRecordForEdit] = useState(null);
  


//   useEffect(() => {
//     axios.get("https://localhost:7274/api/Document").then((response) => {
//       setDocuments(response.data);
//     });
//   }, []);

//   const showRecordDetails = data => {
//     setRecordForEdit(data)
// }
//   const downloadFileAtURL=(url)=>{
//     fetch(url).then(response=>response.blob()).then(blob=>{
//       const blobURL= window.URL.createObjectURL(new Blob([blob]))
//       const fileName=url.split('/').pop();
//       const aTag=document.createElement('a');
//        aTag.href=blobURL;
//       aTag.setAttribute('download',fileName)
//       document.body.appendChild(aTag);
//       aTag.saveAs(blob, 'filename');
//       aTag.click();
//      aTag.remove();
//     });

// };




 
 
  
//    const imageCard = data => (
//       <div className="col-md-8">
//       <div className='col-sm-6 offset-sm-3'>
        
//       <table  className="tbl1"class="text-center " > 

//                                          <tbody >
//                                          <tr>
//                                           <td >
                                         
   
//                                               <img src="/img/images (1).png" alt=" "></img>
                
//                                          </td>
                                        
//                                           <td  class="text-center" >
//                                               <div  class="table" onClick={() => { showRecordDetails(data) }}>
//                                               </div>
//                                          </td>
                                              
//                                          <td class="text-center">
//                                               <span><a> {data.docName}</a> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
//                                               &emsp;&emsp;</td>
//                                               <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                                              
//                                               <td class="text-center">
                                  
//                                   <a href={data.docSrc} target="_blank" class="table-link"><i>Open</i></a>
//                                  </td>
//                                  {/*<td>
                                          
//                                         <a href={data.docSrc}class="table-link" onClick={e => downloadFileAtURL(e, parseInt(data.docID))}>
//                                       <i >  Download</i>
//                                          </a>
//    </td>*/}

//                                         </tr>
     
//                                   </tbody></table>
                               
                          
//             </div>
//             </div>

 
                                
                          
//   )
           

//   return (
//     <>
//     <Navbar />
//     <Sidebar />



   

  
//       {/** <b>Search the Document:
// 		<input id="gfg" type="text" placeholder="Search here"></input>
// 		</b>
// 		<br/>
// 		<br></br>*/}
		 	
//        <Container>

// <Row>
// <div class="cont" align="center" >
//     <div className="App" > 
    
//     <div class="container1"align="center">
//     <div class="row">
//       <div class="col-lg-12">
//         <div class="main-box clearfix">
//           <div class="table-responsive">
//           <div class="container1">
            
           
//             <table class="table user-list "align="center"  >
            
                            
//                            {documents.map((e, i) =>(
//                                 <tr key={i}>
//                                     {imageCard(documents[i])} 
                                  
                               
                
//                                </tr>
//                             ))
                           
//                         }
                   
//                 </table>
              
             
              
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>

//     </div>

       
//       </Row>
//     </Container>


//     </>
//   )
// }

// export default Documents





import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
//import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import "./DocumentsStyle.css";
import { padding } from "@mui/system";

const Documents = () => {

  
  const [recordForEdit, setRecordForEdit] = useState(null);
  
  const [documents, setDocuments] = useState([]);
  const [query, setQuery] = useState('');
  const [filterdata, setFilterdata]= useState([]);

//   useEffect(() => {
//     axios.get("https://localhost:7274/api/Document").then((response) => {
//       setDocuments(response.data);
//     });
//   }, []);

   const showRecordDetails = data => {
   setRecordForEdit(data)
}
//   const downloadFileAtURL=(url)=>{
//     fetch(url).then(response=>response.blob()).then(blob=>{
//       const blobURL= window.URL.createObjectURL(new Blob([blob]))
//       const fileName=url.split('/').pop();
//       const aTag=document.createElement('a');
//        aTag.href=blobURL;
//       aTag.setAttribute('download',fileName)
//       document.body.appendChild(aTag);
//       aTag.saveAs(blob, 'filename');
//       aTag.click();
//      aTag.remove();
//     });

// };




useEffect( ()=>{
  const getUserdata= async()=>{
    const reqData= await fetch("https://localhost:7274/api/Document");
    const resData= await reqData.json();
    //console.log(resData);
    setDocuments(resData);
    setFilterdata(resData);

  } 
getUserdata();
},[]);
const handlesearch=(event)=>{
  const getSearch= event.target.value; 
  if(getSearch.length > 0)
  {     
   const searchdata= documents.filter( (item)=> item.docName.toLowerCase().includes(getSearch));
   setDocuments(searchdata);
  } else {
    setDocuments(filterdata);
  }
  setQuery(getSearch);
}

 
  
   const imageCard = data => (
     
   
        
      <table  width="100%" className="tbl1"class="text-center "> 
     

                                         <tbody >
                                         <tr>
                                          <td >
                                         
   
                                              <img src="http://localhost:3000/im.png" alt=" "></img>
                
                                         </td>
                                        
                                          <td >
                                          
                                              <div  class="table" onClick={() => { showRecordDetails(data) }}>
                                              </div>
                                         </td>
                                              
                                         <td  style={{textAlign:"left"}} width="70%">
                                              <span><a> {data.docName}</a> </span></td>
                                              {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td> */}
                                              {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td> */}
                                              
                                              <td >
                                  
                                  <a href={data.docSrc} target="_blank" class="table-link"><i>Open</i></a>
                                 </td>
                                 {/*<td>
                                          
                                        <a href={data.docSrc}class="table-link" onClick={e => downloadFileAtURL(e, parseInt(data.docID))}>
                                      <i >  Download</i>
                                         </a>
   </td>*/}

                                        </tr>
     
                                  </tbody></table>
                               
                          
      
           

 
                                
                          
  )
           

  return (
    <>
    <Navbar />
    <Sidebar />



   

  
      
	<h2 className="empsocial" >Documents </h2> 	
       <Container style={{width:"950px", align:"center" }}>

<Row>


    <div className="App" > 
    <div className='row text-left' >
        <div > 
            <div className='heading'>
                 
                        
                <div className=''> 
                <div className='search' style={{padding:"1px 32px 0 0",margin:"-30px"}}>
                

                <input className="col-md-3 " type="text" name='name'  style={{border:"0.1px solid #030a5eb7" ,fontSize:"20px", fontWeight:"600" ,color:"#030a5eb7",marginLeft:"700px",marginTop:"-126px"}} value={query}   onChange={(e)=>handlesearch(e)} placeholder='Search Document' align='right' /> 
           </div>  <br></br>        
                  </div>                
            </div>

          </div>
    <div class="container1"align="center"style={{width:"950px"}} >   
   
    <div   class="table-responsive" style={{width:"950px", align:"center", padding:"0 32px 0 0" }}>
   
         
       
        
            <table class="table user-list "  style={{width:"100%"}}>
            
               {documents.map((e, i) =>(
                              <tr text-align ="left" key={i}>
                                    {imageCard(documents[i])} 
                                  
                               
                              
                               </tr>
                            ))
                           
                        }
               
                </table>
              
             
                
          </div>
          </div>
          </div>
    
         </div> 
       
 
       
      </Row>
    </Container>


    </>
  )
}

export default Documents