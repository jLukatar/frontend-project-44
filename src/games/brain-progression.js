#!/usr/bin/env node
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

export default () => {
  const taskText = 'What number is missing in the progression?';
  const rounds = [];
  for (let i = 1; i <= 3; i += 1) {
    const progressionStart = generateRandomNumber(100, 1);
    const constantDifference = generateRandomNumber(10, 1);
    const progression = [progressionStart];
    const randomIndex = generateRandomNumber(10);
    for (let j = 0; j < 9; j += 1) {
      progression.push(progression[j] + constantDifference);
    }
    const correctAnswer = progression[randomIndex].toString();
    progression[randomIndex] = '..';
    const question = progression.join(' ');
    rounds.push({ question, correctAnswer });
  }
  runGame(rounds, taskText);
};
