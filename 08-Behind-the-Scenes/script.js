'use strict';

// // calcAge function is defined in the Global Scope
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}.`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';
//     }

//     console.log(millenial);
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// console.log(age); - won't work outside of scope
// printAge(); - won't work outside of scope

// [TDZ] TEMPORAL DEAD ZONE, LET AND CONST
// TEMPORAL DEAD ZONE was introduced in JS to catch BUGs easier
// const myName = 'Jonas';

// if (myName === 'Jonas') {
//   // this will give a 'ReferenceError: Cannot access 'job' before initialization
//   console.log(`Jonas is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);

//   console.log(x);
// }

// HOISTING AND TDZ PRACTICE
console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
