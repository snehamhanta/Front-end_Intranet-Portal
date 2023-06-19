import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Picker } from 'emoji-mart';
// import './styles.css';
// import'./CommentStyle.css';

// import 'emoji-mart/css/emoji-mart.css';
import 'emoji-mart/css/emoji-mart.css';


const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <textarea value={newComment}  onChange={handleCommentChange} className='textbox'
          onFocus={() => setShowEmojiPicker(false)} />
           <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} className='emoji-button'>
          Add Emoji
        </button>
        {showEmojiPicker && (
          <Picker onSelect={handleEmojiSelect} set="apple" style={{ position: 'absolute', bottom: '50px', right: '10px' }} className="emoji" />
        )}
        <button type="submit">Submit</button>
      </form>
      <div>
        {comments.map((comment) => (
          <p key={comment.id}>{comment.comment}</p>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
