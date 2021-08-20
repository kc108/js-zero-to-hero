// // 'use strict';

// // const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // const openingHours = {
// //   // A different way to show 'Thursday'
// //   [weekdays[3]]: {
// //     open: 12,
// //     close: 22,
// //   },
// //   fri: {
// //     open: 11,
// //     close: 23,
// //   },
// //   // DOES NOT MAKE SENSE.. BUT just to show you can do this
// //   [`day-${2 + 4}`]: {
// //     open: 0, // Open 24 hours
// //     close: 24,
// //   },
// // };

// // // // // Data needed for first part of the section
// // // // const restaurant = {
// // // //   foodName: 'Classico Italiano',
// // // //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// // // //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// // // //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// // // //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// // // //   // ES6 enhanced object literals
// // // //   openingHours,

// // // //   //   order: function (starterIndex, mainIndex) {
// // // //   //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// // // //   //   },

// // // //   order(starterIndex, mainIndex) {
// // // //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// // // //   },

// // // //   //   orderPasta: function (ing1, ing2, ing3) {
// // // //   //     console.log(
// // // //   //       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
// // // //   //     );
// // // //   //   },

// // // //   orderPasta(ing1, ing2, ing3) {
// // // //     console.log(
// // // //       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
// // // //     );
// // // //   },

// // // //   orderPizza: function (mainIngredient, ...otherIngredients) {
// // // //     console.log(mainIngredient);
// // // //     console.log(otherIngredients);
// // // //   },
// // // // };

// // // // ////////////////////////////////////////////
// // // // // LOOPING OBJECTS: ENTRIES, KEYS AND VALUE
// // // // ////////////////////////////////////////////
// // // // // property NAMES
// // // // const properties = Object.keys(openingHours);
// // // // console.log(properties); // ["thu", "fri", "day-6"]
// // // // let openStr = `We are open on ${properties.length} days`; // we are open on 3 days

// // // // for (const day of properties) {
// // // //   openStr += `${day}, `;
// // // // }

// // // // console.log(openStr); // We are open on 3 daysthu, fri, day-6

// // // // // PROPERTY VALUES
// // // // const values = Object.values(openingHours);
// // // // console.log(values); //[{}, {}, {}]
// // // // // 0: {open: 12, close: 22}
// // // // // 1: {open: 11, close: 23}
// // // // // 2: {open: 0, close: 24}

// // // // //
// // // // const entries = Object.entries(openingHours);
// // // // console.log(entries); // turns the object into an array

// // // // // // WITHOUT DESTRUCTURING
// // // // // for (const x of entries) {
// // // // //   console.log(`On ${key} we open at ${open} and close at ${close}`);
// // // // // }

// // // // // WITH DESTRUCTURING
// // // // // [key, value]
// // // // for (const [key, { open, close }] of entries) {
// // // //   console.log(`On ${key} we open at ${open} and close at ${close}`);
// // // // }

// // // // for (const day of Object.keys(openingHours)) {
// // // //   console.log(day); // We are open on 3 days
// // // // }

// // // // ////////////////////////////////////////////
// // // // // OPTIONAL CHAINING: ES6 FEATURE
// // // // ////////////////////////////////////////////
// // // // // UNDEFINED since 'mon' does NOT exist
// // // // if (restaurant.openingHours && restaurant.openingHours.mon)
// // // //   console.log(restaurant.openingHours.mon.open); // this one is an error

// // // // // WITH OPTIONAL CHAINING :
// // // // // *** OPTIONAL CHAINING: checks if the data on the left exists. ***
// // // // // ONLY IF the properties before the '?' is read exist then it will log it to the console, if NOT then UNDEFINED will be returned
// // // // console.log(restaurant.openingHours.mon?.open); // 'undefined' UNLIKE above which results in an ERROR
// // // // console.log(restaurant.openingHours?.mon?.open); // this way will prevent even further errors

// // // // // EXAMPLE
// // // // const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // // // for (const day of days) {
// // // //   console.log(day);
// // // //   const open = restaurant.openingHours[day]?.open ?? 'closed';
// // // //   console.log(`On ${day}, we open at ${open}`); // 0 is a Falsy value so it shows Sat is closed, UNLESS we use the OPTIONAL CHAINING THAT IS AVAILABLE IN ES6
// // // // }

// // // // // OPTIONAL CHAINING works on METHODS
// // // // console.log(restaurant.order?.(0, 1) ?? 'Method does NOT exist'); // ["Focaccia", "Pasta"]
// // // // console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does NOT exist'); // "Method does not exist"

// // // // // OPTIONAL CHAINING ON ARRAYS
// // // // const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// // // // console.log(users[0]?.name ?? 'User array empty');

