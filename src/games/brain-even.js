#!/usr/bin/env node
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const qestionText = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const generateRound = () => {
    const question = generateRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const round = { roundQuestion: question, correctAnswer };
    return round;
  };
  runGame(generateRound, qestionText);
};
