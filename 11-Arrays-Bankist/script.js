'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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

// Creating DOM Elements
/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // cannot do this or it will sort the underlying array/data, instead we do a copy of the array using slice like below
  // const movs = sort ? movements.sort()
  // const movs = sort ? movements.slice().sort()

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance} EUR`;
};

// calcDisplayBalance(account1.movements); // 3840 is now displayed in the DevConsole

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// we do NOT have to return anything because we are doing what is called a 'side effect'.. basically some work behind the scenes
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      // implicit RETURN: Arrow Function w/One Parameter
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts); // stw
// console.log(accounts); // console.log to show the username is now showing the 3 initials of user (e.g., js, js, stw, ss... etc)

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
  console.log('LOGIN');
};

// EVENT HANDLER: CLICKING OR HITTING ENTER REGISTERS CLICK EVENT
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // PREVENT FORM FROM SUBMITTING
  e.preventDefault();

  //   console.log('LOGIN'); // FLASHES 'LOGIN'
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount); // {owner: "Jessica Davis"}...object

  // OPTIONAL CHAINING: '?' following currentAccount
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// EVENT HANDLER: to transfer money
btnTransfer.addEventListener('click', function (e) {
  // common to do with forms
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = '';
  // try in devConsole

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

  const amount = Number(inputLoanAmount.value);

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
  // console.log('Delete');

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // splice() mutates underlying array
    // Delete account
    accounts.splice(index, 1);

    // .indexOf(23) // -> will ONLY search for actual property, WHEREAST findIndex will find either
  }
});

// FILTER()
// This is the modern ES6 way  of doing it
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits); // [200, 450, 3000, 70, 1300]

// the above is the best practice because you can chain them all together
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); // [200, 450, 3000, 70, 1300]

// // Create array of withdrawals
// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });

// ES6: Arrow function
const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals); // [-400, -650, -130]

// just to show what's in movements before reviewing REDUCE()
// [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements);

// REDUCE()
// 1st: accumulator -> like a SNOWBALL, 'current'
// 2nd: current value, meaning the number in the array that is being 'worked on'
// 3rd: i = current index
// 4th: entire array
// 0 below is the INITIAL VALUE
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance); // 3840

// *** ARROW FUNCTION ***
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance); // 3840

// *** REDUCE IS A BETTER PRACTICE THAN A 'FOR' LOOP
// for loop same idea as above
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); // SAME RESULT AS ABOVE

// Maximum value
// can use reduce() can be a string or object does NOT have to be numbers
// ask what you want the 'purpose of the acc': this will be to keep track of the max value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); // 3000

// const user = 'Steven Thomas Williams'; // stw
// const username = user
//   .toLowerCase()
//   .split(' ')
//   // implicit RETURN: Arrow Function w/One Parameter
//   .map(name => name[0])
//   .join('');

// console.log(username); // ["s", "t", "w"] before .join('')
// console.log(username); // stw after .join('')
// join(): creates and returns a new string by concatenating all of the elements in an array (or an array-like object)

// console.log(containerMovements.innerHTML);
// // SHOWS ALL OF THE HTML WE JUST CREATED

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // SECOND PARAMETER, THE SORT PARAMETER IS SET TO TRUE
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// /////////////////////////////////////////////////
// // SIMPLE ARRAY METHODS
// /////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE():
// console.log(arr.slice(2)); // Array(3) ['c', 'd', 'e']
// console.log(arr.slice(-2)); // ['d', 'e']
// console.log(arr.slice(2, 4)); // ['c', 'd']

// // SLICE() TO CREATE A SHALLOW COPY
// console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// // SPLICE(): changes the original array, where slice() does not
// console.log(arr.splice(2)); // ["c", "d", "e"]
// console.log(arr); // ["a", "b"]

// console.log(arr.splice(2)); // ["c", "d", "e"]
// arr.splice(-1); // ["a", "b", "c", "d"]
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr); // ["a", "d"]

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// // REVERSE() DOES MUTATE THE 'ORIGINAL' ARRAY
// console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j'];
// console.log(arr2); // ['f', 'g', 'h', 'i', 'j'];

// // concat(): does NOT MUTATE any of the original arrays
// const letters = arr.concat(arr2); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// console.log(letters);
// console.log(...arr, ...arr2); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// // join()
// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// /////////////////////////////////////////////////
// // LOOPING ARRAYS: forEach() methods
// /////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   // for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// // forEach: higher-order function, forEach will call the function, uses callback method
// console.log('---- FOR EACH ----');
// movements.forEach(function (mov, i, arr) {
//   // movements.forEach(function (movement) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(mov)}`);
//   }
// });

// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ...etc