// // // // // INSTEAD OF THIS:
// // // // if (users.length > 0) console.log(users[0].name);
// // // // else console.log('user array is empty');

// // // // // // // destructuring OBJECTS: objects order does NOT matter like an ARRAY
// // // // // // const { foodName, openingHours, categories } = restaurant;
// // // // // // console.log(foodName, openingHours, categories);

// // // // // // //////////////////////////

// // // // // // const arr = [2, 3, 4];
// // // // // // const a = arr[0];
// // // // // // const b = arr[1];
// // // // // // const c = arr[2];

// // // // // // const [x, y, z] = arr;
// // // // // // console.log(x, y, z); // 2 3 4
// // // // // // console.log(arr);

// // // // // // // const [first, second] = restaurant.categories;
// // // // // // // console.log(first, second); // Italian Pizzeria

// // // // // // // say you want the first and third
// // // // // // // const [first, , second] = restaurant.categories;
// // // // // // // console.log(first, second); // Italian Vegetarian

// // // // // // //
// // // // // // let [main, , secondary] = restaurant.categories;
// // // // // // console.log(main, secondary); // Italian Vegetarian

// // // // // // // WITHOUT DESTRUCTURING: Switching Variables
// // // // // // // const temp = main;
// // // // // // // main = secondary;
// // // // // // // secondary = temp;
// // // // // // // console.log(main, secondary);

// // // // // // // DESTRUCTURING
// // // // // // [main, secondary] = [secondary, main];
// // // // // // console.log(main, secondary);

// // // // // // ///////////////////////////////////
// // // // // // // DESTRUCTURING EXAMPLE
// // // // // // ///////////////////////////////////
// // // // // // // console.log(restaurant.order(2, 0)); // "Garlic Bread", "Pizza"

// // // // // // // RECEIVE 2 RETURN VALUES FROM A FUNCTION
// // // // // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // // // // console.log(starter, mainCourse); // "Garlic Bread", "Pizza"

// // // // // // // NESTED ARRAY DESTRUCTURING
// // // // // // const nested = [2, 4, [5, 6]];
// // // // // // // const [i, , j] = nested;

// // // // // // // console.log(i, j); // 2 [5, 6]
// // // // // // const [i, , [j, k]] = nested;
// // // // // // console.log(i, j, k); // 2 5 6

// // // // // // // DEFAULT VALUES
// // // // // // const [p = 1, q = 1, r = 1] = [8];
// // // // // // console.log(p, q, r);

// // // // // ///////////////////////////////////////
// // // // // // destructuring
// // // // // ///////////////////////////////////////
// // // // // const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
// // // // // const numbers = ['1', '2', '3', '4', '5', '6'];

// // // // // // NOT DESTRUCTURED
// // // // // // const a = alphabet[0];

// // // // // // DESTRUCTURING & SPREAD OPERATOR
// // // // // //const [a, , c, ...rest] = alphabet;

// // // // // // first way to do
// // // // // // const newArray = [...alphabet, ...numbers];
// // // // // // console.log(newArray);

// // // // // // // second way to do
// // // // // // const [a, , c, ...rest] = alphabet;

// // // // // // const newArray = alphabet.concat(numbers);
// // // // // // console.log(newArray);

// // // // // // console.log(a); // A
// // // // // // console.log(c); // C
// // // // // // console.log(rest); // ["D", "E", "F"]

// // // // // // // destructuring continued
// // // // // // function sumAndMultiply(a, b) {
// // // // // //   return [a + b, a * b, a / b];
// // // // // // }

// // // // // // const array = sumAndMultiply(2, 3);
// // // // // // console.log(array); // 2 [5, 6]

// // // // // // // SETTING DEFAULT VALUES
// // // // // // const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);
// // // // // // console.log(sum); // 5
// // // // // // console.log(multiply); // 6
// // // // // // console.log(division); // 0.666666

// // // // // //////////////////////////////////////
// // // // // // DESTRUCTURING OBJECTS
// // // // // //////////////////////////////////////
// // // // // const personOne = {
// // // // //   name: 'Kim',
// // // // //   age: 108,
// // // // //   favoriteFood: 'Rice',
// // // // //   address: {
// // // // //     city: 'Everywhere',
// // // // //     state: 'Somewhere in the galaxy',
// // // // //   },
// // // // // };

// // // // // const personTwo = {
// // // // //   age: 32,
// // // // //   favoriteFood: 'Watermelon',
// // // // // };

// // // // // ///////////////////////////////////////
// // // // // // DESTRUCTURING INSIDE OF A FUNCTION
// // // // // ///////////////////////////////////////
// // // // // // NON.. DESTRUCTURED
// // // // // // function printUser(user) {
// // // // // //   console.log(`Name is: ${user.name}. Age is ${user.age}`);
// // // // // // }

