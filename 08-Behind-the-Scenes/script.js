'use strict';

// calcAge function is defined in the Global Scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);
    }
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); - won't work outside of scope
// printAge(); - won't work outside of scope
