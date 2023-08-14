// // import React, {useState, useEffect}from 'react'
// // import "./WorkAnniversaryHomeStyle.css";


// // const WorkAnniversaryHome = () => {

  



// //   return (
// //         <div >

// //         <h5 className="workhead"><span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>Work Anniversaries</span></h5>
// //                 <div className="work rounded shadow">
// //                     <div className='workh ml-0 mb-0'>
// //                         <h5 className='ml-0 mb-0'>Today</h5>
// //                         <span className='line'></span>
// //                     </div>
                    
// //                     <div>
// //                     <div className='chat-container'>

// //                             <div class="chat-messages">
// //                                 <div class="message received">
// //                                     <span class="message-content">Martine Celebrating 3rd Work Anniversary</span>

// //                                 </div>
                                
// //                             </div>
// //                             <div class="chat-input">
// //                                 <input type="text" className="chat-inputt" placeholder="Congratulate Your Colleague..."/>
// //                                 <button className='send-button'>Post</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>


// //         </div>

// //   )
// // }

// // export default WorkAnniversaryHome



// import React, {useState, useEffect}from 'react'
// import "./WorkAnniversaryHomeStyle.css";
// import Slider from 'react-slick';
// import axios from 'axios';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { GrFormNext } from "react-icons/gr";
// import { GrFormPrevious } from "react-icons/gr";


// const WorkAnniversaryHome = () => {

//   const CustomPrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: 'block', fontSize: '30px',  marginLeft:"10px",
//         marginBottom:"0px",
//         // position: 'relative', // Set position to relative
//         zIndex: 99,
//         pointerEvents:"auto"
//        }}
//         onClick={onClick}
//       >
//       <div>

//         <GrFormPrevious style={{ pointerEvents: 'auto' }} onClick={onClick} />
//       </div>
//       </div>
      

//     );
//   };

//   // Define your custom arrow components
//   const CustomNextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: 'block', fontSize: '30px',
//          pointerEvents:"auto", marginRight:"17px" }}
//         onClick={onClick}
//       >
//         <GrFormNext />
//       </div>
//     );
//   };
  
//   // Use the custom arrow components in your slider
    
// const settings = {
//   // other settings for the slider...
//   prevArrow: <CustomPrevArrow />,
//   nextArrow: <CustomNextArrow />,
// };

//   const[emp, setEmp] = useState([]);
    
//   useEffect(() =>{
//     axios.get('https://api.github.com/users')
//     .then(Response =>{
//       setEmp(Response.data);
//     }).catch(error =>{
//       console.log(error);
//     });
  
//    },[] );



//   return (
//         <div >

//         <h5 className="workhead"><span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>Work Anniversaries</span></h5>
//                 <div className="work rounded shadow">
//                     <div className='workh ml-0 mb-0'>
//                         <h5 className='ml-0 mb-0'>Today</h5>
//                         <span className='line'></span>
//                     </div>
                    
//                     <div className='slider-container' style={{ width: '300px', margin: '0 auto' }}>
//             <Slider dots={false} fade={true}
//               {...settings}>
                        
//                 {emp.map(employee => (
//                     <div>
//                       <div className='image-container' width="auto" height="120px">
//                          <img className='rounded' alt="a" src={employee.avatar_url} style={{width:"120px", height:"120px"}}/>
//                       </div>
//                       <h6 style={{fontSize:"16px" ,marginBottom:"10px", textTransform:"capitalize",marginTop:"10px"}}>{employee.login}</h6>
//                       <div>
//                       <div className='AAA'>
//                               <div className="BBB" style={{ width: '280px', marginTop: '20px', overflowY: 'auto', maxHeight: '60px', position:"relative",float:"left" }}>
//                                 <p className='CCC'>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
//                                 <p>happy birthday</p>
                                
//                               </div>
//                               </div>          
//                       </div>

                     
//                     </div>  
//             ))}
//             </Slider>
            
//             <div class="chat-input">
//                 <input type="text" className="chat-inputt" placeholder="Wish you colleague Happy Birthday!..."/>
//                 <button className='send-button'>Post</button>
//             </div>
            
//                 </div>
//               </div>


//         </div>

//   )
// }

// export default WorkAnniversaryHome




// import React, {useState, useEffect}from 'react'
// import "./Birthdays.css";
// import axios from 'axios';

// const BirthdaysHome = () => {

    



//   return (
//         <div>

//             <h5 className="birthdayhead"><span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>Birthdays</span></h5>
//             <div className="birthdays rounded shadow">
//                     <div className='birthdayh ml-0 mb-0'>
//                                 <h5 className='ml-0 mb-0'>Today</h5>
                          

//                                 <span className='line'></span>
//                     </div>

