'use strict';

// console.log(document.querySelector('.message').textContent);
// // this line changes the text content
// document.querySelector('.message').textContent = 'Correct Number! 🙌🏽';

// // shows changes on screen
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// // writes 23 in user input box
// document.querySelector('.guess').value = 23;
// // to get the value we use the value property
// console.log(document.querySelector('.guess').value);

// EVENT LISTENER

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// the score is the state
let score = 20;
document.querySelector('.number').textContent = secretNumber;

// CHECK to make sure this appears in console using (cmd + i)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 1st input is to assume there is NO input value
  if (!guess) {
    document.querySelector('.message').textContent = '👹 No number!';
    // equal to secretNumber
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🙌🏽 Correct Number!';
  } else if (guess > secretNumber) {
    // NESTED IF
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      // decrease the score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      // decrease the score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// TODO: Manipulating CSS Styles
