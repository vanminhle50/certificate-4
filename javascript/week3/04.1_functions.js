// File: functions.js
// Desc: File to show advanced use of functions
// Author: Amberle Seidl
// Date: 14/2/2025

// General function definition
// Function to take in two numbers and return the sum.
function myFunction(a, b){
  let c = a + b;
  return c;
}

console.log(myFunction(1, 3)); // result 4

// Refactor myFunction
function myFunction2(a, b){
  return a + b;
}

console.log(myFunction2(2, 5)); // result 7

// Arrow function definition
const someFunction = () => {
  // function code.
}
someFunction();

// function shortcut - arrow functions.
const myFunction3 = (a, b) => {
  let c = a + b;
  return c;
}

console.log(myFunction3(3, 6)); // result 9

// Refactor myFunction3
const myFunction4 = (a, b) => {
  return a + b;
}

console.log(myFunction4(2, 3)); // result 5

// refactor myFunction4 - implicit returns
const myFunction5 = (a, b) => a + b;

console.log(myFunction5(4, 8)); // result 12

// Anonymous functions
// Tradional
( function (a) {
  return a + 100;
});
//  1. Remove the word function, place an arrow
// before the opening brace
( a ) => {
  return a + 100;
}
// 2. remove the return and braces, the return is implied
(a) => a + 100;
// 3. rempove the parameter parentheses
a => a + 100;

// Hoisting functions
console.log(myFunction6(4,2)); // result 6

function myFunction6(a, b){
  return a + b;
}
// This function - 6 definition - is hoisted to the top 
// of the file

const myFunction7 = (a, b) => a + b;
console.log(myFunction7(4, 2)); 
// cannot access myFunction6
// It hasn't been created yet

