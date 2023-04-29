#!/usr/bin/env node
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

export default () => {
  const findGcd = (a, b) => {
    const divisors = [];
    for (let i = 1; i <= a && i <= b; i += 1) {
      if (a % i === 0 && b % i === 0) {
        divisors.push(i);
      }
    }
    return divisors.pop();
  };
  const rounds = [];
  const taskText = 'Find the greatest common divisor of given numbers.';
  for (let i = 1; i <= 3; i += 1) {
    const firstNum = generateRandomNumber(100, 1);
    const secondNum = generateRandomNumber(100, 1);
    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = findGcd(firstNum, secondNum).toString();
    rounds.push({ question, correctAnswer });
  }
  runGame(rounds, taskText);
};
