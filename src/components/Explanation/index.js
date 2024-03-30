import React from 'react';
import './index.css';

const Explanation = ({ children, isCorrect }) => {
  const getClassName = () => {
    if (isCorrect) return 'correct';

    return 'incorrect';
  }

  return (
    <div 
      className={'explanation ' + getClassName()}
    >
      {children}
    </div>
  )
}

export default Explanation;