// /////////////////////////////////////////////////
// // LOOPING MAPS/SETS: forEach() methods
// /////////////////////////////////////////////////
// // MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SET: DOESN'T HAVE KEYS so key in the parameter doesn't make sense but it was decided to keep the same parameters in the callback function
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// // a throw away syntax of _ is used for a value that is not used but needs to be written there
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
// // USD: USD
// // GBP: GBP
// // EUR: EUR

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// 1.
const checkDogs = function (dogsJulia, dogsKate) {
  // slice(): returns a shallow copy of a portion of the array
  const dogsJuliaCorrected = dogsJulia.slice();
  // 1st element 0, and want to remove one element
  dogsJuliaCorrected.splice(0, 1);
  // Remove last 2
  dogsJuliaCorrected.splice(-2);
  // could also use slice INSTEAD OF SPLICE
  // dogsJulia.slice(1, 3);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs); // [5, 2, 4, 1, 15, 8, 3]

  // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });

  console.log(dogsJuliaCorrected); // (2) [5, 2]
};

// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// // *** THESE TEST DATAS BOTH CHECK OUT ***

// /////////////////////////////////////////////////////////
// // MAP(), FILTER(), REDUCE()
// ////////////////////////////////////////////////////////
// // map(): similar to forEach() BUT creates a new array based on the original array
// // maps the values of the original array to a new array, more useful than a forEach()

// // filter(): returns a NEW ARRAY containing the array elements that passed a specified TEST CONDITION
// // ALL OTHER elements will be filtered out

// // reduce(): reduce boils ("reduces") all array elements down to one single value (e.g., adding all elements together)

// /////////////////////////////////////////////////////////
// // MAP()
// ////////////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // convert these to USD from EURO'S
// // this is considered the modern way, using functional programming
// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });

// // an ARROW FUNCTION : many people do NOT like the way this looks..
// // mainly because the RETURN is implicit with one argument
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// // with RETURN keyword
// // const movementsUSD = movements.map(mov => return mov * eurToUsd);

// console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movementsUSD); // [220, 495, -440, 3300, -715, -143]

// // OLD WAY
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSD.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementDescriptions = movements.map((mov, i, arr) => {
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//     mov
//   )}`;

//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// });

// console.log(movementDescriptions); // ["Movement 1: You deposited 200", "Movement 2: You deposited 450"]... etc....

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  // 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges); // [36, 4, 32, 2, 76, 48, 28]
  console.log(adults); // [36, 32, 76, 48, 28]

  // 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // can also do it this way
  const average = adults.reduce((acc, age, i, arr) => acc + arr.length, 0);

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); // [36, 4, 32, 2, 76, 48, 28]
const avg2 = calcAverageHumanAge([36, 32, 76, 48, 28]);
console.log(avg1, avg2); // 44, 192

// /////////////////////////////////////////////////
// THE MAGIC OF CHAINING METHODS
// /////////////////////////////////////////////////
// filter will return a new array, so we can then call the map() on that array
// as long as they return a NEW ARRAY you can CHAIN THEM..
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map((acc, mov) => acc + mov, 0);
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); // -1298.0000000002

// /////////////////////////////////////////////////
// THE find() method
// /////////////////////////////////////////////////\

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal); // -400

// just to show what is in the array of objects
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); // {owner: "Jessica Davis"}... object is returned

// /////////////////////////////////////////////////
// *** CODE WARS PRACTICE ***
// /////////////////////////////////////////////////\
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'

function solution(str) {
  return str.split('').reverse().join('');
}
console.log(solution('Kim')); // miK

// FIND MULTIPLES OF A NUMBER
function findMultiples(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
}

// find max value
const expression = (a, b, c) =>
  Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);
console.log(2, 4, 6);

// split()
const str = 'The quick brown fox jumps over the lazy dog';

const words = str.split(' ');
console.log(words[3]); // fox

const strCopy = str.split();
console.log(strCopy); // copy of the string

console.log(movements);
// INCLUDES : Specifies EQUALITY
console.log(movements.includes(-130)); // RETURNS A 'true' or 'false' in this case it RETURNS 'true'

// CONDITION
console.log(movements.some(mov => mov === -130)); // true

///////////////////////////////////////////////////////////
// SOME AND EVERY
///////////////////////////////////////////////////////////
// SOME: CONDITION
// specifies a CONDITION
const anyDeposits1 = movements.some(mov => mov > 0);
const anyDeposits2 = movements.some(mov => mov > 1500);
console.log(anyDeposits1); // true
console.log(anyDeposits2); // true

// EVERY
console.log(movements.every(mov => mov > 0)); // false because they are not all deposits
console.log(account4.movements.every(mov => mov > 0)); // true because they are ALL deposits

// SEPARATE CALLBACK
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // [200, 450, 3000, 70, 1300]

/////////////////////////////////////////////////
// FLAT AND FLATMAP
/////////////////////////////////////////////////
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// flat RELEASED in 2019 THEREFORE won't work in earlier browsers
console.log(arr.flat()); // [1,2,3,4,5,6]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // 0: (2), 3, 4, Array(2), 7, 8]
// 0: (2) [1, 2]
// 1: 3
// 2: 4
// 3: (2) [5, 6]
// 4: 7
// 5: 8
// length: 6

