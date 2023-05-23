import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const createProgression = (start, step, Length) => {
  const progression = [start];
  for (let i = 1; i < Length; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const progressionStart = generateRandomNumber(1, 100);
  const step = generateRandomNumber(1, 10);
  const progressionLength = generateRandomNumber(5, 10);
  const progression = createProgression(progressionStart, step, progressionLength);
  const hiddenIndex = generateRandomNumber(0, progressionLength - 1);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

export default () => {
  runGame(generateRound, description);
};
