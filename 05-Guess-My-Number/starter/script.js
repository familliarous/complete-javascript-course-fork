'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const defaultMessage = document.querySelector('.message').textContent;
const defaultNumber = document.querySelector('.number').textContent;
const defaultGuess = null;
const defaultBodyColor = document.querySelector('body').style.backgroundColor;
let score = 0;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

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
    // document.querySelector('.message').textContent = '⛔ NO NUMBER!';
    displayMessage('⛔ NO NUMBER!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!!!';
    displayMessage('🎉Correct Number!!!');

    document.querySelector('body').style.backgroundColor = 'green';
    score++;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Number is too high!'
          : '📉 Number is too low!'
      );

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
});
