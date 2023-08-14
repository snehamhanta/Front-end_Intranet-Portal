// // // import React, { useState,useEffect }  from 'react'
// // // import "./NewStartersStyle.css";
// // // // import emp1 from "../../Images/emp1.jpg";
// // // import { Carousel } from 'react-responsive-carousel'; 
// // // import axios from 'axios'; 
// // // import 'bootstrap';
// // // import 'react-bootstrap'

// // // import "react-responsive-carousel/lib/styles/carousel.min.css"; 

// // // function NewStarters() {
// // //   const[emp, setEmp] = useState([]);

// // //   useEffect(() =>{
// // //     axios.get('https://localhost:7274/api/Employee')
// // //     .then(Response =>{
// // //       setEmp(Response.data);
// // //     }).catch(error =>{
// // //       console.log(error);
// // //     });
  
// // //    },[] );
// // //   return (
// // //     <div>
// // //          <p className="text-new-starters">New Starters</p>
// // //          <div className="NewStarters">
// // //          <Carousel className="carousel" showThumbs={false} showIndicators={false} showStatus={false} stopOnHover={false}>
// // //   {emp.map(item => (
// // //     <div key={item.employeeId} >
// // //       <img  src={item.imageSrc} alt={item.employeeName} style={{width:"450px",height:"200px" ,marginLeft:"0px"}}/>
// // //       <div className="carousel-caption">
// // //         <h2 className="h1-newstarter" style={{marginLeft:"150px"}}>{`Welcome ${item.employeeName}`}</h2>
// // //         <p className="p-newstarter" style={{marginLeft:"150px"}}>{`${item.employeeName} joined  as a ${item.designation}`}</p>
// // //       </div>
// // //     </div>
// // //   ))}
// // // </Carousel>
// // //          </div>
         
// // //     </div>
// // //   )
// // // }

// // // export default NewStarters



// // import React, {useState, useEffect}from 'react'
// // // import "./NewsStyle.css";
// // import "./NewStartersStyle.css";

// // import  Carousel  from 'react-bootstrap/Carousel';  
// // import axios from 'axios';
// // import CommentBox from '../CommentBox';
// // import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // // import news1 from "../../Images/emp1.jpg"
// // // import { Height } from '@mui/icons-material';
// // import { Picker } from 'emoji-mart';
// // // import './styles.css';
// // // import'./CommentStyle.css';

// // // import 'emoji-mart/css/emoji-mart.css';
// // import 'emoji-mart/css/emoji-mart.css';
// // const NewStarters = () => {

// //   const [index, setIndex] = useState(0);
// //   const [news, setNews] = useState([])
// //   const [comments, setComments] = useState([]);
// //   const [newComment, setNewComment] = useState('');
// //   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

// //   useEffect(() =>{
// //   axios.get('https://localhost:7274/api/Employee')
// //   .then(Response =>{
// //     setNews(Response.data);
// //   }).catch(error =>{
// //     console.log(error);
// //   });

// //  },[] );

// //  const handleSelect = (selectedIndex,e )=>{
// //   console.log('selected index: ', selectedIndex)
// //   setIndex(selectedIndex);  
// //  };

// //  useEffect(() => {
// //   fetchComments();
// // }, []);

// // const fetchComments = async () => {
// //   try {
// //     const response = await axios.get('https://localhost:7274/api/Comment');
// //     setComments(response.data);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // const handleCommentChange = (event) => {
// //   setNewComment(event.target.value);
// // };
// // const handleEmojiSelect = (emoji) => {
// //   setNewComment(newComment + emoji.native);
// //   setShowEmojiPicker(false);
// // };
// // const handleSubmit = async (event) => {
// //   event.preventDefault();

// //   const comment = {
// //     comment: newComment,
// //   };

// //   try {
// //     await axios.post('https://localhost:7274/api/Comment', comment);
// //     setNewComment('');
// //     fetchComments();
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };



// //   return (
// //   <div >

// //     <h5 className="text-news"><span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>New Starters</span></h5>
// //     <div className="NewStartersS rounded shadow">
    
// //     <div>
// //       <Carousel   activeIndex={index} onSelect={handleSelect} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
// //       // to stop autoplay
// //       interval={null}
// //       >
      

