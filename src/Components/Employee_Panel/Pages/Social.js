// // // //import React from 'react'
// // // import Navbar from '../Navbar'
// // // import Sidebar from '../Sidebar'
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { Container, Row, Col, Image, Modal  } from 'react-bootstrap';

// // // const Social = () => {
// // //   const [images, setImages] = useState([]);
// // //   const [selectedImage, setSelectedImage] = useState(null);
// // //   const [showModal, setShowModal] = useState(false);

// // //   useEffect(() => {
// // //     axios.get('https://localhost:7274/api/Images')
// // //       .then(response => setImages(response.data))
// // //       .catch(error => console.log(error));
// // //   }, []);

// // //   const handleImageClick = (imagesrc) => {
// // //     setSelectedImage(imagesrc);
// // //     setShowModal(true);
// // //   };

// // //   const handleCloseModal = () => {
// // //     setSelectedImage(null);
// // //     setShowModal(false);
// // //   };
// // //   return (
// // //     <>
// // //     <Navbar />
// // //     <Sidebar />


// // //     <Container style={{ marginTop:'20px'}}>
// // //     <h2 className="text-center mt-3" >Gallery</h2>
// // //       <Row>
// // //         {images.map((image) => (
// // //           <Col key={image.id} xs={12} sm={6} md={4} lg={3}>
// // //             <Image 
// // //               src={image.imagesrc}
// // //               alt={image.alt}
// // //               style ={{cursor:'pointer', width: '100%', height: '200px', objectFit: 'cover' }}
// // //               fluid
// // //               onClick={() => handleImageClick(image.imagesrc)}
// // //               className='rounded mb-4 border-top-0 shadows'
// // //             />
// // //           </Col>
// // //         ))}
// // //       </Row>

// // //       <Modal show={showModal} onHide={handleCloseModal} centered>
// // //         <Modal.Body style={{display: 'flex'}}>
// // //           <Image style ={{ width: '100%', height: '100%', objectFit: 'cover' }} src={selectedImage} fluid />
// // //         </Modal.Body>
// // //       </Modal>
// // //     </Container>
// // //     </>
// // //   )
// // // }

// // // export default Social





// // //import React from 'react'
// // import Navbar from '../Navbar'
// // import Sidebar from '../Sidebar'
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Container, Row, Col, Image, Modal  } from 'react-bootstrap';
// // import ImageDisplay from './ImageDisplay';
// // // import './ImageDisplay.css';
// // // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // // import { Carousel } from 'react-responsive-carousel'; 
// // // import "react-responsive-carousel/lib/styles/carousel.min.css"; 

// // // import Carousel from "react-multi-carousel";
// // // import "react-multi-carousel/lib/styles.css";
// // import './Social.css';



// // const Social = () => {
// //   const [images, setImages] = useState([]);
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [showModal, setShowModal] = useState(false);
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const [imagesToShow, setImagesToShow] = useState(4);

 


// //   useEffect(() => {
// //     axios.get('https://localhost:7274/api/Images')
// //       .then(response => setImages(response.data))
// //       .catch(error => console.log(error));
// //   }, []);
// //   const handleNextClick = () => {
// //     if (currentImageIndex < images.length - imagesToShow) {
// //       setCurrentImageIndex(currentImageIndex + 1);
// //     }
// //   };

// //   const handlePreviousClick = () => {
// //     if (currentImageIndex > 0) {
// //       setCurrentImageIndex(currentImageIndex - 1);
// //     }
// //   };
// //   const handleImageClick = (imagesrc) => {
// //     setSelectedImage(imagesrc);
// //     setShowModal(true);

// //   };

// //   const handleCloseModal = () => {
// //     setSelectedImage(null);
// //     setShowModal(false);
// //   };
 
    

 
  
// //   return (
// //     <>
// //     <Navbar />
// //     <Sidebar />
// //     <h2 className="empsocial" > Photo Gallary </h2>
// //     <p className='events-text'>Launching Events</p>
// //     {/* <div className='form'>
// //       </div> */}
      
// //     <div className='SelectImage'>
    
// //     {/* <img class="half" src=""/> */}
    
// //       {selectedImage && <ImageDisplay imageSrc={selectedImage} />}
// //       {/* <div class="articlename"> </div> */}
// //       </div>
     
     
// //       {/* <Container>
     
// //       <Row> */}
   
// //       <div >
// //       {/* <div className='form'>
// //         </div> */}

