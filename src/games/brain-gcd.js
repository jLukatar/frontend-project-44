import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const findGcd = (a, b) => {
  const divisors = [];
  for (let i = 1; i <= a && i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.pop();
};

const taskText = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNum = generateRandomNumber(1, 100);
  const secondNum = generateRandomNumber(1, 100);
  const roundQuestion = `${firstNum} ${secondNum}`;
  const correctAnswer = findGcd(firstNum, secondNum).toString();
  return { roundQuestion, correctAnswer };
};

export default () => {
  runGame(generateRound, taskText);
};
