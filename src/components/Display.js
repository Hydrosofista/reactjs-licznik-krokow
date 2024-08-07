import React from 'react';
import './Display.css';

const Display = ({ currentValue }) => {
  return (
    <div className='display'>
      Licznik: {currentValue}
    </div>
  );
};

export default Display;
