#!/usr/bin/env node
import gameLogic from '../index.js';
import greeting from '../greeting.js';

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
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    const rightAnswer = isPrime(randomNum) ? 'yes' : 'no';
    const result = gameLogic(rightAnswer, userName, randomNum, i);
    if (!result) {
      break;
    }
  }
};