//                     {/* <div> */}
//                     {/* <div className='chatmsg'>
//                         <h6>Happy Birthday</h6>
//                     </div>
//                     <div>
//                         <div className="chat-input-container">
//                             <input type="text" className="chat-input" placeholder="Wish Your Colleague Happy Birthday!..." />
//                         </div>
//                         <div className=''>
//                             <button class="send-button">Post</button>
//                         </div>
//                     </div> */}

//         <div className='chat-container'>

//         <div class="chat-messages">
//             <div class="message received">
//                 <span class="message-content">Happy Birthday </span>
//                 <h5 className='ml-0 mb-0'>Today</h5>

// <h5 className='ml-0 mb-0'>Today</h5>

// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>

// <h5 className='ml-0 mb-0'>Today</h5>

// <h5 className='ml-0 mb-0'>Today</h5>

// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>
// <h5 className='ml-0 mb-0'>Today</h5>


// <h5 className='ml-0 mb-0'>Today</h5>

// <h5 className='ml-0 mb-0'>Today</h5>

//             </div>
            
//         </div>
//         <div class="chat-input">
//             <input type="text" className="chat-inputt" placeholder="Wish you colleague Happy Birthday!..."/>
//             <button className='send-button'>Post</button>
//         </div>
//         </div>
                       
//         {/* </div> */}
        
//             </div>
//         </div>

//   )
// }

// export default BirthdaysHome;



import React, {useState, useEffect}from 'react'
import "./Birthdays.css";
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { Picker } from 'emoji-mart';
const BirthdaysHome = () => {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', fontSize: '30px',  marginLeft:"10px",
        marginBottom:"0px",
        // position: 'relative', // Set position to relative
        zIndex: 99,marginTop:'50px',
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
        style={{ ...style, display: 'block', fontSize: '30px',
         pointerEvents:"auto", marginRight:"17px" ,marginTop:'50px'}}
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
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() =>{
    axios.get('https://localhost:7274/api/Employee/NewJoiner')
    .then(Response =>{
      setEmp(Response.data);
    }).catch(error =>{
      console.log(error);
    });
  
   },[] );
useEffect(() => {
        fetchComments();
      }, []);
    
      const fetchComments = async () => {
        try {
          const response = await axios.get('https://localhost:7274/api/BirthdayComment');
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
          await axios.post('https://localhost:7274/api/BirthdayComment', comment);
          setNewComment('');
          fetchComments();
        } catch (error) {
          console.log(error);
        }
      };

  return (
        <div>

            <h5 className="birthdayhead"><span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>Work Anniversary</span></h5>
            <div className="birthdays rounded shadow">
                    <div className='birthdayh ml-0 mb-0'>
                                <h5 className='ml-0 mb-0'>Today</h5>
                                <span className='line'></span>
                                
                    </div>

            <div className='slider-container' style={{ width: '300px', margin: '0 auto' }}>
            <Slider dots={false} fade={true}
              {...settings}>
                        
                {emp.map(employee => (
                    <div>
                      <div className='image-container' width="auto" height="120px">
                         <img className='rounded' src={employee.imageSrc} alt='Reload' style={{width:"120px", height:"120px"}}/>
                      </div>
                      <h6 style={{fontSize:"16px" ,marginBottom:"10px", textTransform:"capitalize",marginTop:"10px"}}>{employee.login}</h6>
                      <div>
                           
                      </div>

                     
                    </div>  
            ))}
            </Slider>
            

            <div className='right-side-form' style={{height:"90px", width:"250px", overflow:"auto",marginLeft:"30px"}}>
              {comments.map((comment) => (
          <p key={comment.id}>{comment.comment}</p>
        ))}
                
              </div>
            
            <div class="chat-input">
            <form onSubmit={handleSubmit} className='form ' style={{marginTop:"-90px"}}>
            <div className='NewsTextBox' style={{marginTop:"100px"}}>
          <textarea placeholder='Type your com..' className='textAreaboxNews float-start ml-0 mt-3' value={newComment}  onChange={handleCommentChange}  onFocus={() => setShowEmojiPicker(false)} style={{marginTop:"-10px",marginLeft:"15px" ,width:"230px"}} />
         {/* <h1 type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} className='float-start' style={{marginLeft:"40px",marginTop:"10px",fontSize:"10px"}}>
         😄
        </h1> */}
        {showEmojiPicker && (
          <Picker onSelect={handleEmojiSelect} set="apple" style={{ position: 'absolute', bottom: '50px', right: '10px' }} className="emoji" />
        )}
                                        <button type="submit" className='send-button float-start' style={{marginTop:"-40px",marginLeft:"240px"}}>Post</button>
                                        
                                      </div>
                    </form>
            </div>
            
            
                  
                 </div>       
              
            </div>
        </div>

  )
}

export default BirthdaysHome;