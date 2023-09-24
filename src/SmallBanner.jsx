import React from 'react';
import './SmallBanner.css';

function SmallBanner({category,quote,customClass}) {
  return (
    <div className={`small-banner ${customClass}`}>
        <h3>{category}</h3>
        <p>{quote}</p>
        <div className='shop-now-button'>Shop now</div>
    </div>
  )
}

export default SmallBanner