// // // // // // printUser(personOne);

// // // // // ///////////////////////////////////////
// // // // // // DESTRUCTURED FUNCTION
// // // // // ///////////////////////////////////////
// // // // // function printUser({ name, age, favoriteFood = 'Watermelon' }) {
// // // // //   console.log(`Name is: ${name}. Food is ${favoriteFood}. Age is ${age}.`);
// // // // // }

// // // // // printUser(personOne);

// // // // // //  *********************** COMBINING TWO OBJECTS **************
// // // // // //////////////////////////////////////////////////
// // // // // const personThree = { ...personOne, ...personTwo };

// // // // // // DESTRUCTURING NEW OBJECT ***********************
// // // // // //////////////////////////////////////////////////
// // // // // const {
// // // // //   name: firstName,
// // // // //   address: { city },
// // // // // } = personTwo;

// // // // // console.log(firstName);
// // // // // console.log(city);

// // // // // // the 'name' variable gets mapped to 'firstName'
// // // // // // const { name: firstName = 'john', age, favoriteFood = 'Rice' } = personTwo;

// // // // // // console.log(name);
// // // // // // console.log(age);

// // // // // // const { name: firstName, ...rest } = personTwo;

// // // // // // you can map 'name' to 'firstName' by doing the following:
// // // // // // const { name: firstName, age, favoriteFood = 'Rice' } = personTwo;
// // // // // // console.log(favoriteFood); // Watermelon
// // // // // //console.log(rest); // logs whole OBJECT

// // // // //////////////////////////////////////////
// // // // // SPREAD OPERATOR
// // // // //////////////////////////////////////////
// // // // // const arr = [7, 8, 9];
// // // // // const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// // // // // console.log(badNewArray);

// // // // ///////////////////////////////////////////
// // // // // NOTICE DIFFERENCES
// // // // ///////////////////////////////////////////
// // // // // const newArr = [1, 2, ...arr];
// // // // // console.log(newArr); // [1, 2, 7, 8, 9]
// // // // // console.log(...newArr); // 1 2 7 8 9

// // // // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // // // console.log(newMenu); // expands the previous array
// // // // // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// // // // // COPY ARRAY
// // // // const mainMenuCopy = [...restaurant.mainMenu];
// // // // console.log(mainMenuCopy);

// // // // // MERGE mainMenu and starterMenu
// // // // // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // // // // console.log(menu);
// // // // //['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// // // // // // Iterables: arrays, strings, maps, sets. NOT objects. Spread operators work on ALL ITERABLES.
// // // // // const string = 'Jonas';
// // // // // const letters = [...string, ' ', 'S.'];
// // // // // console.log(letters);
// // // // // // ['J', 'o', 'n', 'a', 's', ' ', 'S']

// // // // // console.log(...string); // J o n a s
// // // // // // CANNOT do ${...string}

// // // // // ///////////////////////////////////////////
// // // // // //
// // // // // ///////////////////////////////////////////
// // // // // const ingredients = [
// // // // //   //   prompt("Let's make pasta! Ingredient 1?"),
// // // // //   //   prompt('Ingredient 2?'),
// // // // //   //   prompt('Ingredient 3?'),
// // // // // ];

// // // // // console.log(ingredients); // Here is your delicious pasta with <>, <> and <>.

// // // // // restaurant.orderPasta(...ingredients);

// // // // // // SPREAD OPERATOR ALSO WORKS ON OBJECTS EVEN THOUGHT THEY ARE NOT ITERABLES
// // // // // // OBJECTS
// // // // // const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// // // // // console.log(newRestaurant);
// // // // // // this 'console.log' all of above plus the two add above

// // // // // const restaurantCopy = { ...restaurant };
// // // // // restaurantCopy.name = 'Ristorante Roma';
// // // // // console.log(restaurantCopy.name); // Ristorante Roma
// // // // // console.log(restaurant.name); // Classico Italiano

// // // // // ///////////////////////////////////////////
// // // // // // REST PATTERN AND PARAMETERS
// // // // // ///////////////////////////////////////////
// // // // // // REST PATTERN: does the OPPOSITE of the Spread Operator

// // // // // // SPREAD, because on the RIGHT side of =
// // // // // const arr = [1, 2, ...[3, 4]];

// // // // // // REST syntax: because it is on the LEFT side of the = SIGN
// // // // // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // // // // console.log(a, b, others); // [3, 4, 5]

