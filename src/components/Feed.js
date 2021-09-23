import CreateIcon from '@material-ui/icons/Create';
import React from 'react';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';

function Feed() {
  return (
    <div className='feed'>
      <div className='div feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input type='text' placeholder='请描述你的隔离感受' />
            <button type='submit'>Send</button>
          </form>
        </div>

        <div className='feed_inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
        </div>
      </div>
    </div>
  );
}

export default Feed;
