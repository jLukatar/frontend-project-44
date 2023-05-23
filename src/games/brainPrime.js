import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => {
  runGame(generateRound, description);
};
