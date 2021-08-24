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
// better practice to pass function instead of working with Global Variables
const displayMovements = function (movements) {
  // innerHTML: includes the HTML TAGS
  // textContent: does NOT include the HTML tags
  containerMovements.innerHTML = '';
  // .textContent = 0;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
        <div class="movements__type
        movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
    </div>
      `;
    // 'afterbegin' -- there are 4 different ones
    // beforebegin, beforeend, afterend
    // DID NOT USE 'BEFORE END' because the order of the elements would be inverted
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

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
console.log(accounts); // console.log to show the username is now showing the 3 initials of user (e.g., js, js, stw, ss... etc)

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

// // 1.
// const checkDogs = function (dogsJulia, dogsKate) {
//   // slice(): returns a shallow copy of a portion of the array
//   const dogsJuliaCorrected = dogsJulia.slice();
//   // 1st element 0, and want to remove one element
//   dogsJuliaCorrected.splice(0, 1);
//   // Remove last 2
//   dogsJuliaCorrected.splice(-2);
//   // could also use slice INSTEAD OF SPLICE
//   // dogsJulia.slice(1, 3);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs); // [5, 2, 4, 1, 15, 8, 3]

//   // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });

//   console.log(dogsJuliaCorrected); // (2) [5, 2]
// };

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

/////////////////////////////////////////////////////////
// FILTER(): used to filter for elements that satisfy a specific condition
////////////////////////////////////////////////////////
