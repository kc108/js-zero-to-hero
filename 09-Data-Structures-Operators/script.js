'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // A different way to show 'Thursday'
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  // DOES NOT MAKE SENSE.. BUT just to show you can do this
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

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

  // ES6 enhanced object literals
  openingHours,

  //   order: function (starterIndex, mainIndex) {
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //   orderPasta: function (ing1, ing2, ing3) {
  //     console.log(
  //       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
  //     );
  //   },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////////////
// OPTIONAL CHAINING: ES6 FEATURE
////////////////////////////////////////////
// UNDEFINED since 'mon' does NOT exist
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); // this one is an error

// WITH OPTIONAL CHAINING :
// *** OPTIONAL CHAINING: checks if the data on the left exists. ***
// ONLY IF the properties before the '?' is read exist then it will log it to the console, if NOT then UNDEFINED will be returned
console.log(restaurant.openingHours.mon?.open); // 'undefined' UNLIKE above which results in an ERROR
console.log(restaurant.openingHours?.mon?.open); // this way will prevent even further errors

// EXAMPLE
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`); // 0 is a Falsy value so it shows Sat is closed, UNLESS we use the OPTIONAL CHAINING THAT IS AVAILABLE IN ES6
}

// OPTIONAL CHAINING works on METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method does NOT exist'); // ["Focaccia", "Pasta"]
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does NOT exist'); // "Method does not exist"

// OPTIONAL CHAINING ON ARRAYS
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

// INSTEAD OF THIS:
if (users.length > 0) console.log(users[0].name);
else console.log('user array is empty');

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
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

///////////////////////////////////////////
// NOTICE DIFFERENCES
///////////////////////////////////////////
// const newArr = [1, 2, ...arr];
// console.log(newArr); // [1, 2, 7, 8, 9]
// console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // expands the previous array
// ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// MERGE mainMenu and starterMenu
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
//['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// // Iterables: arrays, strings, maps, sets. NOT objects. Spread operators work on ALL ITERABLES.
// const string = 'Jonas';
// const letters = [...string, ' ', 'S.'];
// console.log(letters);
// // ['J', 'o', 'n', 'a', 's', ' ', 'S']

// console.log(...string); // J o n a s
// // CANNOT do ${...string}

// ///////////////////////////////////////////
// //
// ///////////////////////////////////////////
// const ingredients = [
//   //   prompt("Let's make pasta! Ingredient 1?"),
//   //   prompt('Ingredient 2?'),
//   //   prompt('Ingredient 3?'),
// ];

// console.log(ingredients); // Here is your delicious pasta with <>, <> and <>.

// restaurant.orderPasta(...ingredients);

// // SPREAD OPERATOR ALSO WORKS ON OBJECTS EVEN THOUGHT THEY ARE NOT ITERABLES
// // OBJECTS
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
// // this 'console.log' all of above plus the two add above

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name); // Ristorante Roma
// console.log(restaurant.name); // Classico Italiano

// ///////////////////////////////////////////
// // REST PATTERN AND PARAMETERS
// ///////////////////////////////////////////
// // REST PATTERN: does the OPPOSITE of the Spread Operator

// // SPREAD, because on the RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST syntax: because it is on the LEFT side of the = SIGN
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // [3, 4, 5]

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// // OBJECTS
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays); // Creates an object just for the weekdays above for Thursday and Friday, and Saturday is it's own OBJECT

// // 2.) Functions - rest parameters
// const add = function (...numbers) {
//   console.log(numbers); // [2, 3] // [5, 3, 7, 2] // ETC
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers;
//     numbers[i];
//     console.log(sum);
//   }
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);
// console.log(x);

// ////////////////////////////////////////
// // see above restaurant OBJECT FOR REVIEW
// ////////////////////////////////////////
// // EXAMPLE REST OPERATORS ON RESTAURANT
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// // mushrooms
// // ['onions', 'olives', 'spinach']

// // ////////////////////////////////////////
// // // && AND || : OPERATOR for Short Circuiting
// // ////////////////////////////////////////
// // //console.log(--- or ---);
// // // Use ANY data type, return ANY data type, short-circuit evaluation
// // console.log(3 || 'Jonas'); // 3.. doesn't have to be a BOOLEAN PROPERTY

// // // short circuiting if the 1st value is a truthy value it will return the Truthy value.

// // console.log(true || 0); // true
// // console.log(undefined || null); // null
// // console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello because it is Truthy

// // // since 'restaurant.numGuests' is UNDEFINED the 'console.log' returns 10
// // // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // // console.log(guests1);

// // // If, HOWEVER you set the following: then the result will be 23.
// // restaurant.numGuests = 23;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // // INSTEAD we can USE SHORT-CIRCUITING ****** way EASIER WAY
// // const guest2 = restaurant.numGuests || 10;
// // console.log(guest2); // 23

// // ////////////////////////////////////////////////
// // // AND OPERATOR: will only return if both are
// // ////////////////////////////////////////////////
// // console.log('-- and --');
// // console.log(0 && 'Jonas'); // returns FALSY value, OPPOSITE of OR which SHORT CIRCUITS when it is a truthy value CONSOLE.LOG = 0
// // console.log(7 && 'Jonas'); // Console.log = Jonas
// // console.log('Hello' && 23 && null && 'jonas'); // null

// // // PRACTICAL EXAMPLE
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'spinach');
// // }
// // // ["spinach"] // checkto see if there is an order for 'orderPizza' and if there is then returns
// // // mushrooms
// // // ["spinach"]

// // // you CAN DO IT THIS WAY AS WELL
// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// // // mushrooms
// // // ["spinach"]

// // ////////////////////////////////////////////////
// // // The Nullish Coalescing Order (??)
// // ////////////////////////////////////////////////
// // // restaurant.numGuests = 0;
// // const guests = restaurant.numGuests || 10;
// // console.log(guests); // 10

// // // NULLISH: NULL and UNDEFINED (NOT 0 or ' ')... only if 'restaurant.numGuests' is UNDEFINED will this work
// // const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect); // 23

// // FOR OF LOOP: can STILL be able to use 'break;' and 'continue';
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu); // ["Foccacia", "Bruschetta"...etc]
// for (const item of menu) console.log(item); //
// // Focaccia
// // Bruschetta
// // Garlic Bread
// // Caprese Salad
// // ...ETC

// // FOR ... OF LOOP
// // If you need the index it is more of a pain, but you can get the Index
// for (const item of menu.entries());
// // console.log(item);
// // [0, "Focaccia"]
// // [1, "Bruschetta"]
// // [2, "Garlic Bread"]
// // etc.

// console.log(menu.entries); // Array Iterator {}
// // console.log([...menu.entries]); // just to look at what is in the array

// ///////////////////////////////////////
// // CODING CHALLENGE #1
// ///////////////////////////////////////
// /*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// */

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th, 2037',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // // 1.) create one player array for each team ('players1', 'players2')
// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// // // 2.)
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // // 3.)
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(players1Final);

// // // 5.) 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;
// // console.log(team1, draw, team2);
// // // 1.33 3.25 6.5

// // // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // const printGoals = function (...players) {
// //   console.log(`${players.length} goals were scored.`);
// // };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// // printGoals(...game.scored);

// // //  7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// // // use LOGICAL OPERATOR
// // team1 < team2 && console.log('Team 1 is more likely to win.');
// // team2 < team1 && console.log('Team 2 is more likely to win.');
// // // Team 1 is more likely to win.

// // ////////////////////////////////////////////////
// // // The Nullish Coalescing Order (??)
// // ////////////////////////////////////////////////
