import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import './Stories.css';
import { Height } from '@mui/icons-material';

function Stories() {

  const [videos, setVideos] = useState([]);

  function playVideo(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    videoElement.play();
  }

  function pauseVideo(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    videoElement.pause();
  }

  function togglePlayPause(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }

  function seekBackward(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    videoElement.currentTime -= 10;
  }

  function seekForward(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    videoElement.currentTime += 10;
  }

  function handleTimeUpdate(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    const progressBar = document.getElementById(`progress-bar-${video.id}`);
    const currentTime = videoElement.currentTime;
    const duration = videoElement.duration;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get("https://localhost:7274/api/Stories");
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <>
    <Navbar />
    <Sidebar />
    <h1 className='Launch mt-4 h4 text-dark' style={{marginLeft:"200px", fontWeight:"600"}} ><span style={{padding:"1px",borderBottom:"5px solid red", marginTop:"0px"}} >Videos</span></h1>

    <div className="video-list-container" style={{marginTop:"50px",marginLeft:"-20px"}}>
    {/* <h1 className='Launch mt-5 h4 text-dark' style={{marginLeft:"200px", fontWeight:"600"}} ><span style={{padding:"1px",borderBottom:"5px solid red", marginTop:"0px"}} >Videos</span></h1> */}

      {videos.map(video => (
        <div key={video.id} className="video-item"style={{marginLeft:"50px"}}>
          {/*<h2>{video.title}</h2>*/}
          <div className="video-controls">
           {/* <button onClick={() => togglePlayPause(video)}>
              {video.isPlaying ? 'Pause' : 'Play'}
            </button>
            <button onClick={() => seekBackward(video)}>10s Backward</button>
            <button onClick={() => seekForward(video)}>10s Forward</button> */}
            <div className="progress-bar-container">
              <div
                className="progress-bar" 
                id={`progress-bar-${video.id}`}
              />
            </div>
          </div>
          <div className='video-title' style={{fontSize:"20px"}}>
          <p style={{fontSize:"30px",marginLeft:"-40px"}}> {video.title}</p>
          {/* <p>{video.description}</p> */}
          </div>
          <video
            id={`video-${video.id}`}
            controls
            onTimeUpdate={() => handleTimeUpdate(video)} 
          >
            <source src={video.vedioSrc} type={video.mime_type} />
          
          </video>
        
        </div>
      ))}
    </div>

    </>
  )
}

export default Stories




// import Navbar from '../Navbar'
// import Sidebar from '../Sidebar'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Image, Modal  } from 'react-bootstrap';
// import './Stories.css';
// // import Data from './Data.json';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// // import images from './images.png';
// // import SocialModal from './SocialModal';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import StoryDisply from './StoryDisply';

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


// export default function ImgStory() {
//   // code for data.json file
//   // console.log(Data);

//   const [videos, setVideos] = useState([]); 
//   const [showModal, setShowModal] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [imagesToShow, setImagesToShow] = useState(4);
//   const [selectedVideo, setSelectedVideo] = useState(null);

  
//   function playVideo(video) {
//         const videoElement = document.getElementById(`video-${video.id}`);
//         videoElement.play();
//       }
    
//       function pauseVideo(video) {
//         const videoElement = document.getElementById(`video-${video.id}`);
//         videoElement.pause();
//       }
    
//       function togglePlayPause(video) {
//         const videoElement = document.getElementById(`video-${video.id}`);
//         if (videoElement.paused) {
//           videoElement.play();
//         } else {
//           videoElement.pause();
//         }
//       }
    
//       function seekBackward(video) {
//         const videoElement = document.getElementById(`video-${video.id}`);
//         videoElement.currentTime -= 10;
//       }
    
//       function seekForward(video) {
//         const videoElement = document.getElementById(`video-${video.id}`);
//         videoElement.currentTime += 10;
//       }
    
//       function handleTimeUpdate(video) {
//         const videoElement = document.getElementById(`video-${video.id}`);
//         const progressBar = document.getElementById(`progress-bar-${video.id}`);
//         const currentTime = videoElement.currentTime;
//         const duration = videoElement.duration;
//         const progressPercent = (currentTime / duration) * 100;
//         progressBar.style.width = `${progressPercent}%`;
//       }
    
//       useEffect(() => {
//         async function fetchVideos() {
//           try {
//             const response = await axios.get("https://localhost:7274/api/Stories");
//             setVideos(response.data);
//           } catch (error) {
//             console.error(error);
//           }
//         }
    
//         fetchVideos();
//       }, []);

    

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

//     const handleVideoClick = (vedioSrc) => {
//       setSelectedVideo(vedioSrc);
//       setShowModal(true);
  
//     };
    
    
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
            
            
//                 {selectedVideo && <StoryDisply vedioSrc={selectedVideo} />}

//           </div>
//         {/* box 2 */}
//             <div className="box" id="box2" style={{}}>
             
//                    <div className='row '>
//                       <Slider {...settings}
//                       >
//                           {videos.map(video => (
//         <div key={video.id} className="video-item"style={{marginLeft:"100px"}}>
//           {/*<h2>{video.title}</h2>*/}
//           <div className="video-controls">
//            {/* <button onClick={() => togglePlayPause(video)}>
//               {video.isPlaying ? 'Pause' : 'Play'}
//             </button>
//             <button onClick={() => seekBackward(video)}>10s Backward</button>
//             <button onClick={() => seekForward(video)}>10s Forward</button> */}
//             <div className="progress-bar-container">
//               <div
//                 className="progress-bar" 
//                 id={`progress-bar-${video.id}`}
//               />
//             </div>
//           </div>
//           <video
//             id={`video-${video.id}`}
//             controls
//             onTimeUpdate={() => handleTimeUpdate(video)}
//           >
//             <source src={video.vedioSrc} type={video.mime_type}  onClick={() => handleVideoClick(video.vedioSrc)}  />
//           </video>
//         </div>
//       ))}
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
//                               {/* <h5 className='h5 text-dark text-left ml-3 text-capitalize'>Photo albums</h5> */}
//                             </div>
//                             <h6 className='h6 text-left ml-3'>Independance Day</h6>
//                  <Slider {...settings}
//                     arrows={true}        
//                     // autoplay={true}          
//                  >
//                       {videos.map(video => (
//         <div key={video.id} className="video-item"style={{marginLeft:"100px"}}>
//           {/*<h2>{video.title}</h2>*/}
//           <div className="video-controls">
//            {/* <button onClick={() => togglePlayPause(video)}>
//               {video.isPlaying ? 'Pause' : 'Play'}
//             </button>
//             <button onClick={() => seekBackward(video)}>10s Backward</button>
//             <button onClick={() => seekForward(video)}>10s Forward</button> */}
//             <div className="progress-bar-container">
//               <div
//                 className="progress-bar" 
//                 id={`progress-bar-${video.id}`}
//               />
//             </div>
//           </div>
//           <video
//             id={`video-${video.id}`}
//             controls
//             onTimeUpdate={() => handleTimeUpdate(video)}
//           >
//             <source src={video.vedioSrc} type={video.mime_type}  onClick={() => handleVideoClick(video.vedioSrc)}  />
//           </video>
//         </div>
//       ))}
//                  </Slider>
//              </ div>

            
//          </div>
//        </div>

//              </div>
  
//        </div>
//               </div>
//    </div>
//   // </div>
// )
// }
