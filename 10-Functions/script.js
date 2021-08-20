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
