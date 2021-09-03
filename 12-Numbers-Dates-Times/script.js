'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES: PHP & Ruby also do it this way. Therefore, you cannot do very specific scientific calculations with these languages.
console.log(23 === 23.0);

// BASE 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.33333333
// BINARY BASE 2 - 0 1.
console.log(0.1 + 0.2); // 0.3000000000004 in javaScript

// CONVERTING STRINGS TO NUMBERS
console.log(Number('23'));
// this will also work because of type cohersion
console.log(+'23');

// PARSING: SHOULD ALWAYS WRITE 10 AS SECOND TO AVOID BUGS. RESEARCH WHYYYY FURTHER?
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN - because it does NOT start with a number

// PARSE FLOAT
console.log(Number.parseInt('2.5rem')); // 2

// this also works, but the above is BEST PRACTICE for modern JS
// console.log(parseFloat(' 2.5rem   ')); // 2.5

// ONLY use to check if a value is NaN
console.log(Number.isNaN(20)); // FALSE
console.log(Number.isNaN('20')); // FALSE
console.log(Number.isNaN(+'20X')); // TRUE
console.log(Number.isNaN(23 / 0)); // FALSE

// Checking if value is a number
// THIS IS BETTER TO CHECK IF A NUMBER IS A NUMBER OR NOT *******
console.log(Number.isFinite(20)); // true, checks if a number is finite (a countable number less than infinite)
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false

console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

//////////////////////////////////////////////////////////////
// MATH AND ROUNDING
//////////////////////////////////////////////////////////////
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1); // gives a random number without a decimal pt.

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
// Math.random: gives a number between 0 - 1
// then, 0... (max - min) -> min ... max

console.log(randomInt(10, 20));

// removes decimal points
console.log(Math.trunc(23.3)); // 23

// ROUND
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// ROUND UP
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// ROUND DOWN
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// FLOOR IS BETTER FOR ALL SITUATIONS BECAUSE TRUNC ROUNDS DOWN IN A NEGATIVE INPUTS
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// ROUNDING DECIMALS
console.log((2.7).toFixed(0)); // will always RETURN A STRING ->  3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35

// TO CONVERT STRING TO A NUMBER
console.log(+(2.345).toFixed(2)); // 2.35

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2 -> 2.6666666665

console.log(6 / 2); // 6

console.log(7 % 2); // 1
console.log(7 / 2); // 3.5

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

// USE WHENEVER YOU NEED TO DO SOMETHING EVERY 'Nth' TIME
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements_row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

//////////////////////////////////////////////////////
// WORKING WITH BIGINT
//////////////////////////////////////////////////////
// 2 because we are working with base 2, which is zeroes and ones
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991.. javaScript even has this to show number that is largest, if you console.log the following below it is not correct

// these are called UNSAFE NUMBERS
console.log(2 ** 53 + 1); // ONLY ADDED ONE NUMBER AND NOT 2

// bigInt was added in 2020, used to store integers no matter how big
console.log(456789123456465546546543541685797351n);
// the 'n' at the end uses this to display large numbers accurately

console.log(BigInt(456789123456465546546543541685797351));

// OPERATIONS
console.log(10000n + 10000n); // 20000n
console.log(12746546579873213216546546n * 1000000000n);

// *** CANNOT MIX REGULAR NUMBERS WITH BIG INT NUMBERS
const huge = 20346546546n;
const num = 23;
// console.log(huge * num); // ERROR
console.log(huge * BigInt(num));

console.log(20n > 15); // true
console.log(20n === 20); // false : this makes sense because type cohersion is not used here. we can check that by doing the following
console.log(typeof 20n); // bigInt
console.log(20n == 20); // true because JS does the type cohersion

console.log(huge + ' is REALLY big!!!'); //

// cannot do math operations with big Int

// Divisions
console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.333333333335

//////////////////////////////////////////////////////
// CREATING DATES
//////////////////////////////////////////////////////
// 1.
const now = new Date();
console.log(now); // RETURNS CURRENT DATE: in the following format -> Friday Sep 03 2021 08:19 GMT-0700 (Pacific Daylight Time)

// 2.
console.log(new Date('Aug 20 2020 18:05:41'));
console.log(new Date('December 24, 2015')); // NOT a good practice to do this because it is UNRELIABLE
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05
console.log(new Date(2037, 10, 33)); // js autocorrects to December 01

console.log(new Date(0)); // Thu Jan 01 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDay()); // 4
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T23:23:00.000Z
console.log(future.getTime()); // 2142285780000

console.log(new Date(2142285780000)); // gives the date based on the milliseconds that have passed since jan 1 1970

console.log(Date.now); // gives the current date in milliseconds for the current time

future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:00 GMT+0000
