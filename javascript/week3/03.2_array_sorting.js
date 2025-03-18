// File: array_sorting.js
// This file shows how to sort arrays.
// Author: Amberle Seidl
// Last modified: 21/02/2024
// Version: 1.0.0

// Declare a cars array
const cars = ['Honda', 'BMW', 'Toyota', 'Mercedes-Benz', 'Ford', 'Audi'];
// Print out the array
console.log('cars array:');
console.log(cars);
// We can use the Array.sort() method to sort an array:
const sortedCars = cars.sort();
// Print out the array
console.log('sortedCars array:');
console.log(sortedCars);

// Declare a number array
const numbers = [40, 100, 1, 5, 25, 10];
// Print out the array
console.log('Numbers array:');
console.log(numbers);
// Use numbers.sort to sort the array
const sortedNumbers = numbers.sort();
// Print out the array
console.log('sortedNumbers array: ');
console.log(sortedNumbers);
// output ?
// Looks like we have a problem
// Numbers arrays are sorted as strings.
// To fix this we can pass through a compare function
// We compare a to b, if a is less than b, a will be before b.
// This will sort in ascending order.
const sortedNumbersA = numbers.sort(function(a, b ){ return a - b });
console.log('Numbers sorted ascending order:');
console.log(sortedNumbersA);
// To sort in decending order
// reverse the return, return b - a.
const sortedNumbersD = numbers.sort(function(a, b){ return b - a});
console.log('Numbers sorted descending order:');
console.log(sortedNumbersD);

// Can use arrow fuctions here too!
// Shorthand
const sortedNumbersAA = numbers.sort((a, b) => a - b);
const sortedNumbersDD = numbers.sort((a, b) => b - a);