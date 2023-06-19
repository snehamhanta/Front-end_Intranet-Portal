// import React from 'react';
// import './Social.css'
// const ImageDisplay = ({ imageSrc }) => {
//   return (
//     <div>
//       <img src={imageSrc} alt="Selected Image" className='image'/>
//     </div>
//   );
// };

// export default ImageDisplay;


import React from 'react';
import './Social.css'
const ImageDisplay = ({ imageSrc }) => {
  return (
    <div>
      <img src={imageSrc} alt="Selected Image" height="360px" width="100%" className='image rounded'/>
    </div>
  );
};

export default ImageDisplay;