#!/usr/bin/env node
import gameLogic from '../index.js';
import greeting from '../greeting.js';

export default () => {
  const gcd = (a, b) => {
    const divisors = [];
    for (let i = 1; i <= a && i <= b; i += 1) {
      if (a % i === 0 && b % i === 0) {
        divisors.push(i);
      }
    }
    return divisors.pop();
  };

  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 100 + 1);
    const secondNum = Math.floor(Math.random() * 100 + 1);
    const question = `${firstNum} ${secondNum}`;
    const rightAnswer = gcd(firstNum, secondNum).toString();
    const result = gameLogic(rightAnswer, userName, question, i);
    if (!result) {
      break;
    }
  }
};
