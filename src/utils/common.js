import { QUESTIONS as BIBLICO } from "../data/Biblico";

const QUESTIONS = { 
    'BIBLICO': BIBLICO,
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let questions = [];

function getQuestion(quiz, starting = false) {
    if (starting) { 
        questions = [...QUESTIONS[quiz]];
        shuffleArray(questions);
    }

    const question = questions[0];

    if (!question) return null;

    shuffleArray(question["answers"]);
    questions.shift();

    return question;
}

export { getQuestion };
