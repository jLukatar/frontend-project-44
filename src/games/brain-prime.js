#!/usr/bin/env node
import gameLogic from '../index.js';
import greeting from '../greeting.js';

export default () => {
  const userName = greeting();
  const arrOfPrimeNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97];
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    const rightAnswer = arrOfPrimeNum.includes(randomNum) ? 'yes' : 'no';
    const result = gameLogic(rightAnswer, userName, randomNum, i);
    if (!result) {
      break;
    }
  }
};
