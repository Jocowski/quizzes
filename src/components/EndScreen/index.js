import React from 'react';

import Button from '../Button';
import Subtitle from '../Subtitle';
import Container from '../Container';

const EndScreen = ({ handleStart, score }) => {
    return (
        <Container>
            <Subtitle>Pontuação: {score}</Subtitle>
            <Button onClick={handleStart}>Tentar Novamente!</Button>
        </Container>
    )
}

export default EndScreen;
