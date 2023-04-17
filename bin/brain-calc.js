#!/usr/bin/env node
import gameLogic from '../src/index.js'
import greeting from '../src/greeting.js'

const userName = greeting();
console.log('What is the result of the expression?');
const mathOperations = ['+','-','*'];
for (let i = 1; i <= 3; i += 1) {
  const firstNum = Math.floor(Math.random() * 101 );
  const secondNum = Math.floor(Math.random() * 101 );
  const Operation = mathOperations[Math.floor(Math.random() * 3)];
  const mathProblem = `${firstNum} ${Operation} ${secondNum}`;
  const correctAnswer = (eval(mathProblem)).toString();
  const result = gameLogic(correctAnswer, userName, mathProblem, i);
  if (!result){
    break;
  }
}