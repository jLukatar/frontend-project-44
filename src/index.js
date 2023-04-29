import readlineSync from 'readline-sync';

const runGame = (rounds, taskText) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(taskText);
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${rounds[i].question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rounds[i].correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rounds[i].correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};

export default runGame;
