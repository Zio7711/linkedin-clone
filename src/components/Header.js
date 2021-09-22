import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <img
          src='https://img0.baidu.com/it/u=1628971908,1325531955&fm=26&fmt=auto'
          alt=''
        />
        <div className='header_search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header_right'>
        <HeaderOption title='Home' />
        <HeaderOption title='My Network' />
      </div>
    </div>
  );
};

export default Header;
