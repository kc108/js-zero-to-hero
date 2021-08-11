// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// const x = "23";

// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(19));

// // PROBLEM 1:
// // We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem
// // - What is temp amplitude? Answer: difference between highest and lowest temp
// // - How to compute max and min temperatures?
// // - What's a sensor error? And what do do?

// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   // Assume that the first index is the max, even if it isn't
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     // if typeof curTem is different than a number continue
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 1, 8]);
// // max = 3
// // max = 7
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// /////////////////////////////
// // PROBLEM 2: function should now receive 2 arrays of temps
// /////////////////////////////
// // 1) Understanding the problem
// // - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays.

// // 2) Breaking up into sub-problems
// // -Merge 2 Arrays
// // concat()

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   // Assume that the first index is the max, even if it isn't
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     // if typeof curTem is different than a number continue
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 1, 8]);
// // max = 3
// // max = 7
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

//////////////////////////////////////////
// DEBUGGING - TESTING: bug, got it it's name because a REAL BUG was causing errors in Harvard's computer in the 1940's
//////////////////////////////////////////
// EXAMPLE
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    value: Number(prompt("Degrees celcius:")),
  };

  console.log(measurement); // this is where the error is "89" is a string
  console.table(measurement); // makes a table on the console.

  console.log(measurement.value); // 89
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());