// // // // // const [pizza, , risotto, ...otherFood] = [
// // // // //   ...restaurant.mainMenu,
// // // // //   ...restaurant.starterMenu,
// // // // // ];
// // // // // console.log(pizza, risotto, otherFood);
// // // // // // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// // // // // // OBJECTS
// // // // // // const { sat, ...weekdays } = restaurant.openingHours;
// // // // // // console.log(weekdays); // Creates an object just for the weekdays above for Thursday and Friday, and Saturday is it's own OBJECT

// // // // // // 2.) Functions - rest parameters
// // // // // const add = function (...numbers) {
// // // // //   console.log(numbers); // [2, 3] // [5, 3, 7, 2] // ETC
// // // // //   let sum = 0;
// // // // //   for (let i = 0; i < numbers.length; i++) {
// // // // //     sum += numbers;
// // // // //     numbers[i];
// // // // //     console.log(sum);
// // // // //   }
// // // // // };
// // // // // add(2, 3);
// // // // // add(5, 3, 7, 2);
// // // // // add(8, 2, 5, 3, 2, 1, 4);

// // // // // const x = [23, 5, 7];
// // // // // add(...x);
// // // // // console.log(x);

// // // // // ////////////////////////////////////////
// // // // // // see above restaurant OBJECT FOR REVIEW
// // // // // ////////////////////////////////////////
// // // // // // EXAMPLE REST OPERATORS ON RESTAURANT
// // // // // restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// // // // // // mushrooms
// // // // // // ['onions', 'olives', 'spinach']

// // // // // // ////////////////////////////////////////
// // // // // // // && AND || : OPERATOR for Short Circuiting
// // // // // // ////////////////////////////////////////
// // // // // // //console.log(--- or ---);
// // // // // // // Use ANY data type, return ANY data type, short-circuit evaluation
// // // // // // console.log(3 || 'Jonas'); // 3.. doesn't have to be a BOOLEAN PROPERTY

// // // // // // // short circuiting if the 1st value is a truthy value it will return the Truthy value.

// // // // // // console.log(true || 0); // true
// // // // // // console.log(undefined || null); // null
// // // // // // console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello because it is Truthy

// // // // // // // since 'restaurant.numGuests' is UNDEFINED the 'console.log' returns 10
// // // // // // // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // // // // // // console.log(guests1);

// // // // // // // If, HOWEVER you set the following: then the result will be 23.
// // // // // // restaurant.numGuests = 23;
// // // // // // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // // // // // console.log(guests1);

// // // // // // // INSTEAD we can USE SHORT-CIRCUITING ****** way EASIER WAY
// // // // // // const guest2 = restaurant.numGuests || 10;
// // // // // // console.log(guest2); // 23

// // // // // // ////////////////////////////////////////////////
// // // // // // // AND OPERATOR: will only return if both are
// // // // // // ////////////////////////////////////////////////
// // // // // // console.log('-- and --');
// // // // // // console.log(0 && 'Jonas'); // returns FALSY value, OPPOSITE of OR which SHORT CIRCUITS when it is a truthy value CONSOLE.LOG = 0
// // // // // // console.log(7 && 'Jonas'); // Console.log = Jonas
// // // // // // console.log('Hello' && 23 && null && 'jonas'); // null

// // // // // // // PRACTICAL EXAMPLE
// // // // // // if (restaurant.orderPizza) {
// // // // // //   restaurant.orderPizza('mushrooms', 'spinach');
// // // // // // }
// // // // // // // ["spinach"] // checkto see if there is an order for 'orderPizza' and if there is then returns
// // // // // // // mushrooms
// // // // // // // ["spinach"]

// // // // // // // you CAN DO IT THIS WAY AS WELL
// // // // // // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// // // // // // // mushrooms
// // // // // // // ["spinach"]

// // // // // // ////////////////////////////////////////////////
// // // // // // // The Nullish Coalescing Order (??)
// // // // // // ////////////////////////////////////////////////
// // // // // // // restaurant.numGuests = 0;
// // // // // // const guests = restaurant.numGuests || 10;
// // // // // // console.log(guests); // 10

// // // // // // // NULLISH: NULL and UNDEFINED (NOT 0 or ' ')... only if 'restaurant.numGuests' is UNDEFINED will this work
// // // // // // const guestCorrect = restaurant.numGuests ?? 10;
// // // // // // console.log(guestCorrect); // 23

// // // // // // FOR OF LOOP: can STILL be able to use 'break;' and 'continue';
// // // // // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // // // // console.log(menu); // ["Foccacia", "Bruschetta"...etc]
// // // // // for (const item of menu) console.log(item); //
// // // // // // Focaccia
// // // // // // Bruschetta
// // // // // // Garlic Bread
// // // // // // Caprese Salad
// // // // // // ...ETC