// //         {news.map((item) => {
// //           return(
            

// //             <Carousel.Item   interval={item.interval}> 
// //               <div className='aaa  d-flex'>

// //                 <div className='imageStarters mr-0 mt-0'>
// //                       <img
// //                       className='imageStarter rounded'
// //                       src={item.imageSrc}
// //                       alt='vaishu'
// //                       style={{marginLeft:"0px"}}
                      
// //                       />
// //                 </div>
// //                 <div className='heads'>
// //                     <h5  style={{color:"#091351",marginLeft:"40px"}}>{`Welcome ${item.employeeName}`}</h5>
// //                     <p className='hhh' style={{color:"#091351",fontSize:"15px"}}>{`${item.employeeName} joined  as a ${item.designation}`}</p>


                    
// //                     <form onSubmit={handleSubmit}>
// //                                       <div className='StarterTextBox' >
// //                                       <textarea value={newComment}  onChange={handleCommentChange} className='textAreaboxNews float-start'placeholder='Type your com..'
// //           onFocus={() => setShowEmojiPicker(false)} style={{marginTop:"-10px",marginLeft:"40px"}}/>                                       
// //  <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} className='post-btnN   float-start' style={{marginLeft:"40px",marginTop:"10px",fontSize:"10px"}}>
// //           Add Emoji
// //         </button>
// //         {showEmojiPicker && (
// //           <Picker onSelect={handleEmojiSelect} set="apple" style={{ position: 'absolute', bottom: '50px', right: '10px' }} className="emoji" />
// //         )}
// //           <button type="submit" className='post-btnN float-start' style={{marginTop:"10px",marginLeft:'5px',fontSize:"10px"}}>Post</button>                                        {/* <button type='button' className='e-btn ml-1 mt-2 float-start'>Add</button> */}
                                        
// //                                       </div>
// //                     </form>
// //                     <div className='scrollable-container' style={{marginTop:"100px",width:"200px",marginLeft:"0px"}}>
// //         {comments.map((comment) => (
// //           <p key={comment.id}>{comment.comment}</p>
// //         ))}
// //       </div>     
// //                 </div>
// //               </div>
                
               
                
              
            

// //             </Carousel.Item>
// //           )
// //         }
          
// //         )}

// //         </Carousel>

          
// //         </div>







// //          </div>
// //         </div>

// //   )
// // }

// // export default NewStarters




// import React, {useState, useEffect}from 'react'
// import "./NewStartersStyle.css";
// // import "./Sample.css";
// import axios from 'axios';
// // import CommentBox from '../CommentBox';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import the icons


// const NewStarters = () => {



//   let url="https://reqres.in/api/users?page=1"  

//   const [data, setData] = useState([]);

//   // Fetch data from API
//   useEffect(() => {
//     axios.get(url)
//       .then(response => {
//         setData(response.data.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data from API:', error);
//       });
//   }, []);

//   const CustomPrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="custom-arrow custom-arrow-prev" onClick={onClick} style={{
//         zIndex: 99, display:"block",fontSize:"30px", color:'white', fontWeight:"500"
//         ,pointerEvents:"auto",float:"left",
//          marginTop:"90px",marginLeft:"-20px"

//       }}>
//         <FiChevronLeft />
//       </div>
//     );
//   };
  
//   const CustomNextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="custom-arrow custom-arrow-next" onClick={onClick}
//       style={{
//         zIndex: 99, display:"block",fontSize:"30px", color:'white', fontWeight:"500"
//         ,pointerEvents:"auto",float:"right", marginTop:"-150px", 

//       }}
//       >
//         <FiChevronRight fontSize="30px" color='white' fontWeight="500" style={{marginRight:"-20px"}}/>
//       </div>
//     );
//   };

//   // Slick Slider settings
//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // centerMode: true,
//     centerPadding: '0',
//     arrows: true,
//     prevArrow: <CustomPrevArrow />, // Use the custom left arrow
//     nextArrow: <CustomNextArrow />,
//   };

  

//   return (
//   <div >

