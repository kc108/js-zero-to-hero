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
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24564567856,
};

const checkIn = function (flightNum, passenger) {
  // DO NOT reassign the parameters in the function, this is just to show what happens
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24564567856) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

///////////////////////////////////////////////////////
// IS THE SAME AS DOING
///////////////////////////////////////////////////////
const flightNum = flight;
const passenger = jonas;

// ANOTHER EXAMPLE OF QUICK FUNCTION
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10_000_000_000);
};

// THIS SHOWS 'WRONG PASSPORT' because it has the same passport as the above function
newPassport(jonas);
checkIn(flight, jonas);

// passing by reference: JS DOES NOT DO THIS!
// passing by value: JS ONLY DOES THIS.

///////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////
