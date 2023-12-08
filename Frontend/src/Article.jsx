import React from 'react';
import './Article.css';

function Article({heading,text}) {
  return (
    <div className='article'>
        <h1>{heading}</h1>
        <p>{text}</p>
        <p className='read-more'>Read More</p>
    </div>
  )
}

export default Article