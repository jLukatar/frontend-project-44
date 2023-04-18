#!/usr/bin/env node
import gameLogic from '../src/index.js';
import greeting from '../src/greeting.js';

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 1; i <= 3; i += 1) {
  const number = Math.floor(Math.random() * 100 + 1);
  const isEven = (number % 2 === 0) ? 'yes' : 'no';
  const result = gameLogic(isEven, userName, number, i);
  if (!result) {
    break;
  }
}
