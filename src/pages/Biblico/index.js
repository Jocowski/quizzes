import React, { useState } from 'react'

import Title from '../../components/Title';
import StartScreen from '../../components/StartScreen';
import QuizScreen from '../../components/QuizScreen';
import EndScreen from '../../components/EndScreen';

const Biblico = () => {
    const [screen, setScreen] = useState('start');
    const [score, setScore] = useState(0);

    const handleStart = () => {
        setScore(0);
        setScreen('quiz');
    }

    const handleEnd = () => {
        setScreen('end');
    }

    return (
        <div>
            <Title>Quiz Biblico</Title>
            { screen === 'start' && <StartScreen handleStart={handleStart} /> }
            { screen === 'quiz' && <QuizScreen handleEnd={handleEnd} setScore={setScore} /> }
            { screen === 'end' && <EndScreen handleStart={handleStart} score={score} /> }
        </div>
    )
}

export default Biblico;