// //         </div>
// //         {/* </Row>
// //         </Container> */}
// //   <div className='image-border'>
// //  {/* <div className='mb-8 border-top-1 shadow'style={{ width: '32rem' ,marginLeft:'397px'}}> */}
// //    <div className='image-block'>
// //    <span className='previous-span'>
// //    <button onClick={handlePreviousClick} className='Previous-button'>&lt;</button>
// //    </span>
// //     <div className='image-gallery' >
    
// //     {/* <Slider dots={true} > */}
// //       {/* <Row> */}
// //       {/* changes */}
 
// //       {/* <Slider> */}
    
// //       {/* <Slider {...settings}> */}

// //       {/* <Carousel > */}
// //       {/* <Carousel responsive={responsive}  > */}
// //       {/* <Carousel showThumbs={false} showIndicators={false} showStatus={false} stopOnHover={false}> */}
     
// //         {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
// //           <div key={image.id} className='img'>
// //             <Image className='center'
// //               src={image.imagesrc}
// //               alt={image.alt}
// //               style ={{cursor:'pointer', width: '100px', height: '100px' }}
// //               // fluid
// //               onClick={() => handleImageClick(image.imagesrc)}
// //               // className='rounded mb-4 border-top-0 shadows'
// //             />
// //            </div>
        
// //         ))}
// //         {/* </Slider> */}
       
       
       
// //           {/* {renderImages()} */}
// //         {/* </Carousel> */}

// //   {/* </div> */}
        
      
// //       {/* </Row> */}
        
// // {/* </Slider> */}
// //       {/* </Carousel> */}
// //       </div>
// //       {/* </div> */}
// //       <span className='next-span'>
// //       <button onClick={handleNextClick} className='next-button'>&gt;</button>
// //       </span>
// //       </div>
// //       </div>
     
// //       {/* <Modal show={showModal} onHide={handleCloseModal} centered>
// //         <Modal.Body style={{display: 'flex'}}>
// //         <Image style ={{ width: '100%', height: '100%', objectFit: 'cover' }} src={selectedImage} fluid />
// //         </Modal.Body>
// //       </Modal>  */}
  
  
    

   
   
// //     </>
// //   )
// // }


// // export default Social 




// // //import React from 'react'
// // import Navbar from '../Navbar'
// // import Sidebar from '../Sidebar'
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Container, Row, Col, Image, Modal  } from 'react-bootstrap';

// // const Social = () => {
// //   const [images, setImages] = useState([]);
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [showModal, setShowModal] = useState(false);

// //   useEffect(() => {
// //     axios.get('https://localhost:7274/api/Images')
// //       .then(response => setImages(response.data))
// //       .catch(error => console.log(error));
// //   }, []);

// //   const handleImageClick = (imagesrc) => {
// //     setSelectedImage(imagesrc);
// //     setShowModal(true);
// //   };

// //   const handleCloseModal = () => {
// //     setSelectedImage(null);
// //     setShowModal(false);
// //   };
// //   return (
// //     <>
// //     <Navbar />
// //     <Sidebar />


// //     <Container style={{ marginTop:'20px'}}>
// //     <h2 className="text-center mt-3" >Gallery</h2>
// //       <Row>
// //         {images.map((image) => (
// //           <Col key={image.id} xs={12} sm={6} md={4} lg={3}>
// //             <Image 
// //               src={image.imagesrc}
// //               alt={image.alt}
// //               style ={{cursor:'pointer', width: '100%', height: '200px', objectFit: 'cover' }}
// //               fluid
// //               onClick={() => handleImageClick(image.imagesrc)}
// //               className='rounded mb-4 border-top-0 shadows'
// //             />
// //           </Col>
// //         ))}
// //       </Row>

// //       <Modal show={showModal} onHide={handleCloseModal} centered>
// //         <Modal.Body style={{display: 'flex'}}>
// //           <Image style ={{ width: '100%', height: '100%', objectFit: 'cover' }} src={selectedImage} fluid />
// //         </Modal.Body>
// //       </Modal>
// //     </Container>
// //     </>
// //   )
// // }

// // export default Social

// //import React from 'react'
// import Navbar from '../Navbar'
// import Sidebar from '../Sidebar'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Image, Modal  } from 'react-bootstrap';
// import './Social.css';
// // import Data from './Data.json';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// // import images from './images.png';
// // import SocialModal from './SocialModal';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ImageDisplay from './ImageDisplay';

