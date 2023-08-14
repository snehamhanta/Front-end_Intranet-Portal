import React, {useState, useEffect}from 'react';
import { useNavigate } from "react-router-dom";
import "./StoriesHome.css";
// import samplevideo2 from "."

// import CommentBox from '../CommentBox';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Source } from '@mui/icons-material';
// import news1 from "../../Images/emp1.jpg"
// import { Height } from '@mui/icons-material';

const StoriesHome = () => {
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    axios
      .get('https://localhost:7274/api/Stories')
      .then(response => {
        // Extract the avatar_url from the 0th index user
        const vedioSrc = response.data[0].vedioSrc;
        setImageURL(vedioSrc);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
  <div >

    <h5 className="StoriesHomeHead "><span className=" " style={{padding:".5px",borderBottom:"4px solid rgb(233, 25, 133)"}}>Video Gallery</span></h5>
    <div className="StoriesHead rounded shadow">

    <div>
      <video className='rounded' width="100%" height="300px" controls>
        {/* <source src="./home/samplevideo.mp4" className='rounded'
         type="video/mp4" /> */}
            {imageURL && <source src={imageURL} className='mt-0 rounded' 
      // style={{objectFit:"cover"}} 
      alt="API Image" width="100%" height="300px" />}
      </video>
    </div>

    <div> 
    </div>



         </div>
        <div className="StoriesHead2 rounded shadow">
          <div>
            <h6 className='storiesh'>Appraisal Process</h6>
          </div>
          <div className='storiesp'>
            <p className=''>Uploaded on date
            <button type="submit" 
                onClick={()=>navigate("/Stories")}
            className='viewmore-btn-sories mt-0'>View All</button>
            </p>
          </div>
        </div>
        </div>

  )
}

export default StoriesHome