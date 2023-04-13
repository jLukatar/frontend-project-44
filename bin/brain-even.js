#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 1; i <= 3; i += 1) {
  const number = Math.floor(Math.random() * 100 + 1);
  const isEven = (number % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (isEven === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
    console.log(`Let's try again, ${userName}`);
    break;
  }
}
