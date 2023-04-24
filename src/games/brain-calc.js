import gameLogic from '../index.js';
import greeting from '../greeting.js';

const math = (operation, firstNum, secondNum) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

export default () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  const mathOperations = ['+', '-', '*'];
  for (let i = 1; i <= 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 11);
    const secondNum = Math.floor(Math.random() * 11);
    const operation = mathOperations[Math.floor(Math.random() * 3)];
    const mathProblem = `${firstNum} ${operation} ${secondNum}`;
    const correctAnswer = math(operation, firstNum, secondNum).toString();
    const result = gameLogic(correctAnswer, userName, mathProblem, i);
    if (!result) {
      break;
    }
  }
};