// // import { AiFillCaretRight } from "react-icons/ai";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;

//   return (
//     <div
//       className={className}
//       style={{ ...style, background: "#091351",paddingTop:"10px",paddingBottom:"10px",height:"40px",borderTopRightRadius: "20px", borderBottomRightRadius: "20px", marginRight:"5px" }}
          
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, background: "#091351",color:"white",paddingTop:"10px",paddingBottom:"10px",height:"40px",borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", marginLeft:"5px" }}
//       onClick={onClick}
//     />
//   );
// }


 


// export default function ImgGall() {
//   // code for data.json file
//   // console.log(Data);

//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [imagesToShow, setImagesToShow] = useState(4);
  
//   useEffect(() => {
//     axios.get('https://localhost:7274/api/Images')
//       .then(response => setImages(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   const settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 2,
//       initialSlide: 0,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />,
//       responsive: [
//         {
//           // breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 2,
//             infinite: true,
//             // dots: true
//           }
//         },
//       ]
//     };

//     const handleImageClick = (imagesrc) => {
//       setSelectedImage(imagesrc);
//       setShowModal(true);
  
//     };
//     // const handleCloseModal = () => {
//     //   setSelectedImage(null);
//     //   setShowModal(false);
//     // };
    
// return (
//   <div>
//       <Navbar />
//       <Sidebar />
//       <div className='container mt-0 mb-0' width="" style={{textAlign:"left"}}>
//       <h1 className='Launch mt-5 h4 text-dark' style={{marginLeft:"200px", fontWeight:"600"}} ><span style={{padding:"1px",borderBottom:"5px solid red", marginTop:"0px"}} >Photo Gallery</span></h1>
//       <h2 className='mt-0 h5 pt-2' style={{marginLeft:"200px", padding:"3px"}}>Launching Event</h2>
      
//         <div className="containers mt-0">
//           {/* box1 code mothi image */}
//           <div className="box p-0" id="box1">
//             {/* <img src={images} height="400px" width="500px" alt=""/> */}
            
            
//                 {selectedImage && <ImageDisplay imageSrc={selectedImage} />}

//           </div>
//         {/* box 2 */}
//             <div className="box" id="box2" style={{}}>
             
//                    <div className='row '>
//                       <Slider {...settings}
//                       >
//                           {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
//                                       <div className='col-md-12' key={image.id} >
//                                           <div className='card m-0 p-0'>
//                                             <img src={image.imagesrc}  width="100%" height="100px" alt={image.alt}
//                                             onClick={() => handleImageClick(image.imagesrc)}                                            
//                                             />
//                                             <h1>{}</h1>

//                                           </div>
//                                       </div>
//                           ))}
//                       </Slider>
//                   </div>
              
//             </div>
//             {/* box 3 */}
//             <div class="box" id="box3" >  
//             <div class="" id="containerss" >  
            
//             {/* <SocialModal /> */}
            
//             <div className="" id="content" style={{}}>
             
//              <div className='row' id='rows'>
//                             <div className='heading'>
//                               <h5 className='h5 text-dark text-left ml-3 text-capitalize'>Photo albums</h5>
//                             </div>
//                             <h6 className='h6 text-left ml-3'>Independance Day</h6>
//                  <Slider {...settings}
//                     arrows={true}        
//                     // autoplay={true}          
//                  >
//                      {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
//                                  <div className='col-md-12' key={image.id} >
//                                      <div className='car' width="90px" height="50px">
//                                        <img src={image.imagesrc} width="80px" height="80px" alt={image.alt} className='p-1'
//                                        onClick={() => handleImageClick(image.imagesrc)}                                            
//                                        />
                               

//                                      </div>
//                                  </div>
//                      ))}
//                  </Slider>
//              </div>

//              <div className='row ' id='rows'>
//                             <h5 className='h6 text-left ml-3 text-capitalize'>Photo albums</h5>
//                             <h6 className='h6 text-left ml-3'>Independance Day</h6>
//                  <Slider {...settings}
//                     arrows={true}        
//                     // autoplay={true}          
//                  >
//                      {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
//                                  <div className='col-md-12' key={image.id} >
//                                      <div className='car' width="90px" height="50px">
//                                        <img src={image.imagesrc} width="80px" height="80px" alt={image.alt} className='p-1'
//                                        onClick={() => handleImageClick(image.imagesrc)}                                            
//                                        />
                               

//                                      </div>
//                                  </div>
//                      ))}
//                  </Slider>
//              </div>

