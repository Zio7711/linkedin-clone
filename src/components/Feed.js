import CreateIcon from '@material-ui/icons/Create';
import React from 'react';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';

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
          <InputOption Icon={Subscriptions} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
          <InputOption
            Icon={CalendarViewDay}
            title='Write article'
            color='#7FC15E'
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