// // // // // // FOR ... OF LOOP
// // // // // // If you need the index it is more of a pain, but you can get the Index
// // // // // for (const item of menu.entries());
// // // // // // console.log(item);
// // // // // // [0, "Focaccia"]
// // // // // // [1, "Bruschetta"]
// // // // // // [2, "Garlic Bread"]
// // // // // // etc.

// // // // // console.log(menu.entries); // Array Iterator {}
// // // // // // console.log([...menu.entries]); // just to look at what is in the array

// // // // // ///////////////////////////////////////
// // // // // // CODING CHALLENGE #1
// // // // // ///////////////////////////////////////
// // // // // /*
// // // // // We're building a football betting app (soccer for my American friends 😅)!

// // // // // Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// // // // // 1. Create one player array for each team (variables 'players1' and 'players2')
// // // // // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // // // // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// // // // // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // // // // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // // // // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // // // // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// // // // // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// // // // // GOOD LUCK 😀
// // // // // */

// // // // // // const game = {
// // // // // //   team1: 'Bayern Munich',
// // // // // //   team2: 'Borrussia Dortmund',
// // // // // //   players: [
// // // // // //     [
// // // // // //       'Neuer',
// // // // // //       'Pavard',
// // // // // //       'Martinez',
// // // // // //       'Alaba',
// // // // // //       'Davies',
// // // // // //       'Kimmich',
// // // // // //       'Goretzka',
// // // // // //       'Coman',
// // // // // //       'Muller',
// // // // // //       'Gnarby',
// // // // // //       'Lewandowski',
// // // // // //     ],
// // // // // //     [
// // // // // //       'Burki',
// // // // // //       'Schulz',
// // // // // //       'Hummels',
// // // // // //       'Akanji',
// // // // // //       'Hakimi',
// // // // // //       'Weigl',
// // // // // //       'Witsel',
// // // // // //       'Hazard',
// // // // // //       'Brandt',
// // // // // //       'Sancho',
// // // // // //       'Gotze',
// // // // // //     ],
// // // // // //   ],
// // // // // //   score: '4:0',
// // // // // //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// // // // // //   date: 'Nov 9th, 2037',
// // // // // //   odds: {
// // // // // //     team1: 1.33,
// // // // // //     x: 3.25,
// // // // // //     team2: 6.5,
// // // // // //   },
// // // // // // };

// // // // // // // 1.) create one player array for each team ('players1', 'players2')
// // // // // // const [players1, players2] = game.players;
// // // // // // console.log(players1, players2);

// // // // // // // 2.)
// // // // // // const [gk, ...fieldPlayers] = players1;
// // // // // // console.log(gk, fieldPlayers);

// // // // // // // 3.)
// // // // // // const allPlayers = [...players1, ...players2];
// // // // // // console.log(allPlayers);

// // // // // // // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // // // // // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // // // // // console.log(players1Final);

// // // // // // // 5.) 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // // // // // const {
// // // // // //   odds: { team1, x: draw, team2 },
// // // // // // } = game;
// // // // // // console.log(team1, draw, team2);
// // // // // // // 1.33 3.25 6.5

// // // // // // // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // // // // // const printGoals = function (...players) {
// // // // // //   console.log(`${players.length} goals were scored.`);
// // // // // // };

// // // // // // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // // // // // printGoals('Davies', 'Muller');
// // // // // // printGoals(...game.scored);

// // // // // // //  7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// // // // // // // use LOGICAL OPERATOR
// // // // // // team1 < team2 && console.log('Team 1 is more likely to win.');
// // // // // // team2 < team1 && console.log('Team 2 is more likely to win.');
// // // // // // // Team 1 is more likely to win.

// // // ////////////////////////////////////////////////
// // // // Coding Challenge #2
// // // ////////////////////////////////////////////////
// // // /*
// // // Let's continue with our football betting app!

// // // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// // // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// // // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// // //       Odd of victory Bayern Munich: 1.33
// // //       Odd of draw: 3.25
// // //       Odd of victory Borrussia Dortmund: 6.5
// // // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// // // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// // //       {
// // //         Gnarby: 1,
// // //         Hummels: 1,
// // //         Lewandowski: 2
// // //       }

// // // GOOD LUCK 😀
// // // */
// // // const game = {
// // //   team1: 'Bayern Munich',
// // //   team2: 'Borrussia Dortmund',
// // //   players: [
// // //     [
// // //       'Neuer',
// // //       'Pavard',
// // //       'Martinez',
// // //       'Alaba',
// // //       'Davies',
// // //       'Kimmich',
// // //       'Goretzka',
// // //       'Coman',
// // //       'Muller',
// // //       'Gnarby',
// // //       'Lewandowski',
// // //     ],
// // //     [
// // //       'Burki',
// // //       'Schulz',
// // //       'Hummels',
// // //       'Akanji',
// // //       'Hakimi',
// // //       'Weigl',
// // //       'Witsel',
// // //       'Hazard',
// // //       'Brandt',
// // //       'Sancho',
// // //       'Gotze',
// // //     ],
// // //   ],
// // //   score: '4:0',
// // //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// // //   date: 'Nov 9th, 2037',
// // //   odds: {
// // //     team1: 1.33,
// // //     x: 3.25,
// // //     team2: 6.5,
// // //   },
// // // };

