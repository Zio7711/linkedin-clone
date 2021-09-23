import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='div sidebar_top'>
        <img src='/background_sidebar.jpg' alt='' />
        <Avatar className='sidebar_avatar' />
        <h2>Sonny</h2>
        <h4>zi.ao.tan@outlook.com</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you</p>
          <p className='sidebar_statNumber'>3324</p>
        </div>

        <div className='sidebar_stat'>
          <p>viewed on posts</p>
          <p className='sidebar_statNumber'>3324</p>
        </div>
      </div>

      <div className='sidebar_bottom'>
        <p>recent</p>
        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
      </div>
    </div>
  );
}

export default Sidebar;
