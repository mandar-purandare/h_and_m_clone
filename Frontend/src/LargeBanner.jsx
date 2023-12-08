import React from 'react';
import './LargeBanner.css';
import SmallBanner from './SmallBanner';

function LargeBanner({heading,text,customClass,backgroundImage}) {

  return (
    <div className={`large-banner ${backgroundImage}`}>
      <SmallBanner customClass={customClass} category={heading} quote={text}/>
    </div>
  )
}

export default LargeBanner