// // // // *** entries() RETURNS an objects [key, value] pairs ***
// // // // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// // // // RETURNS:
// // // // Goal 1: Lewandowski
// // // // Goal 2: Gnarby
// // // // Goal 3: Lewandowski
// // // // Goal 4: Hummels
// // // for (const [i, player] of game.scored.entries())
// // //   console.log(`Goal ${i + 1}: ${player}`);

// // // // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// // // let average = 0;
// // // const odds = Object.values(game.odds);

// // // for (const odd of odds) average += odd;
// // // console.log(average);

// // // // if you just do 'average /= odds' it returns NaN because you are dividing by the entire array
// // // average /= odds.length;
// // // console.log(average); // 3.693333333334

// // // // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// // // // Odd of victory Bayern Munich: 1.33
// // // // Odd of draw: 3.25
// // // // Odd of victory Borrussia Dortmund: 6.5
// // // // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// // // // entries() RETURNS pairs of [key, value] pairs
// // // for (const [team, odd] of Object.entries(game.odds)) {
// // //   const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
// // //   console.log(`Odd of ${teamString} ${odd}`);
// // // }

// // // // Odd of victory Bayern Munich: 1.33
// // // // Odd of draw: 3.25
// // // // Odd of victory Borrussia Dortmund: 6.5

// // ///////////////////////////////////////////////
// // // DESTRUCTURING PRACTICE
// // ///////////////////////////////////////////////
// // // OLD WAY
// // const arr = [1, 2, 3];
// // // const one = arr[0];
// // // const two = arr[1];

// // // NEW WAY
// // // const [one, two] = [1, 2, 3];

// // // //
// // // const arr1 = ['bacon', 'pizza', 'fries'];

// // // const [bacon, pizza, fries] = arr;
// // // console.log(pizza); // 2

// // // OLD WAY
// // const obj = {
// //   shroom: 'mushroom',
// //   banana: 'banana',
// //   pepper: 'pepper',
// // };

// // // const shroom = obj.shroom;
// // // const banana = obj.banana;
// // // const pepper = obj.pepper;

// // // NEW WAY
// // const { shroom, banana, pepper } = obj;
// // //rename a variable
// // // const { shroom: cremini, banana, pepper } = obj;

// // // DESTRUCTURING IN FOR LOOPS
// // const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

// // for (const { id } of users) {
// //   console.log(users); // [0: {}, 1: {}, 2: {},]
// // }

// // // DESTRUCTURING IN FUNCTIONS
// // const user = { id: 0, username: 'jeff' };

// // function haveFun({ id, username }) {
// //   console.log(`hi ${username}`);
// // }

// ///////////////////////////////////////////////
// // ES6 - 2 TYPES OF NEW DATA TYPES: sets and map
// ///////////////////////////////////////////////
// // SETS CAN HOLD MIXED DATA TYPES
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);
// // {"Pasta", "Pizza", "Risotta"}

// console.log(new Set('Jonas'));
// // {"J", "o", "n", "a", "s"}

// console.log(new Set());
// // Set can also be Empty -> logs: Set(0) {}

// console.log(ordersSet.size);
// // 3

// console.log(ordersSet.has('Pizza')); // true
// console.log(ordersSet.has('Bread')); // false

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto'); // removed properties from set
// console.log(ordersSet); // Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

// // console.log(ordersSet[0]);
// // this RETURNS undefined

// // *** NO WAY TO GET DATA OUT OF SET *** all values are unique
// // We just need to know if a data prop is in set, why we have has();

// for (const order of ordersSet) console.log(order);
// // Pasta
// // Pizza
// // Garlic Bread

// // SETS ARE USED TO REMOVE DUPLICATE VALUES
// // EXAMPLE
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // Interested in what positions are in the restaurant (no duplicates)

// // const staffUnique = new Set(staff);
// // console.log(staffUnique); // Set(3) {'Waiter', 'Chef', 'Manager'}

// //
// const staffUnique1 = [...new Set(staff)];
// console.log(staffUnique1); // ["Waiter", "Chef", "Manager"]
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// ); // 3

// console.log(new Set('jonasSchmedtmann').size); // 12

