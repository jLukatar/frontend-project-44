import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const calculate = (operation, firstNum, secondNum) => {
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
  const taskText = 'What is the result of the expression?';
  const mathOperations = ['+', '-', '*'];
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNum = generateRandomNumber(11);
    const secondNum = generateRandomNumber(11);
    const operation = mathOperations[generateRandomNumber(3)];
    const question = `${firstNum} ${operation} ${secondNum}`;
    const correctAnswer = calculate(operation, firstNum, secondNum).toString();
    const round = { question, correctAnswer };
    rounds.push(round);
  }
  runGame(rounds, taskText);
};
