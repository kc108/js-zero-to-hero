// // // Remember, we're gonna use strict mode in all scripts now!
// // "use strict";

// // const x = "23";

// // const calcAge = (birthYear) => 2037 - birthYear;
// // console.log(calcAge(19));

// // // PROBLEM 1:
// // // We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// // const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // // 1) Understanding the problem
// // // - What is temp amplitude? Answer: difference between highest and lowest temp
// // // - How to compute max and min temperatures?
// // // - What's a sensor error? And what do do?

// // // 2) Breaking up into sub-problems
// // // - How to ignore errors?
// // // - Find max value in temp array
// // // - Find min value in temp array
// // // - Subtract min from max (amplitude) and return it

// // const calcTempAmplitude = function (temps) {
// //   // Assume that the first index is the max, even if it isn't
// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];

// //     // if typeof curTem is different than a number continue
// //     if (typeof curTemp !== "number") continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }
// //   console.log(max, min);
// //   return max - min;
// // };

// // // calcTempAmplitude([3, 7, 4, 1, 8]);
// // // max = 3
// // // max = 7
// // const amplitude = calcTempAmplitude(temperatures);
// // console.log(amplitude);

// // /////////////////////////////
// // // PROBLEM 2: function should now receive 2 arrays of temps
// // /////////////////////////////
// // // 1) Understanding the problem
// // // - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays.

// // // 2) Breaking up into sub-problems
// // // -Merge 2 Arrays
// // // concat()

// // const calcTempAmplitudeNew = function (t1, t2) {
// //   const temps = t1.concat(t2);
// //   console.log(temps);

// //   // Assume that the first index is the max, even if it isn't
// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];

// //     // if typeof curTem is different than a number continue
// //     if (typeof curTemp !== "number") continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }
// //   console.log(max, min);
// //   return max - min;
// // };

// // // calcTempAmplitude([3, 7, 4, 1, 8]);
// // // max = 3
// // // max = 7
// // const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// // console.log(amplitudeNew);

// //////////////////////////////////////////
// // DEBUGGING - TESTING: bug, got it it's name because a REAL BUG was causing errors in Harvard's computer in the 1940's
// //////////////////////////////////////////
// // EXAMPLE
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     // C) FIX
//     value: Number(prompt("Degrees celcius:")),
//   };

//   console.log(measurement); // this is where the error is "89" is a string
//   console.table(measurement); // makes a table on the console.

//   console.log(measurement.value); // 89
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY THE BUG
// console.log(measureKelvin());

///////////////////////////////////////
// CODING CHALLENGE
///////////////////////////////////////
// given an array of forecasted maximum temperatures, the thermometer dispalys a string with these temperatures

// Example: [17, 21, 23] will print "...17C in 1 days ...21C in 2 days ...23C in 3 days"

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// TEST DATA 1: [17, 21, 23];
// TEST DATA 2: [12, 5, -5, 0, 4];

// 1) Understand the problem
// - Array transformed to string, separated by...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with Celsius
// - String needs to contain day (index + 1)
// - Add ...between elements and start and end of string
// - log string to console
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}°C ... ${data1[1]}°C ...${data1[2]}°C`);

const printForecast = function (arr) {
  let string = "";

  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("..." + string);
};

printForecast(data1);
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}°C ...${data1[1]}°C ...${data1[2]}°C ...`);

// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     // transform array into a string
//     str = str + `${arr[i]}°C in ${i + 1} days ... `;
//   }
//   console.log(str);
// };

// printForecast(data1);

// // 2 + 3 = 5 + 4 = 9
// // [2, 3, 4]
