import React from 'react';
import './LeftMenu.css';

function LeftMenu({heading,options}) {
  return (
    <div>
        <h4>{heading}</h4>
        {options.map(option => <p>{option}</p>)}
    </div>
  )
}

export default LeftMenu