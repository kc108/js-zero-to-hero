'use strict';

console.log(document.querySelector('.message').textContent);
// this line changes the text content
document.querySelector('.message').textContent = 'Correct Number! 🙌🏽';

// shows changes on screen
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// writes 23 in user input box
document.querySelector('.guess').value = 23;
// to get the value we use the value property
console.log(document.querySelector('.guess').value);

// EVENT LISTENER
// CHECK to make sure this appears in console using (cmd + i)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 1st input is to assume there is NO input value
  if (!guess) {
    document.querySelector('.message').textContent = '👹 No number!';
  }
});
