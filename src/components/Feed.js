import CreateIcon from '@material-ui/icons/Create';
import React from 'react';
import './Feed.css';

function Feed() {
  return (
    <div className='feed'>
      <div className='div feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feed;