// to use 2 levels deep put x inside of flat
const arrDeep1 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep1.flat(2));
// [1, 2, 3, 4, 5, 6, 7, 8]

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
// THIS add's up all of the balances to the array.

// Condensing the above can do this
// FLAT
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); //17840

// flatmap, combines both flat and map together
// flatmap: only goes one level deep, if you need multiple levels do above
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

//////////////////////////////////////////////////////////
// SORTING ARRAYS
//////////////////////////////////////////////////////////
// BE CAREFUL BC it mutates the ORIGINAL ARRAY
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // ['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owners); // ['Adam', 'Jonas', 'Martha', 'Zach']

// NUMBERS
console.log(movements);
// console.log(movements.sort()); // sorting is based on 'strings' SO the numbers are not changed from the ORIGINAL array

// RETURN < 0, A, B (keep order)
// RETURN > 0, B, A (switch order)
// ASCENDING
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

// CAN ALSO DO THIS WAY ***
movements.sort((a, b) => a - b);

console.log(movements);
// [-650, -400, -130, 70, 200, 450, 1300, 3000]

// DESCENDING
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

// CAN ALSO DO THIS WAY ***
movements.sort((a, b) => b - a);

console.log(movements);
// [3000, 1300, 450, 200, 70, -130, -400, -650]

//////////////////////////////////////////////////////////
// MORE WAYS OF CREATING AND FILLING ARRAYS
//////////////////////////////////////////////////////////
const arr1 = [1, 2, 3, 4, 5, 6, 7]; // [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // [1, 2, 3, 4, 5, 6, 7]

// EMPTY ARRAYS + FILL METHOD ***
const x = new Array(7); // [empty x 7]
console.log(x); // [empty x 7]

// console.log(x.map(() => 5)); // not useful

// FILL METHOD *** this does mutate the entire array
x.fill(1);
console.log(x); // [1, 1, 1, 1, 1, 1, 1]

x.fill(1, 3); // starts at index 3
console.log(x); // [empty x 3, 1, 1, 1, 1]

// SIMILAR TO SLICE, the final one is not included in the array
x.fill(1, 3, 5);
console.log(x);

// EXAMPLE:
arr1.fill(23, 4, 6);
console.log(arr1);

// ARRAY.FROM - used to create Arrays from other things
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

// have access here to the CURRENT & THE INDEX
// to denote you do not use the index you use an underscore
// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7]

// *** THIS WILL ONLY WORK ON AN ARRAY ***
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements_value'));
  console.log(movementsUI.map(el => el.textContent.replace('€', '')));
});

/////////////////////////////////////////////////
// WHICH ARRAY METHOD TO USE? 23 COVERED..
/////////////////////////////////////////////////
// what do I want from this method?
// mutate original array, new array, an array index, an array element, know if an array includes, a new string, to transform to value

/////////////////////////////////////////////////
// ARRAY METHODS PRACTICE
/////////////////////////////////////////////////
// Exercise #1
// whenever we have an array of arrays we can use the flatmap()
// const bankDepositsSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositsSum); // 25180

// // Exercise #2
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// console.log(numDeposits1000); // 6 (shows there are 6 deposits over $1000)

// // SECOND WAY: Exercise 2
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   // starts at 0, '+1'
//   // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); // if you console.log this it is 0

// console.log(numDeposits1000); // 6 (shows there are 6 deposits over $1000)

// a is still 10 because it logs the previous value UNLESS you log it again with 'console.log(a)', then it will be 11
// let a = 10;
// console.log(a++); // this will log the previous value (10)
// console.log(++a); // this will work!!! (11)

// Exercise #3
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals); // { deposits: 25180, withdrawals: -7340 }

// Exercise #4
// create a function to convert a string to a title case (all of the words in a sentence are capitalized except for some)
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  // *** it is a common practice to make an array of exceptions ***
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      // exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
      exceptions.includes(word) ? word : capitalize(word)
    )
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

// use forEach loop
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah); // returns sarah's dog

console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);
// logs: Sarah's dog is eating too much

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch); // ["Matilda", "Sarah", "John"]

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooLittle); // ["Alice", "Bob", "Michael"]

// 4. 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// "Matilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);

console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// when you see any, think some method
console.log(dogs.some(dog => dog.curFood === dog.recFood)); // false

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// current > (recommended * 0.90) && current < (recommended * 1.10)
// EXAMPLE to be changed into a separate function below
// console.log(
//   dog.some(
//     dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
//   )
// );

// **** changed to a separate function ****
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));
// true

//7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
console.log(dogs.filter(checkEatingOkay)); // Michael's dog

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted); // list of dogs in ascending order for recommended food
