#!/usr/bin/env node
import gameLogic from '../src/index.js';
import greeting from '../src/greeting.js';

const userName = greeting();
console.log('What number is missing in the progression?');
for (let i = 1; i <= 3; i += 1) {
  const progressionStart = Math.floor(Math.random() * 100 + 1);
  const constantDifference = Math.floor(Math.random() * 10 + 1);
  const progression = [progressionStart];
  const randomIndex = Math.floor(Math.random() * 10);
  for (let j = 0; j < 9; j += 1) {
    progression.push(progression[j] + constantDifference);
  }
  const missingNum = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const result = gameLogic(missingNum, userName, question, i);
  if (!result) {
    break;
  }
}
