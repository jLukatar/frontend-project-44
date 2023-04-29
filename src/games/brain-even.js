#!/usr/bin/env node
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

export default () => {
  const qestionText = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i <= 3; i += 1) {
    const question = generateRandomNumber(100, 1);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    const round = { question, correctAnswer };
    rounds.push(round);
  }
  runGame(rounds, qestionText);
};
