#!/usr/bin/env node
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const generateRound = () => {
    const roundQuestion = generateRandomNumber(1, 100);
    const correctAnswer = isPrime(roundQuestion) ? 'yes' : 'no';
    const round = { roundQuestion, correctAnswer };
    return round;
  };
  runGame(generateRound, taskText);
};
