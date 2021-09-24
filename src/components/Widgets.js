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
      {newsArticle('Papa Recent is back', 'Top News')}
      {newsArticle('Papa Recent is back', 'Top News')}
      {newsArticle('Papa Recent is back', 'Top News')}
      {newsArticle('Papa Recent is back', 'Top News')}
      {newsArticle('Papa Recent is back', 'Top News')}
    </div>
  );
};

export default Widgets;
