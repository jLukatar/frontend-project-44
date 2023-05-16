import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const calculate = (operation, number1, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const taskText = 'What is the result of the expression?';

const generateRound = () => {
  const operations = ['+', '-', '*'];
  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);
  const operation = operations[generateRandomNumber(0, 2)];
  const roundQuestion = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculate(operation, num1, num2).toString();
  return { roundQuestion, correctAnswer };
};

export default () => {
  runGame(generateRound, taskText);
};
