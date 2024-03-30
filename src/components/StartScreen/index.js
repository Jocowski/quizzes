import React from 'react';

import Button from '../Button';

const StartScreen = ({ handleStart }) => {
    return (
        <Button onClick={handleStart}>Iniciar Quiz</Button>
    )
}

export default StartScreen;
