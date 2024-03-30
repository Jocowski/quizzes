import React, { useEffect, useState } from 'react';

import Container from '../Container';
import Subtitle from '../Subtitle';
import AnswerButton from '../AnswerButton';
import Button from '../Button';
import Explanation from '../Explanation';

import { getQuestion } from '../../utils/common';

const QuizScreen = ({ setScore, handleEnd }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showingExplanation, setShowingExplanation] = useState(false);

    useEffect(() => {
        const startQuiz = () => {
            const question = getQuestion("BIBLICO", true);
            
            setCurrentQuestionIndex(0);
            setSelectedAnswer(null);
            setCurrentQuestion(question);
        };

        startQuiz();
    }, []);

    const fetchQuestion = (starting = false) => {
        const question = getQuestion("BIBLICO", starting);
        setCurrentQuestion(question);

        if (!question) handleEnd();
    };

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);

        if (answer.id === currentQuestion.correctAnswerId) {
            setScore(prev => prev + 1);
            return;
        }
    }

    const handleNextQuestion = () => {
        setShowingExplanation(false);
        setSelectedAnswer(null);
        setCurrentQuestionIndex(prev => prev + 1);
        fetchQuestion();
    }

    const isSelected = (answerId) => selectedAnswer && selectedAnswer.id === answerId;
    const isCorrect = (answerId) => currentQuestion.correctAnswerId === answerId;
    const isShowingResults = () => !!selectedAnswer;

    return (
        <div>
            { currentQuestion &&
                <Container>
                    <Subtitle>{currentQuestionIndex+1}. {currentQuestion.question}</Subtitle>
                    <div>
                        { !showingExplanation && currentQuestion.answers.map(answer => (
                            <AnswerButton 
                                key={answer.id} 
                                onClick={() => handleAnswer(answer)}
                                isSelected={isSelected(answer.id)}
                                isCorrect={isCorrect(answer.id)}
                                isShowingResults={isShowingResults()}
                            >
                                {answer.text}
                            </AnswerButton>
                        ))}
                    </div>
                </Container>
            }
            { showingExplanation && 
                <>
                    <Explanation isCorrect={true}>
                        { currentQuestion.answers.find(answer => answer.id === currentQuestion.correctAnswerId).explanation }
                    </Explanation>
                    { selectedAnswer.id !== currentQuestion.correctAnswerId && 
                        <Explanation isCorrect={false}>
                            { selectedAnswer.explanation }
                        </Explanation>
                    }
                </>
            }
            { isShowingResults() && 
                <div style={{ display: 'flex' }}>
                    <Button onClick={() => setShowingExplanation(prev => !prev)}>{ showingExplanation ? 'Esconder' : 'Mostrar' } Explicação</Button>
                    <Button onClick={handleNextQuestion}>Próxima Questão</Button>
                </div> 
            }
        </div>
    )
}

export default QuizScreen;