//     <h5 className="text-news"><span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>New Starters</span></h5>
//     <div className="NewStartersS rounded shadow">
    
//     <div style={{alignItems:"center", width: '500px', margin: '0 auto' }}>
//       <Slider {...sliderSettings}>
//         {data.map((item, index) => (
//           <div key={index} className="slider-slide"  style={{display:"flex", width:"100%"}}>
//             <div className="left-side2">
//               <img
//               className='rounded'
//                 src={item.avatar}
//                 alt={`Slide ${index + 1}`}
//                 style={{ width: '210px', height: '235px' ,marginLeft:"15px"}}
//               />
//             </div>
//             <div className="right-side2 ml-0 mt-0">
//               <h3 className='mt-0'>Welcome on Board</h3>
//               <br className='mt-0'/>
              
//               <h4 className='mt-0'>{item.first_name}</h4>
//               <br className='mt-0'/>
//             <div className='' style={{ width:"230px", height:"150px"}}>
//               <div className='right-side-form' style={{height:"100px", width:"220px", overflow:"auto"}}>
//                 <p>Tina P Joined as Marketing a Head
//                 <hr/>
//                 </p>
//                 <p>Tina P Joined as Marketing a Head
//                 <hr/>
//                 </p><p>Tina P Joined as Marketing a Head
//                 <hr/>
//                 </p><p>Tina P Joined as Marketing a Head
//                 <hr/>
//                 </p><p>Tina P Joined as Marketing a Head
//                 <hr/>
//                 </p>
                
//               </div>

//               <form >
//                                       <div className='NewsTextBox' >
//                                         <textarea placeholder='Type your com..' className='textAreaboxNews float-start ml-1'  />
//                                         <button type="submit" className='post-btnN  ml-1 mt-2 float-start'>Post</button>
                                        
//                                       </div>
//                     </form>
//               </div>

//           </div>
//           </div>
//         ))}
//       </Slider>
//     </div>





//          </div>
//         </div>

//   )
// }

// export default NewStarters







// // import React, { useState,useEffect }  from 'react'
// // import "./NewsStyle.css";
// // // import emp1 from "../../Images/emp1.jpg";
// // import { Carousel } from 'react-responsive-carousel'; 
// // import axios from 'axios'; 
// // import 'bootstrap';
// // import 'react-bootstrap'

// // import "react-responsive-carousel/lib/styles/carousel.min.css"; 

// // function NewStarters() {
// //   const[emp, setEmp] = useState([]);

// //   useEffect(() =>{
// //     axios.get('https://localhost:7274/api/News')
// //     .then(Response =>{
// //       setEmp(Response.data);
// //     }).catch(error =>{
// //       console.log(error);
// //     });
  
// //    },[] );
// //   return (
// //     <div className='new' style={{marginLeft:"600px",marginTop:"-380px",width:"1430px"}}>
// //          <p className="text-new-starters">Company News</p>
// //          <div className="NewStarters">
// //          <Carousel className="carousel" showThumbs={false} showIndicators={false} showStatus={false} stopOnHover={false}>
// //   {emp.map(item => (
// //     <div key={item.employeeId} >
// //       <img  src={item.imageUrl} alt={item.employeeName} style={{width:"450px",height:"200px" ,marginLeft:"0px"}}/>
// //       <div className="carousel-caption">
// //         <h2 className="h1-newstarter" style={{marginLeft:"180px"}}>{item.newsTitale}</h2>
// //         <p className="p-newstarter" style={{marginLeft:"120px",width:"180px"}}>{item.content}</p>
// //       </div>
// //     </div>
// //   ))}
// // </Carousel>
// //          </div>
         
// //     </div>
// //   )
// // }

// // export default NewStarters


// import React, {useState, useEffect}from 'react'
// import "./NewsStyle.css";

// import  Carousel  from 'react-bootstrap/Carousel';  
// import axios from 'axios';
// // import CommentBox from '../CommentBox';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import 'bootstrap/dist/css/bootstrap.min.css';

// // import news1 from "../../Images/emp1.jpg"
// // import { Height } from '@mui/icons-material';

// import { Picker } from 'emoji-mart';
// // import './styles.css';
// // import'./CommentStyle.css';

