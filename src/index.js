import readlineSync, { question } from 'readline-sync';

const runGame = (generateRound, taskText) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(taskText);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const { roundQuestion, correctAnswer } = generateRound();
    console.log(`Question: ${roundQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
