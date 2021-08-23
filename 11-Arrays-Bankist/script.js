'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// SIMPLE ARRAY METHODS
/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE():
console.log(arr.slice(2)); // Array(3) ['c', 'd', 'e']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']

// SLICE() TO CREATE A SHALLOW COPY
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// SPLICE(): changes the original array, where slice() does not
console.log(arr.splice(2)); // ["c", "d", "e"]
console.log(arr); // ["a", "b"]

console.log(arr.splice(2)); // ["c", "d", "e"]
arr.splice(-1); // ["a", "b", "c", "d"]
console.log(arr);
arr.splice(1, 2);
console.log(arr); // ["a", "d"]

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

// REVERSE() DOES MUTATE THE 'ORIGINAL' ARRAY
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j'];
console.log(arr2); // ['f', 'g', 'h', 'i', 'j'];

// concat(): does NOT MUTATE any of the original arrays
const letters = arr.concat(arr2); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(letters);
console.log(...arr, ...arr2); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// join()
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

/////////////////////////////////////////////////
// LOOPING ARRAYS: forEach() methods
/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  // for (const movement of movements) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// forEach: higher-order function, forEach will call the function, uses callback method
console.log('---- FOR EACH ----');
movements.forEach(function (mov, i, arr) {
  // movements.forEach(function (movement) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...etc

/////////////////////////////////////////////////
// LOOPING MAPS/SETS: forEach() methods
/////////////////////////////////////////////////
// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET: DOESN'T HAVE KEYS so key in the parameter doesn't make sense but it was decided to keep the same parameters in the callback function
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR']);
console.log(currenciesUnique);

// a throw away syntax of _ is used for a value that is not used but needs to be written there
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
// USD: USD
// GBP: GBP
// EUR: EUR

/////////////////////////////////////////////////
// PROJECT: "Bankist" App
/////////////////////////////////////////////////
