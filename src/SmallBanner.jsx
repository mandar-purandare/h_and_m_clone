import React from 'react';
import './SmallBanner.css';

function SmallBanner({category,quote}) {
  return (
    <div className='small-banner'>
        <h3>{category}</h3>
        <p>{quote}</p>
        <button>Shop Now</button>
    </div>
  )
}

export default SmallBanner