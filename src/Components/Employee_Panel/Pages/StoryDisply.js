import React from 'react';
import './Stories.css'
const StoryDisply = ({ vedioSrc }) => {
  return (
    <div>
      <source src={vedioSrc} alt="Selected Video" height="300px" width="100%" className='image rounded'/>
    </div>
  );
};

export default StoryDisply;