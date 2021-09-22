import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <img src='' alt='' />
        <div className='header_search'>
          <input type='text' />
        </div>
      </div>
      <div className='header_right'></div>
    </div>
  );
};

export default Header;