// ///////////////////////////////////////////////
// // ES6 - 2 TYPES OF NEW DATA TYPES: sets and map
// ///////////////////////////////////////////////
// // MAPS: MAPS VALUES TO KEYS, BIG DIFFERENCE BETWEEN OBJECTS IS THE KEYS CAN BE ANY TYPE OF KEY (CAN BE OTHER MAPS, ARRAYS, OBJECTS, ETC...)
// const restaurant = new Map();
// restaurant.set('name', 'Classico Italiano');
// restaurant.set(1, 'Firenze, Italy');
// console.log(restaurant.set(2, 'Lisbon, Portugal'));
// // Map(3) {"name" => "Classico Italiano", 1 => "Fireze, Italy", 2 => "Lisbon, Portugal"}

// restaurant
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open: :D')
//   .set(false, 'We are closed :(');

// console.log(restaurant.get('name')); // Classico Italiano
// console.log(restaurant.get(true)); // We are open: :D
// console.log(restaurant.get(1)); // Firenze, Italy

// // Can have Boolean keys
// const time = 21;
// console.log(
//   restaurant.get(
//     time > restaurant.get('open') && time < restaurant.get('close')
//   )
// );
// // We are open :D

// // METHODS AVAILABLE ON MAPS
// // check if a map contains a certain key
// console.log(restaurant.has('categories')); // true
// restaurant.delete(2);
// // restaurant.clear(); // Map(0) {}
// console.log(restaurant);
// console.log(restaurant.size); // 7

// // CAN USE OBJECTS AS MAP KEYS

// const arr = [1, 2];
// restaurant.set(arr, 'Test');
// restaurant.set(document.querySelector('h1'), 'Heading');

// console.log(restaurant); // 8 objects shown
// console.log(restaurant.size); // 8

// console.log(restaurant.get(arr)); // Test
// // this adds a 9th object // 8 : {h1 => "Heading"}

// //////////////////////////////////////////
// // Maps: Iterations
// //////////////////////////////////////////
// const question = new Map([
//   ['question', 'What is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 😃'],
//   [false, 'Try again!'],
// ]);

// console.log(question);
// // creates one object

// // Covert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);
// // Map(3) {'thu' => {}, "fri" => {}, "sat" => {}}

// // ITERATION WITH MAPS
// // QUIZ APP
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer)); // true

// // CONVERTING A MAP BACK TO AN ARRAY
// console.log([...question]);
// // console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());

// ///////////////////////////////////////
// // DATA STRUCTURES OVERVIEW:
// ///////////////////////////////////////
// /*
// SOURCES OF DATA
// 1. from the program itself
// 2. From the UI: Data input from the user or data written in DOM (eg tasks in todo app)
// 3. From external sources: data fetched for example from web API
// */
// /* Store data in DATA STRUCTURES
// 1. ARRAYS OR SETS: Store a simple list of data
// 2. OBJECTS OR MAPS: Stores key/value pairs, allows us to describe values

// - JSON DATA can be converted to Arrays or Objects because it uses the same format
// */

//////////////////////////////////////////
// CODING CHALLENGE #3
//////////////////////////////////////////
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

//

//////////////////////////////////////////
// WORKING WITH STRINGS - PART I
//////////////////////////////////////////
// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); // A
// console.log(plane[1]); // 3
// console.log(plane[2]); //2
// console.log('B737'[0]); // B
// console.log('B737'.length); // 4

// // INDEX METHODS ARE USEFUL WITH SLICE METHODS
// console.log(airline.indexOf('r')); // 6
// console.log(airline.lastIndexOf('r')); // 10
// console.log(airline.indexOf('Portugal')); // 8: this is case sensitive, will return -1 if it is not found

// // SLICE: returns at the position it is sliced at
// console.log(airline.slice(4)); // Air Portugal (does NOT change the underlying string, Impossible to mutate strings because they are PRIMITIVE)

// console.log(airline.slice(4, 7)); // Air: end value is NOT included in the string
// length is always 7-4 = 3 as in this EXAMPLE

// console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// console.log(airline.slice(-2)); // al
// console.log(airline.slice(1, -1)); // AP Air Portuga

// // PRACTICE: check if seat is a middle seat
// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😆');
//   else console.log('You got lucky ❤️');
// };

// checkMiddleSeat('11B'); // You got the middle seat
// checkMiddleSeat('23C'); // You got lucky
// checkMiddleSeat('3E'); // You got the middle seat

// // UNDERSTANDING WHY THIS WORKS
// // Strings: when a method is called on a string. JS converts string PRIMITIVE to string OBJECT BEHIND THE SCENES. This is called 'boxing'.
// console.log(new String('jonas')); // String {"jonas"} THIS SHOWS THAT
// console.log(typeof new String('jonas')); // object

