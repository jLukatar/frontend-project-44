import readlineSync from 'readline-sync';

const gameLogic = (correctAnswer, userName, question, i) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}`);
    return false;
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  return true;
};

export default gameLogic;
