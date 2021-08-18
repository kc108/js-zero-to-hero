'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  foodName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// // // destructuring OBJECTS: objects order does NOT matter like an ARRAY
// // const { foodName, openingHours, categories } = restaurant;
// // console.log(foodName, openingHours, categories);

// // //////////////////////////

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr;
// // console.log(x, y, z); // 2 3 4
// // console.log(arr);

// // // const [first, second] = restaurant.categories;
// // // console.log(first, second); // Italian Pizzeria

// // // say you want the first and third
// // // const [first, , second] = restaurant.categories;
// // // console.log(first, second); // Italian Vegetarian

// // //
// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary); // Italian Vegetarian

// // // WITHOUT DESTRUCTURING: Switching Variables
// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);

// // // DESTRUCTURING
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // ///////////////////////////////////
// // // DESTRUCTURING EXAMPLE
// // ///////////////////////////////////
// // // console.log(restaurant.order(2, 0)); // "Garlic Bread", "Pizza"

// // // RECEIVE 2 RETURN VALUES FROM A FUNCTION
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse); // "Garlic Bread", "Pizza"

// // // NESTED ARRAY DESTRUCTURING
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;

// // // console.log(i, j); // 2 [5, 6]
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k); // 2 5 6

// // // DEFAULT VALUES
// // const [p = 1, q = 1, r = 1] = [8];
// // console.log(p, q, r);

// ///////////////////////////////////////
// // destructuring
// ///////////////////////////////////////
// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
// const numbers = ['1', '2', '3', '4', '5', '6'];

// // NOT DESTRUCTURED
// // const a = alphabet[0];

// // DESTRUCTURING & SPREAD OPERATOR
// //const [a, , c, ...rest] = alphabet;

// // first way to do
// // const newArray = [...alphabet, ...numbers];
// // console.log(newArray);

// // // second way to do
// // const [a, , c, ...rest] = alphabet;

// // const newArray = alphabet.concat(numbers);
// // console.log(newArray);

// // console.log(a); // A
// // console.log(c); // C
// // console.log(rest); // ["D", "E", "F"]

// // // destructuring continued
// // function sumAndMultiply(a, b) {
// //   return [a + b, a * b, a / b];
// // }

// // const array = sumAndMultiply(2, 3);
// // console.log(array); // 2 [5, 6]

// // // SETTING DEFAULT VALUES
// // const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);
// // console.log(sum); // 5
// // console.log(multiply); // 6
// // console.log(division); // 0.666666

// //////////////////////////////////////
// // DESTRUCTURING OBJECTS
// //////////////////////////////////////
// const personOne = {
//   name: 'Kim',
//   age: 108,
//   favoriteFood: 'Rice',
//   address: {
//     city: 'Everywhere',
//     state: 'Somewhere in the galaxy',
//   },
// };

// const personTwo = {
//   age: 32,
//   favoriteFood: 'Watermelon',
// };

// ///////////////////////////////////////
// // DESTRUCTURING INSIDE OF A FUNCTION
// ///////////////////////////////////////
// // NON.. DESTRUCTURED
// // function printUser(user) {
// //   console.log(`Name is: ${user.name}. Age is ${user.age}`);
// // }

// // printUser(personOne);

// ///////////////////////////////////////
// // DESTRUCTURED FUNCTION
// ///////////////////////////////////////
// function printUser({ name, age, favoriteFood = 'Watermelon' }) {
//   console.log(`Name is: ${name}. Food is ${favoriteFood}. Age is ${age}.`);
// }

// printUser(personOne);

// //  *********************** COMBINING TWO OBJECTS **************
// //////////////////////////////////////////////////
// const personThree = { ...personOne, ...personTwo };

// // DESTRUCTURING NEW OBJECT ***********************
// //////////////////////////////////////////////////
// const {
//   name: firstName,
//   address: { city },
// } = personTwo;

// console.log(firstName);
// console.log(city);

// // the 'name' variable gets mapped to 'firstName'
// // const { name: firstName = 'john', age, favoriteFood = 'Rice' } = personTwo;

// // console.log(name);
// // console.log(age);

// // const { name: firstName, ...rest } = personTwo;

// // you can map 'name' to 'firstName' by doing the following:
// // const { name: firstName, age, favoriteFood = 'Rice' } = personTwo;
// // console.log(favoriteFood); // Watermelon
// //console.log(rest); // logs whole OBJECT

//////////////////////////////////////////
// SPREAD OPERATOR
//////////////////////////////////////////
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

///////////////////////////////////////////
// NOTICE DIFFERENCES
///////////////////////////////////////////
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]
console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // expands the previous array
// ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// MERGE mainMenu and starterMenu
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
//['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Iterables: arrays, strings, maps, sets. NOT objects. Spread operators work on ALL ITERABLES.
const string = 'Jonas';
const letters = [...string, ' ', 'S.'];
console.log(letters);
// ['J', 'o', 'n', 'a', 's', ' ', 'S']

console.log(...string); // J o n a s
// CANNOT do ${...string}

///////////////////////////////////////////
//
///////////////////////////////////////////
const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt('Ingredient 2?'),
  //   prompt('Ingredient 3?'),
];

console.log(ingredients); // Here is your delicious pasta with <>, <> and <>.

restaurant.orderPasta(...ingredients);

// SPREAD OPERATOR ALSO WORKS ON OBJECTS EVEN THOUGHT THEY ARE NOT ITERABLES
// OBJECTS
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
// this 'console.log' all of above plus the two add above

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
