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

const description = 'What is the result of the expression?';

const generateRound = () => {
  const operations = ['+', '-', '*'];
  const number1 = generateRandomNumber(1, 10);
  const number2 = generateRandomNumber(1, 10);
  const operation = operations[generateRandomNumber(0, operations.length - 1)];
  const question = `${number1} ${operation} ${number2}`;
  const answer = calculate(operation, number1, number2).toString();
  return { question, answer };
};

export default () => {
  runGame(generateRound, description);
};
