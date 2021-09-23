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
        <img
          src='https://img0.baidu.com/it/u=191195036,3000560180&fm=26&fmt=auto'
          alt=''
        />
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
        {recentItem('厦门隔离好烦啊')}
        {recentItem('隔离21天酒店应该干啥')}
        {recentItem('隔离酒店每日三餐')}
        {recentItem('如何调整隔离心态')}
        {recentItem('加拿大回新疆辛酸史')}
      </div>
    </div>
  );
}

export default Sidebar;
