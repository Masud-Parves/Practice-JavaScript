'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');

// Total Information
const totalScore0El = document.getElementById('current--0');
const totalScore1El = document.getElementById('current--1');

// Player Information
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Button Information
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Golbal Elements
let score;
let leftScore;
let rightScore;

const initGame = function () {
  // Initial Condition
  score0El.textContent = 0;
  score1El.textContent = 0;
  totalScore0El.textContent = 0;
  totalScore1El.textContent = 0;
  diceImage.classList.add('hidden');

  // Golbal Initial Elements
  score = 0;
  leftScore = 0;
  rightScore = 0;
};

initGame();

const activePlayer0 = function () {
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
};

const activePlayer1 = function () {
  player0El.classList.remove('player--active');
  player1El.classList.add('player--active');
};

btnRoll.addEventListener('click', function () {
  console.log('Player Roll The Dice!');
  const dice = Math.trunc(Math.random() * 6 + 1);
  const diceImageName = `dice-${dice}.png`;
  diceImage.src = diceImageName;

  if (dice == 1) {
    score = 0;
    if (player0El.classList.contains('player--active')) {
      leftScore = 0;
      score0El.textContent = score;
      activePlayer1();
    } else if (player1El.classList.contains('player--active')) {
      rightScore = 0;
      score1El.textContent = score;
      activePlayer0();
    }
  } else {
    score += dice;
    player0El.classList.contains('player--active')
      ? (score0El.textContent = score)
      : (score1El.textContent = score);
  }
});

btnHold.addEventListener('click', function () {
  console.log('Hold Button Pressed!');
  if (player0El.classList.contains('player--active')) {
    leftScore += score;
    totalScore0El.textContent = leftScore;
    activePlayer1();
  } else if (player1El.classList.contains('player--active')) {
    rightScore += score;
    totalScore1El.textContent = rightScore;
    activePlayer0();
  }
  score = 0;
});

btnNew.addEventListener('click', function () {
  console.log('Again New Game!');
  initGame();
});
