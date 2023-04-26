import gameLogic from '../index.js';
import randomNum from '../utils.js';

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
  const taskText = 'What is the result of the expression?';
  const mathOperations = ['+', '-', '*'];
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomNum(11);
    const secondNum = randomNum(11);
    const operation = mathOperations[randomNum(3)];
    const question = `${firstNum} ${operation} ${secondNum}`;
    const correctAnswer = math(operation, firstNum, secondNum).toString();
    const round = { question, correctAnswer };
    rounds.push(round);
  }
  gameLogic(rounds, taskText);
};
