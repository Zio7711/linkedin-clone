import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import { FiberManualRecord } from '@material-ui/icons';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecord />
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('厦门隔离14天能解除隔离吗', '完全不能！！！！！')}
      {newsArticle(
        '厦门隔离21天后能回新疆吗',
        '能回！但没有飞机，你可以走回去'
      )}
      {newsArticle('厦门隔离完回新疆还用隔离吗', '新疆根本不欢迎你')}
      {newsArticle('厦门疫情', '非常糟糕')}
      {newsArticle('隔离期间做几次核酸', '最少7次')}
    </div>
  );
};

export default Widgets;
