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

export default () => {
  const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];
  for (let i = 1; i <= 3; i += 1) {
    const question = generateRandomNumber(100, 1);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    rounds.push({ question, correctAnswer });
  }
  runGame(rounds, taskText);
};
