import CreateIcon from '@material-ui/icons/Create';
import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from './Post';
import { db } from '../firebase.js';
import firebase from 'firebase/compat/app';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          console.log(doc, 'here');
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: 'Zio',
      description: 'this is a test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className='feed'>
      <div className='div feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder='请描述你的隔离感受'
            />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
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

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
