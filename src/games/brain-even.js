#!/usr/bin/env node
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { roundQuestion: question, correctAnswer };
};

export default () => {
  runGame(generateRound, questionText);
};