//              <div className='row ' id='rows'>
//                             <h5 className='h6 text-left ml-3 text-capitalize'>Photo albums</h5>
//                             <h6 className='h6 text-left ml-3'>Independance Day</h6>
//                  <Slider {...settings}
//                     arrows={true}        
//                     // autoplay={true}          
//                  >
//                      {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
//                                  <div className='col-md-12' key={image.id} >
//                                      <div className='car' width="90px" height="50px">
//                                        <img src={image.imagesrc} width="80px" height="80px" alt={image.alt} className='p-1'
//                                        onClick={() => handleImageClick(image.imagesrc)}                                            
//                                        />
                               

//                                      </div>
//                                  </div>
//                      ))}
//                  </Slider>
//              </div>

//              <div className='row ' id='rows'>
//                             <h5 className='h6 text-left ml-3 text-capitalize'>Photo albums</h5>
//                             <h6 className='h6 text-left ml-3'>Independance Day</h6>
//                  <Slider {...settings}
//                     arrows={true}        
//                     // autoplay={true}          
//                  >
//                      {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
//                                  <div className='col-md-12' key={image.id} >
//                                      <div className='car' width="90px" height="50px">
//                                        <img src={image.imagesrc} width="80px" height="80px" alt={image.alt} className='p-1'
//                                        onClick={() => handleImageClick(image.imagesrc)}                                            
//                                        />
                               

//                                      </div>
//                                  </div>
//                      ))}
//                  </Slider>
//              </div>

//              <div className='row ' id='rows'>
//                             <h5 className='h6 text-left ml-3 text-capitalize'>Photo albums</h5>
//                             <h6 className='h6 text-left ml-3'>Independance Day</h6>
//                  <Slider {...settings}
//                     arrows={true}        
//                     // autoplay={true}          
//                  >
//                      {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
//                                  <div className='col-md-12' key={image.id} >
//                                      <div className='car' width="90px" height="50px">
//                                        <img src={image.imagesrc} width="80px" height="80px" alt={image.alt} className='p-1'
//                                        onClick={() => handleImageClick(image.imagesrc)}                                            
//                                        />
                               

//                                      </div>
//                                  </div>
//                      ))}
//                  </Slider>
//              </div>
//          </div>
//        </div>

//              </div>
  
//        </div>
//               </div>
//    </div>
//   // </div>
// )
// }




//import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Modal  } from 'react-bootstrap';
import './Social.css';
// import Data from './Data.json';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import images from './images.png';
// import SocialModal from './SocialModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageDisplay from './ImageDisplay';

// import { AiFillCaretRight } from "react-icons/ai";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, background: "#091351",paddingTop:"10px",paddingBottom:"10px",height:"40px",borderTopRightRadius: "20px", borderBottomRightRadius: "20px", marginRight:"5px" }}
          
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#091351",color:"white",paddingTop:"10px",paddingBottom:"10px",height:"40px",borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", marginLeft:"5px" }}
      onClick={onClick}
    />
  );
}


export default function ImgGall() {
  // code for data.json file
  // console.log(Data);

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(4);

  useEffect(() => {
    axios.get('https://localhost:7274/api/Images')
      .then(response => setImages(response.data))
      .catch(error => console.log(error));
  }, []);


  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      CenterPadding:'0',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          // breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            // dots: true
          }
        },
      ]
    };

    const handleImageClick = (imagesrc) => {
      setSelectedImage(imagesrc);
      setShowModal(true);
  
    };
    // const handleCloseModal = () => {
    //   setSelectedImage(null);
    //   setShowModal(false);
    // };
    
