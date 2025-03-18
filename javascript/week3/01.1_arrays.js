// File: arrays.js
// Desc: File to show arrays and some of their functions
// Author: Amberle Seidl
// Date: 10/2/2025

// Define array
const myArr = [94, 23, 14, 9, 43, 62, 52, 1]
console.log(myArr);

// add to the end of the array
myArr.push(101);
console.log(myArr);

// remove from the end of the array
myArr.pop();
console.log(myArr);

// Add to the beginning of the array
myArr.unshift(88);
console.log(myArr);

// remove the beginning of the array
myArr.shift();
console.log(myArr);

// Change the elements in the array
// slice(start, end); returns new array
console.log( myArr.slice(2, 4));

// Change elements in the array
// splice add in or remove 
// splice(index, removeElements, addedElements )
myArr.splice(2, 0, 88, 57);
console.log(myArr);

// 1D Arrays
let someVar = ':p';
const choices = ['rock', 'paper', 'scissors'];
const myArray = [1, 'here', {id: 3}, 'hello there', someVar];

// 2D arrays
const my2DArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(my2DArray[1][1]);

// create 3 1D Arrays
const row1 = [1,2,3];
const row2 = [4,5,6];
const row3 = [7,8,9];

// Create a 2D array with 3 1D arrays
const board = [row1, row2, row3];
console.log(board);