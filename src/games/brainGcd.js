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

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNum = generateRandomNumber(1, 100);
  const secondNum = generateRandomNumber(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = findGcd(firstNum, secondNum).toString();
  return { question, answer };
};

export default () => {
  runGame(generateRound, description);
};