return (
  <div>
      <Navbar />
      <Sidebar />
      <div className='container mt-3 mb-0' width="" style={{textAlign:"left"}}>
      <h1 className='Launch mt-7 h4 text-dark' style={{marginLeft:"105px", fontWeight:"600",marginTop:"10px"}} ><span style={{padding:"1px",borderBottom:"5px solid red"}} >Photo Gallery</span></h1>
      <h2 className='mt-0 h6 pt-2' style={{marginLeft:"105px", padding:"3px"}}>Launching Event</h2>
      
        <div className="containers mt-0" style={{marginLeft:"-70px"}}>
          {/* box1 code mothi image */}
          <div className="box p-0" id="box1">
            {/* <img src={images} height="400px" width="500px" alt=""/> */}
            
            
                {selectedImage && <ImageDisplay imageSrc={selectedImage} />}

          </div>
        {/* box 2 */}
            <div className="box" id="box2" style={{}}>
             
                   <div className='row '>
                      <Slider {...settings}
                      >
                          {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
                                      <div className='col-md-12' key={image.id} >
                                          <div className='card m-0 p-0'>
                                            <img src={image.imagesrc}  width="100%" height="100px" alt={image.alt}
                                            onClick={() => handleImageClick(image.imagesrc)}                                            
                                            />
                                            <h1>{}</h1>

                                          </div>
                                      </div>
                          ))}
                      </Slider>
                  </div>
              
            </div>
            {/* box 3 */}
            <div class="box" id="box3" >  
            <div class="" id="containerss" >  
            
            {/* <SocialModal /> */}
            
            <div className="" id="content" style={{}}>
             
             <div className='row' id='rows'>
                            <div className='heading'>
                              {/* <h5 className='h5 text-dark text-left ml-3 text-capitalize'>Photo albums</h5> */}
                            </div>
                            <h6 className='h6 text-left ml-3'>Independance Day</h6>
                 <Slider {...settings}
                    arrows={true}        
                    // autoplay={true}          
                 >
                     {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
                                 <div  key={image.id} >
                                     <div className='car' width="90px" height="50px" style={{padding:"0px"}}>
                                       <img src={image.imagesrc} width="95px" height="90px" alt={image.alt} style={{padding:"0px"}}
                                       onClick={() => handleImageClick(image.imagesrc)}                                            
                                       />
                               

                                     </div>
                                 </div>
                     ))}
                 </Slider>
             </ div>

             <div className='row ' id='rows'>
                            {/* <h5 className='h6 text-left ml-3 text-capitalize'>Photo albums</h5> */}
                            <h6 className='h6 text-left ml-3'>Independance Day</h6>
                 <Slider {...settings}
                    arrows={true}        
                    // autoplay={true}          
                 >
                     {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
                                 <div  key={image.id} >
                                     <div className='car' width="90px" height="50px">
                                       <img src={image.imagesrc} width="90px" height="90px" alt={image.alt}
                                       onClick={() => handleImageClick(image.imagesrc)}                                            
                                       />
                               

                                     </div>
                                 </div>
                     ))}
                 </Slider>
             </div>

             <div className='row ' id='rows'>
                            {/* <h5 className='h6 text-left ml-3 text-capitalize'>Photo albums</h5> */}
                            <h6 className='h6 text-left ml-3'>Independance Day</h6>
                 <Slider {...settings}
                    arrows={true}        
                    // autoplay={true}          
                 >
                     {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
                                 <div  key={image.id} >
                                     <div className='car' width="90px" height="50px">
                                       <img src={image.imagesrc} width="90px" height="90px" alt={image.alt} 
                                       onClick={() => handleImageClick(image.imagesrc)}                                            
                                       />
                               

                                     </div>
                                 </div>
                     ))}
                 </Slider>
             </div>

             <div className='row ' id='rows'>
                            {/* <h5 className='h6 text-left ml-3 text-capitalize'>Photo albums</h5> */}
                            <h6 className='h6 text-left ml-3'>Independance Day</h6>
                 <Slider {...settings}
                    arrows={true}        
                    // autoplay={true}          
                 >
                     {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
                                 <div  key={image.id} >
                                     <div className='car' width="90px" height="50px">
                                       <img src={image.imagesrc} width="90px" height="90px" alt={image.alt} 
                                       onClick={() => handleImageClick(image.imagesrc)}                                            
                                       />
                               

                                     </div>
                                 </div>
                     ))}
                 </Slider>
             </div>

             <div className='row ' id='rows'>
                            {/* <h5 className='h6 text-left ml-3 text-capitalize'>Photo albums</h5> */}
                            <h6 className='h6 text-left ml-3'>Independance Day</h6>
                 <Slider {...settings}
                    arrows={true}        
                    // autoplay={true}          
                 >
                     {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image) => (
                                 <div  key={image.id} >
                                     <div className='car' width="90px" height="50px">
                                       <img src={image.imagesrc} width="90px" height="90px" alt={image.alt} 
                                       onClick={() => handleImageClick(image.imagesrc)}                                            
                                       />
                               

                                     </div>
                                 </div>
                     ))}
                 </Slider>
             </div>
         </div>
       </div>

             </div>
  
       </div>
              </div>
   </div>
  // </div>
)
}
