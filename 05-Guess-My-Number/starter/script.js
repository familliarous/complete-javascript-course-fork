'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎉💃🎊';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const defaultMessage = document.querySelector('.message').textContent;
const defaultNumber = document.querySelector('.number').textContent;
const defaultGuess = null;
const defaultBodyColor = document.querySelector('body').style.backgroundColor;
let score = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.again').addEventListener('click', function () {
  score = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = defaultMessage;
  document.querySelector('.number').textContent = defaultNumber;
  document.querySelector('.guess').textContent = defaultGuess;
  document.querySelector('body').style.backgroundColor = defaultBodyColor;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO NUMBER!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!!!';
    document.querySelector('body').style.backgroundColor = 'green';
    score++;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Number is too high!';
      score--;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = 'Game Over! You lost.';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Number is too high!';
      score--;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = 'Game Over! You lost.';
    }
  }
  console.log(document.querySelector('.guess').value);
});