// // This shows that JS converts it from 'object' above back to a 'string'
// console.log(typeof new String('jonas').slice(1)); // string

//////////////////////////////////////////
// WORKING WITH STRINGS - PART II
//////////////////////////////////////////
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Create a function and returns the correct one
// function passengerCorrect() {
//   const passengerLower = passenger1.toLowerCase();
//   return passengerLower[0].toUpperCase() + passengerLower.slice(1);
// }

// console.log(passengerCorrect('jOnAS'));

// // Comparing email
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n'; // input of email was wrong

// // COMPARE AND SEE IF THEY ARE THE SAME
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // REMOVES WHITE SPACES
// console.log(trimmedEmail); // hello@jonas.io

// // REPLACE ALL OF THAT WITH THIS - returns the same thing as above
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail); // hello@jonas.io
// console.log(email === normalizedEmail);

// // TODO: Create function that does the above for practice later

// // REPLACING
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS); // 288.97$

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// // RETURNS: All passengers come to boarding gate 23. Boarding door 23!
// // *** NOTICE IT ONLY REPLACED THE FIRST INSTANCE ***
// console.log(announcement.replace('door', 'gate'));

// // *** NEWEST WAY
// // RETURNS: All passengers come to boarding gate 23. Boarding gate 23!
// console.log(announcement.replaceAll('door', 'gate'));

// // *** OLD WAY: this will also work
// console.log(announcement.replaceAll(/door/g, 'gate'));

// // 3 METHODS THAT RETURN BOOLEANS: includes(), startsWith(), endsWith()
// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); // false
// console.log(plane.startsWith('Air')); // false

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family.');
// }

// // PRACTICE EXERCISE
// const checkBaggage = function (items) {
//   // usually check something by converting everything into lowercase
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a labtop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// console.log('a+very+nice+string'.split('+')); // (4) ["a", "very", "nice", "string"];
// console.log('Kim Carpico'.split(' ')); // ["Kim", "Carpico"]

// const [firstName, lastName] = 'Kim Carpico'.split(' ');

// // want to make the last name uppercase
// const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName); // Ms. Kim CARPICO

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('finn carpico');

// // PADDING A STRING to make a string a certain length
// const message = 'Go to gate 23';
// // padStart adds some characters to the beginning of the string
// // first parameter specifies how many characters you want to pad the string with and second, what you want to pad it with
// console.log(message.padStart(25, '+'));
// console.log('Jonas'.padStart(25, '+'));

// // PAD END
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log(message.padStart(20, '+').padEnd(30, '+'));

// // WORKING WITH CREDIT CARD NUMBERS: Implement a function that masks #
// const maskCreditCard = function (number) {
//   // you can convert a number to a string this way
//   // ** BC when one of the operants is a string all will become a string
//   const string = number + '';
//   const last = string.slice(-4);
//   return last.padStart(string.length, '*');
// };

// console.log(maskCreditCard(4815345689765444));
// console.log(maskCreditCard('5557778880001234'));

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };

// planesInLine(5); // There are 5 planes in line.
// planesInLine(3); // There are 3 planes in line.
// planesInLine(12); // There are 12 planes in line.

//////////////////////////////////////////
// CODING CHALLENGE #4
//////////////////////////////////////////
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    // split into two parts
    const [first, second] = row.toLowerCase().trim().split('_');
    console.log(row, first, second);
    const output = `${first} ${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// TEST THE CODE UP TO HERE BY PASTING THIS IN THE DEVELOPER CONSOLE
// test in the dev console by pasting 'underscore_case', etc from above
// THIS TEST DATA (pasted to textarea) -> underscoreCase
// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🛑 Delayed Departure from FAO to TXL (11h25)
//        Arrival from BRU to FAO (11h45)
// 🛑 Delayed Arrival from HEL to FAO (12h05)
//        Departure from FAO to LIS (12h30)

// split(): splits into an array
// console.log(flights.split('+')); // [""], [""]

// *** THIS WHOLE FOR-BLOCK OUTPUTS THE FOLLOWING:
// _Delayed_Departure fao93766109 txl2133758440 (11:25)
// _Arrival bru0943384722 fao93766109 (11:45)
// ETC.

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';'); // _Delayed_Departure;fao93766109;txl2133758440;11:25
  //_Arrival;bru0943384722;fao93766109;11:45
  //etc
  const output = `${type.startsWith('_Delayed') ? '🛑' : ' '} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from).toUpperCase()} ${getCode(to)} (${time.replace(
    ':',
    'h'
    // the 36 is trial-and-error, view the Dev Con to make sure everything lines up on the right-hand side
  )})`.padStart(36);
  console.log(output);
}

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}
