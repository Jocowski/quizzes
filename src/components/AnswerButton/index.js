import React from 'react';
import './index.css';

const AnswerButton = ({ children, onClick, isSelected, isCorrect, isShowingResults }) => {
  const getClassName = () => {
    if (!isShowingResults) return '';

    if (isSelected && !isCorrect) return 'incorrect';

    if (isCorrect) return 'correct';

    return '';
  }

  return (
    <button 
      onClick={onClick}
      className={'answer-button ' + getClassName()}
      disabled={isShowingResults}
    >
      {children}
    </button>
  )
}

export default AnswerButton;
