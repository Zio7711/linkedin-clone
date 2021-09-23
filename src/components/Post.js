import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar />
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post_body'>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Post;
