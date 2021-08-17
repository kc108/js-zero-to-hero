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
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // FUNCTIONS
// console.log(addDecl(2, 3)); // WORKS
// console.log(addExpr(2, 3)); // IN TDZ (Temporal Dead Zone)
// console.log(addArrow(2, 3)); // IN TDZ (Temporal Dead Zone)
// declaring function with var would be 'UNDEFINED'

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// EXAMPLE:
// this will result in it console.log(ging) 'All products deleted!' because of HOISTING.
// this is a COMMON BUG in large applications

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// // EXAMPLE:
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products have been deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

/////////////////////////////////////////
// 'THIS' keyword: special variable that is created for every execution context(every function). Takes the value of (points to) the "owner" of the function in which the 'this' keyword is used
/////////////////////////////////////////
// 'this' keyword is NOT static. It depends how the function is ACTUALLY CALLED.
// 1) Method: this = <Object that is calling the method>
// Example:
// const jonas = {
//   name: 'Jonas',
//   year: 1989,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };
// jonas.calcAge(); // 48

// 2) Simple function call: this = undefined UNLESS you are NOT in strict mode then it will pt to a global variable

// 3) Arrow functions *********
// this = <this of surrounding function (lexical this)>

// 4) Event Listener
// this = >DOM element that the handler is attached to>

// ******** 'THIS' does NOT point to the function itself, and also NOT the its variable environment!

/////////////////////////////////////////
// 'THIS' keyword:
/////////////////////////////////////////
// this shows the global 'window' object in the DevConsole
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAge(1991);

// // ARROW FUNCTION: uses the 'lexicon' keyword from the GLOBAL SCOPE... IN THIS EXAMPLE IT IS THE 'console.log(this);' above
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1980);

//*************** */
// // WILL LOG THE OBJECT THAT IS CALLING THE METHOD.. IN THIS CASE IT IS THE 'jonas' object:
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year); // 46
//   },
// };
// jonas.calcAge();

// // EXAMPLE:
// const matilda = {
//   year: 2017,
// };

// // function is just a value
// matilda.calcAge = jonas.calcAge;
// // WRITE matilda in DevCons will show method from jonas object
// matilda.calcAge(); // # -> 20, which is 2037 - 2017

// const f = jonas.calcAge;

//////////////////////////////////////////////
// Regular Functions vs. Arrow Functions
//////////////////////////////////////////////

// this is an OBJECT LITERAL NOT AN OBJECT
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year); // 46

    // ******* SOLUTION 1 *******
    // const self = this; // self or that => this is a way to solve the way to go around and not get UNDEFINED.. however the better solution is to do an ARROW FUNCTION
    // const isMillenial = function () {
    //   // console.log(this); // this is UNDEFINED
    //   console.log(self);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    //   // };
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // ***** SOLUTION 2 *******
    // const self = this; // self or that => this is a way to solve the way to go around and not get UNDEFINED.. however the better solution is to do an ARROW FUNCTION

    const isMillenial = () => {
      // console.log(this); // this is UNDEFINED
      console.log(this);
      //   console.log(this.year >= 1981 && this.year <= 1996);
      // };
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  // DON'T USE THIS:
  //   greet: () =>
  //   console.log(this); // will display the 'window' object in the devConsole
  //   console.log(`Hey, ${this.firstName}`),
  // };

  // ** USE THIS **
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// jonas.greet(); // this will be result in UNDEFINED with an ARROW FUNCTION because it takes it from the GLOBAL SCOPE
// console.log(this.firstName); // this will ALSO be UNDEFINED
// var creates properties on the GLOBAL object, so this is easy to introduce bugs

// BEST PRACTICE: never use an arrow function as a method.. !!
// then you never have to think about what type of function to use

// ARGUMENTS KEYWORD
// ARGUMENTS KEYWORD only works with the FUNCTION KEYWORD, NOT the ArrowFunction Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); // #-> 2, 5, 8, 12

// this will NOT log the extra parameters like the FUNCTION expression above, it does not work with ES6, arrow functions
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); // #-> UNCAUGHT REFERENCE ERROR
