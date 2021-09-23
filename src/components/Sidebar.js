import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <h1>sidebar</h1>
      <div className='div sidebar_top'>
        <img src='' alt='' />
        <Avatar className='sidebar_avatar' />
        <h2>Sonny</h2>
        <h4>gamilcom</h4>
      </div>
      <div className='sidebar_bottom'></div>
    </div>
  );
}

export default Sidebar;
