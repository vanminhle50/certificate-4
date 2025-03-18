// File: Objects.js
// Desc: File to show objects and how to use them
// Author: Amberle Seidl
// Date: 10/2/2025

let myObject = {
  'name' : 'Daniel',
  'age' : 28
};
console.log(myObject);

// Accessing a property
console.log(myObject.name);
console.log(myObject['name']);

// Add a property
myObject.job = 'Teacher';
console.log(myObject);

// Modify a property
myObject.age = 32;
console.log(myObject);

// Remove a property
delete myObject.job;
console.log(myObject);

// Check for a property
console.log('job' in myObject);
console.log(myObject.hasOwnProperty('age'));

// loop through objects
for(let key in myObject){
  console.log(`${key}: ${myObject[key]}`)
}
myObject.address='Clayton'
console.log(myObject);

// Merging objects
let obj1 = { name: 'Amber'};
let obj2 = { age: 27};

let obj3 = {...obj1, ...obj2};
console.log(obj3);

// Find the number of properties
console.log(Object.keys(myObject).length);

// Checking if we have an object
// Check the type and that it is not empty
console.log(typeof myObject === 'object' && myObject != null);