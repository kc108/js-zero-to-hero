# 3-DEVELOPER SKILLS

---

## 4 Steps to Solve Any Problem

1. make sure you understand 100% of the problem

- ask the right questions to get a clear picture of the problem
- eg: 'what to do if something else is passed in?'

2. Divide and conquer: Break a big problem into smaller sub-problems

- e.g., check if argument is a number, string or an array
- e.g., implement reversing a #

3. Don't be afraid of research.

4. For bigger problems, write pseudo-code before writing actual code

---

## The Debugging Process

- may work in one browser & not another
- writing Testing as you code is an important concept and should be done as a best practice

### Debugging

- 1. Debugger to use breakpoints
- in Developer console, go-to 'Sources', then script.js

---

## DOM Manipulation

###### August 14, 2021

##### SECTION: 05-Guess-My-Number

- jQuery
- CSS DOM Manipulation
- jQuery modal practice
- refactoring when guess is either too low or high by using ternary operator

---

## Modal Window

###### August 14, 2021

##### SECTION: 06-Modal

- used jQuery to manipulate style.css and other js

##### SECTION: 07-Pig-Game

- Rolling dice game practice
- completed Pig_Game rolling dice game

##### SECTION 8: How JavaScript works behind the scenes

- Review of JS behind the hood, largely theory-based
- Reviewed Hoisting
- typing 'window' in the Dev Console shows all the properties of an element
- 'THIS' keyword
- Primitives, Objects and JS Engine

---

- Primitives: number, string, boolean, undefined, null, symbol, BigInt
- Objects (Reference types): Object literal, arrays, function.. and many more

- JS Engine: Two Components: Call Stack and the Heap...
- 1.) All Objects are stored in the 'Heap'
- 2.) Primitives are stored in the 'Call Stack' because this is where Execution Context run

- \*\*\* YOU CAN CHANGE 'const' VARIABLES WHEN USING REFERENCE VALUES !!!
- ** 'const' variable is ONLY immutable with PRIMITIVE VALUES \_**

---

#### Merging two Objects Using 'Object.assign({})

---

##### SECTION 9: Data Structures

- Destructuring

- spread operator works with everything that is 'iterables'. This does NOT include objects.
- Reviewed Rest Pattern
  rest pattern is on the left side of =
  spread pattern is on the right side of the =
- short circuiting if the 1st value is a truthy value it will return the Truthy value.

- Reviewed Object.values() -> RETURNS the values from [key, value] pairs
- Reviewed Object.entries() -> RETURNS the [key, value] pairs of an object
- Coding Challenge #2 -> REVIEWED \*\*\*

---

###### Arrays vs. Sets AND Objects vs. Maps

###### Arrays

- 1. use when you need ORDERED list of values (might contain duplicates)
- 2. use when you need to manipulate data

###### Sets

- 1. use when you need to work with UNIQUE values
- 2. use when HIGH-PERFORMANCE is really important
- 3. use to remove duplicates from arrays

##### OBJECTS VS. MAPS - when we need to display key/value pairs

- maps - new to ES6

###### MAPS

- 1. better performance
- 2. keys can have ANY data type
- 3. easy to iterate
- 4. easy to compute size

###### OBJECTS

- 1. more "traditional" key/value store("abused" objects)
- 2. easier to write and access values with . and []
- 3. with JSON data objects are more useful than maps because that is how the data is read by the computer

---

###### WORKING WITH STRINGS JS

- Methods
- repeat()
- padStart()
- padEnd()
- join()
- splice()
- split()
- replace()
- replaceAll()
- trim() -> removes whitespaces
- toUpperCase
- toLowerCase

##### A CLOSER LOOK AT FUNCTIONS

- call() method on object methods
- bind(): IMPORTANT - review this more
- apply()
- setTimeOut(): learned how to set a timer with a closure

##### ARRAYS BANKIST

- join()
- concat()
- reverse(): MUTATES THE ORIGINAL ARRAY
- slice(): does NOT change the original array
- splice(): changes the original array

// \*\*\* OTHER THAN THESE DIFFERENCES: it is a matter of personal preferences

- forEach(): you cannot break out of forEach(), will not be able to continue; or break;
- for.. of loop lets you break out of it
- map() vs forEach()
- use forEach when you don't want a separate array
- map(): creates a new array
- reduce()

##### chaining methods

- .filter -> .map -> .reduce()
- you can chain as many methods as you want as long as they return a new array
- THEREFORE you cannot chain something to the end of reduce()
- reviewed difference between filter() and find()
  - 1. filter(): returns all of the elements that meet a specific condition
  - 2. find(): only returns the first condition that meets a conditions
  - \*\*\* find only returns the element itself, WHILE filter() returns an array
