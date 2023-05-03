import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const calculate = (operation, umber1, number2) => {
  switch (operation) {
    case '+':
      return umber1 + number2;
    case '-':
      return umber1 - number2;
    case '*':
      return umber1 * number2;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const taskText = 'What is the result of the expression?';

export default () => {
  const mathOperations = ['+', '-', '*'];
  const generateRound = () => {
    const firstNum = generateRandomNumber(1, 10);
    const secondNum = generateRandomNumber(1, 10);
    const operation = mathOperations[generateRandomNumber(0, 2)];
    const roundQuestion = `${firstNum} ${operation} ${secondNum}`;
    const correctAnswer = calculate(operation, firstNum, secondNum).toString();
    const round = { roundQuestion, correctAnswer };
    return round;
  };
  runGame(generateRound, taskText);
};
