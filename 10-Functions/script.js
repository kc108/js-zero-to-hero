'use strict';

// ////////////////////////////////////
// // DEFAULT PARAMETERS
// ////////////////////////////////////
// const bookings = [];

// // ES6 way of doing it writes the default values directly in the ()
// const createBooking = function (flightNum, numPassengers = 1, price = 1) {
//   // ES5 way of doing it
//   // numPassengers = numPassengers || 1; // whenever it is a FALSY value like 'numPassengers' = undefined is
//   //   price = price || 99;
//   const booking = {
//     // will create the following in ES6 by just writing 'flightNum'
//     // flightNum: flightNum;
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking); // {flightNum: "LH123", numPassengers: undefined, price: undefined} // ***can use short-circuiting***
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 5);

///////////////////////////////////////////////////////
// HOW PASSING ARGUMENTS WORKS: VALUES VS. REFERENCE
///////////////////////////////////////////////////////
// APPLIED TO FUNCTIONS
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24564567856,
// };

// const checkIn = function (flightNum, passenger) {
//   // DO NOT reassign the parameters in the function, this is just to show what happens
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24564567856) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

///////////////////////////////////////////////////////
// IS THE SAME AS DOING
///////////////////////////////////////////////////////
// const flightNum = flight;
// const passenger = jonas;

// // ANOTHER EXAMPLE OF QUICK FUNCTION
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10_000_000_000);
// };

// // THIS SHOWS 'WRONG PASSPORT' because it has the same passport as the above function
// newPassport(jonas);
// checkIn(flight, jonas);

// passing by reference: JS DOES NOT DO THIS!
// passing by value: JS ONLY DOES THIS.

///////////////////////////////////////////////////////
// FIRST CLASS AND HIGHER-ORDER FUNCTIONS
///////////////////////////////////////////////////////
// FIRST-CLASS FUNCTIONS: all functions are values
// 1. JS treats functions as FIRST-CLASS CITIZENS
// 2. This means that functions are SIMPLY VALUES
// 3. Functions are just another "type" of object

// *** FUNCTIONS ARE OBJECTS, there are also FUNCTION METHODS ***
// bind()

// HIGHER-ORDER FUNCTIONS: there are higher-order functions in practice, WHEREAS FIRST-CLASS functions are theortical
// A function that RECIEVES another functions as an argument, that RETURNS a new function, or BOTH
// THIS IS ONLY possible because of first-class functions

///////////////////////////////////////////////////////
// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS ******** most important lecture in course ******************
///////////////////////////////////////////////////////
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // HIGHER-ORDER FUNCTION: A function that takes in another function
// const transformer = function (str, fn) {
//   console.log(`Transformed string: ${fn(str)}`);
//   // Transformed string: JAVASCRIPT is the best!

//   console.log(`Transformed by: ${fn.name}`);
//   // Transformed by: upperFirstWord
// };

// transformer('JavaScript is the best!', upperFirstWord);
// // Transformed string: javascriptisthebest!
// transformer('JavaScript is the best!', oneWord);
// // Transformed by: oneWord

// // *** JAVASCRIPT USES CALLBACKS ALL THE TIME ***
// // Advantage of Callback makes it easier to split up code into re-usable parts.
// // Callback functions allow us to make a level of abstraction, this hides the implementation of some code implementation. This is why it is called an 'abstraction'.
// const high5 = function () {
//   console.log('😆');
// };

// // example of a call back function with jQuery
// document.body.addEventListener('click', high5);

// // ANOTHER EXAMPLE WITH ARRAY
// ['Jonas', 'Martha', 'Adam'].forEach(high5);
// // you get 3 😆 because it is called 3 TIMES !!!

// ///////////////////////////////////////////////////////
// // FUNCTIONS RETURNING FUNCTIONS
// ///////////////////////////////////////////////////////
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // // re-write this as an ARROW FUNCTION
// // const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// // greetArr('Hi')('Jonas');

