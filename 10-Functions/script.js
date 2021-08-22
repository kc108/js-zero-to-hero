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
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// HIGHER-ORDER FUNCTION: A function that takes in another function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  // Transformed string: JAVASCRIPT is the best!

  console.log(`Transformed by: ${fn.name}`);
  // Transformed by: upperFirstWord
};

transformer('JavaScript is the best!', upperFirstWord);
// Transformed string: javascriptisthebest!
transformer('JavaScript is the best!', oneWord);
// Transformed by: oneWord

// *** JAVASCRIPT USES CALLBACKS ALL THE TIME ***
// Advantage of Callback makes it easier to split up code into re-usable parts.
// Callback functions allow us to make a level of abstraction, this hides the implementation of some code implementation. This is why it is called an 'abstraction'.
const high5 = function () {
  console.log('😆');
};

// example of a call back function with jQuery
document.body.addEventListener('click', high5);

// ANOTHER EXAMPLE WITH ARRAY
['Jonas', 'Martha', 'Adam'].forEach(high5);
// you get 3 😆 because it is called 3 TIMES !!!

///////////////////////////////////////////////////////
// FUNCTIONS RETURNING FUNCTIONS
///////////////////////////////////////////////////////
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// // re-write this as an ARROW FUNCTION
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Jonas');

const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven

greet('Hello')('Jonas'); // Hello Jonas
// THIS IS VERY USEFUL IN A CONCEPT CALLED 'FUNCTIONAL PROGRAMMING'
