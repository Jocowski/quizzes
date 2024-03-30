import React from 'react';
import './index.css';

const Button = ({ children, onClick, hidden }) => {
  return (
    <button 
      className='button'
      onClick={onClick}
      style={{ display: hidden ? 'none' : 'block' }}
    >
      {children}
    </button>
  )
}

export default Button;