// const greeterHey = greet('Hey');
// greeterHey('Jonas'); // Hey Jonas
// greeterHey('Steven'); // Hey Steven

// greet('Hello')('Jonas'); // Hello Jonas
// // THIS IS VERY USEFUL IN A CONCEPT CALLED 'FUNCTIONAL PROGRAMMING'

// ///////////////////////////////////////////////////////
// // the call and apply methods
// ///////////////////////////////////////////////////////
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // OLD SYNTAX
//   //   book: function() {

//   //   }
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: ` ${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Kim Carpico'); // Kim Carpico booked a seat on Lufthansa flight LH 239
// lufthansa.book(365, 'Danielle Carpico');
// console.log(lufthansa); // {airline: "Lufthansa", iataCode: "LH", bookings: Array(2), book: f}

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// console.log(book);

// // DOES NOT WORK
// // this is NO longer a method, it now points to undefined via the 'this' keyword
// // book(23, 'Sarah Williams'); // RESULTS IN: "Uncaught TypeError"

// // You can use the CALL() to make the 'this' keyword point to the correct word so it doesn't return UNDEFINED
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings); // {name: "Eurowings", iataCode: "EW", bookings: Array(1)}

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // APPLY(): DOES THE SAME THINGS AS CALL()
// // It doesn't have a list following the second paramater, instead it has an array
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// // *** MODERN JAVASCRIPT: THIS IS THE BEST PRACTICE, don't use apply over this ***
// book.call(swiss, ...flightData);

// ///////////////////////////////////////////////////////
// // THE BIND METHOD: RETURNS A NEW FUNCTION WHERE THE THIS KEYWORD IS BOUND
// ///////////////////////////////////////////////////////
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings); // this will return a new function
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// // THIS ALLOWS YOU TO SET IN STONE FUNCTIONS ARGUMENTS
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Eurowings flight EW 23
// bookEW23('Martha Cooper'); // Martha Cooper booked a seat on Eurowings flight EW 23

// // *** WITH EVENT LISTENER ***
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes); // NaN bc this keyword points to the keyword on the button
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // PARTIAL APPLICATION - can preset parameters
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200)); // 220

// // first argument of bind() is the 'this' keyword, since it is NOT in the function it is standard to use NULL
// const addVAT = addTax.bind(null, 0.23);
// // This is what are addVAT function looks like
// // addVAT = value => value + value * 0.23

// console.log(addVAT(100)); // 123
// console.log(addVAT(23)); // 28.29

// // reWRITE with one function returning another function - EXAMPLE
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT(100)); // 123
// console.log(addVAT(23)); // 28.29

// /*
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
// */

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//       },

// // 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// //   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
// //         What is your favourite programming language?
// //         0: JavaScript
// //         1: Python
// //         2: Rust
// //         3: C++
// //         (Write option number)

// // this RESULTS IN AN ERROR BECAUSE IT POINTS TO THE BUTTON, 'UNCAUGHT TYPEERROR'
// // document
// //   .querySelector('.poll')
// //   .addEventListener('click', poll.registerNewAnswer);

///////////////////////////////////////////////////////
// immediately invoked function expressions (IIFE)
///////////////////////////////////////////////////////
// const runOnce = function () {
//   console.log('This will never run again');
// };
// // This will never run again

// runOnce();

// //IIFE - Immediatedly Invoked Function Expression
// // this transforms statement into an expression
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // this will not work because the data inside the above function is private and is encapsulated inside the function above
// // console.log(isPrivate);

// // example: of above with Arrow Function
// (() => console.log('This will ALSO never run again'))();
// // This will ALSO never run again

// // ES6: Variables with let/const
// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate); // will not work
// console.log(notPrivate); // 46: this works because it used 'var' NOT 'let' or 'const'

///////////////////////////////////////////////////////
// CLOSURES
///////////////////////////////////////////////////////
