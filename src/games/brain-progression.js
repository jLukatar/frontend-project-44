import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const createTenNumProgression = (progressionStart, step, progressionLength) => {
  const progression = [progressionStart];
  let i = 1;
  while (i < progressionLength) {
    progression.push(progression[i - 1] + step);
    i += 1;
  }
  return progression;
};

const taskText = 'What number is missing in the progression?';

const generateRound = () => {
  const progressionStart = generateRandomNumber(1, 100);
  const step = generateRandomNumber(1, 10);
  const progressionLength = generateRandomNumber(5, 10);
  const progression = createTenNumProgression(progressionStart, step, progressionLength);
  const randomIndex = generateRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const roundQuestion = progression.join(' ');
  return { roundQuestion, correctAnswer };
};

export default () => {
  runGame(generateRound, taskText);
};