// // import 'emoji-mart/css/emoji-mart.css';
// import 'emoji-mart/css/emoji-mart.css';

// const News = () => {

//   const [index, setIndex] = useState(0);
//   const [news, setNews] = useState([])
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   useEffect(() =>{
//   axios.get('https://localhost:7274/api/News')
//   .then(Response =>{
//     setNews(Response.data);
//   }).catch(error =>{
//     console.log(error);
//   });

//  },[] );

//  const handleSelect = (selectedIndex,e )=>{
//   console.log('selected index: ', selectedIndex)
//   setIndex(selectedIndex);  
//  };

 
  

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get('https://localhost:7274/api/Comment');
//       setComments(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCommentChange = (event) => {
//     setNewComment(event.target.value);
//   };
//   const handleEmojiSelect = (emoji) => {
//     setNewComment(newComment + emoji.native);
//     setShowEmojiPicker(false);
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const comment = {
//       comment: newComment,
//     };

//     try {
//       await axios.post('https://localhost:7274/api/Comment', comment);
//       setNewComment('');
//       fetchComments();
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   return (
//   <div >

//     <h5 className="text-news"><span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>Company News</span></h5>
//     <div className="NewStarters rounded shadow">
    
//     <div>
//       <Carousel   activeIndex={index} onSelect={handleSelect} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
//       // to stop autoplay
//       interval={null}
//       >
      

//         {news.map((item) => {
//           return(
            

//             <Carousel.Item   interval={item.interval}> 
//               <div className='aaa  d-flex'>

//                 <div className='image mr-0 rounded'>
//                       <img  
//                       className='imageu w-40 rounded'
//                       src={item.imageUrl}
//                       alt='vaishu'
//                       width=""
//                       style={{marginLeft:"0px"}}
                      
//                       />
//                 </div>
//                 <div className='head'>
//                 <h5 style={{color:"#091351",marginLeft:"40px"}}>{item.newsTitale}</h5>
//                     <p style={{paddingLeft:"10px",fontSize:"15px"}}>{item.content}</p>


//                     <form onSubmit={handleSubmit}>
//                     <div className='NewsTextBox' >
//         <textarea value={newComment}  onChange={handleCommentChange} className='textAreaboxNews float-start'placeholder='Type your com..'
//           onFocus={() => setShowEmojiPicker(false)} style={{marginTop:"-10px",marginLeft:"35px"}}/>
//            <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} className='post-btnN float-start' style={{marginLeft:"40px",marginTop:"10px",fontSize:"10px"}}>
//           Add Emoji
//         </button>
//         {showEmojiPicker && (
//           <Picker onSelect={handleEmojiSelect} set="apple" style={{ position: 'absolute', bottom: '50px', right: '10px' }} className="emoji" />
//         )}
//           <button type="submit" className='post-btnN float-start' style={{marginTop:"10px",marginLeft:'5px',fontSize:"10px"}}>Post</button>
//           </div>
//       </form>
//       <div className='scrollable-container' style={{marginTop:"100px",width:"200px",marginLeft:"20px"}}>
//         {comments.map((comment) => (
//           <p key={comment.id}>{comment.comment}</p>
//         ))}
//       </div>       
//                 </div>
//               </div>
                
               
                
              
            

//             </Carousel.Item>
//           )
//         }
          
//         )}

//         </Carousel>

          
//         </div>







//          </div>
//         </div>

//   )
// }

// export default News




import React, {useState, useEffect}from 'react'
import "./NewsStyle.css";

import axios from 'axios';
// import CommentBox from '../CommentBox';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import the icons

import { Picker } from 'emoji-mart';
// import './styles.css';
// import'./CommentStyle.css';

// import 'emoji-mart/css/emoji-mart.css';
import 'emoji-mart/css/emoji-mart.css';
// import news1 from "../../Images/emp1.jpg"
// import { Height } from '@mui/icons-material';

const News = () => {


  const [index, setIndex] = useState(0);
    const [news, setNews] = useState([])
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [data, setData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    axios.get('https://localhost:7274/api/Employee')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  const handleSelect = (selectedIndex,e )=>{
      console.log('selected index: ', selectedIndex)
      setIndex(selectedIndex);  
     };
    
     
      
    
      useEffect(() => {
        fetchComments();
      }, []);
    
      const fetchComments = async () => {
        try {
          const response = await axios.get('https://localhost:7274/api/Comment');
          setComments(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleCommentChange = (event) => {
        setNewComment(event.target.value);
      };
      const handleEmojiSelect = (emoji) => {
        setNewComment(newComment + emoji.native);
        setShowEmojiPicker(false);
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const comment = {
          comment: newComment,
        };
    
        try {
          await axios.post('https://localhost:7274/api/Comment', comment);
          setNewComment('');
          fetchComments();
        } catch (error) {
          console.log(error);
        }
      };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-arrow-prev" onClick={onClick} style={{
        zIndex: 99, display:"block",fontSize:"30px", color:'white', fontWeight:"500"
        ,pointerEvents:"auto",float:"left", 
        marginTop:"90px",marginLeft:"-20px"

      }}>
        <FiChevronLeft />
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-arrow-next" onClick={onClick}
      style={{
        zIndex: 99, display:"block",fontSize:"30px", color:'white', fontWeight:"500"
        ,pointerEvents:"auto",float:"right", marginTop:"-140px", 

      }}
      >
        <FiChevronRight fontSize="30px" color='white' fontWeight="500" style={{marginRight:"-20px"}}/>
      </div>
    );
  };

  // Slick Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    centerPadding: '0',
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Use the custom left arrow
    nextArrow: <CustomNextArrow />,
  };



  return (
  <div >

    <h5 className="text-news"><span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>New Starter</span></h5>
    <div className="NewStarters rounded shadow">
    
    <div style={{alignItems:"center", width: '500px', margin: '0 auto' }}>
      <Slider {...sliderSettings}>
        {data.map((item, index) => (
          <div key={index} className="slider-slide"  style={{display:"flex", width:"100%"}}>
            <div className='image mr-0 rounded'>
                                   <img  
                      className='imageu w-20 rounded'
                      src={item.imageSrc}
                      alt='vaishu'
                      width=""
                      style={{marginLeft:"0px",width:"210px",height:"220px",marginRight:"20px"}}
                      
                      />
                </div>
            {/* <div className="right-side2 ml-0 mt-0"> */}
              {/* <h3 className='mt-0 ml-0 mr-3'>{item.newsTitale}</h3> */}
              {/* <br className='mt-0'/> */}
              <div className="right-side2 ml-0 mt-0">
              <h3 className='mt-0'>{`Welcome ${item.employeeName}`}</h3>
             <br className='mt-0'/>
              <p className='mt-0 mr-5' style={{fontSize:"12px", lineHeight:"1.2em",textIndent:"0%" }}>{`${item.employeeName} joined  as a ${item.designation}`}</p>
              {/* <br className='mt-0'/> */}
            <div className='mt-0' style={{ width:"230px", height:"150px"}}>
              <div className='right-side-form' style={{height:"90px", width:"220px", overflow:"auto"}}>
              {comments.map((comment) => (
          <p key={comment.id}>{comment.comment}</p>
        ))}
                
              </div>




              <form onSubmit={handleSubmit}>
            <div className='NewsTextBox' >
          <textarea placeholder='Type your com..' className='textAreaboxNews float-start ml-1 mt-3' value={newComment}  onChange={handleCommentChange}  onFocus={() => setShowEmojiPicker(false)} style={{marginTop:"-10px",marginLeft:"15px"}} />
         {/* <h1 type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} className='float-start' style={{marginLeft:"40px",marginTop:"10px",fontSize:"10px"}}>
         😄
        </h1> */}
        {showEmojiPicker && (
          <Picker onSelect={handleEmojiSelect} set="apple" style={{ position: 'absolute', bottom: '50px', right: '10px' }} className="emoji" />
        )}
                                        <button type="submit" className='post-btnN  ml-1 float-start' style={{marginTop:"20px"}}>Post</button>
                                        
                                      </div>
                    </form>
              </div>

          </div>
           </div>
        ))}
      </Slider>
    </div>







         </div>
        </div>

  )
}

export default News