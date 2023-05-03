#!/usr/bin/env node
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const createTenNumProgression = (progressionStart, constantDifference) => {
  const progression = [progressionStart];
  for (let i = 0; i < 9; i += 1) {
    progression.push(progression[i] + constantDifference);
  }
  return progression;
};

const taskText = 'What number is missing in the progression?';

export default () => {
  const generateRound = () => {
    const progressionStart = generateRandomNumber(1, 100);
    const constantDifference = generateRandomNumber(1, 10);
    const progression = createTenNumProgression(progressionStart, constantDifference);
    const randomIndex = generateRandomNumber(0, 9);
    const correctAnswer = progression[randomIndex].toString();
    progression[randomIndex] = '..';
    const roundQuestion = progression.join(' ');
    const round = { roundQuestion, correctAnswer };
    return round;
  };
  runGame(generateRound, taskText);
};
