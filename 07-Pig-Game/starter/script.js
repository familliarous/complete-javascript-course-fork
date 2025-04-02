'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

buttonRoll.addEventListener('click', function () {
  // 1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player
});
