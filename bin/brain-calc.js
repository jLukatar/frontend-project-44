#!/usr/bin/env node
import gameLogic from '../src/index.js';
import greeting from '../src/greeting.js';

const userName = greeting();
console.log('What is the result of the expression?');
const mathOperations = ['+', '-', '*'];
for (let i = 1; i <= 3; i += 1) {
  const firstNum = Math.floor(Math.random() * 11);
  const secondNum = Math.floor(Math.random() * 11);
  const Operation = mathOperations[Math.floor(Math.random() * 3)];
  const mathProblem = `${firstNum} ${Operation} ${secondNum}`;
  let correctAnswer;
  switch (Operation) {
    case '+':
      correctAnswer = firstNum + secondNum;
      break;
    case '-':
      correctAnswer = firstNum - secondNum;
      break;
    case '*':
      correctAnswer = firstNum * secondNum;
      break;
    default:
      break;
  }
  console.log(correctAnswer);
  correctAnswer = correctAnswer.toString();
  const result = gameLogic(correctAnswer, userName, mathProblem, i);
  if (!result) {
    break;
  }
}
