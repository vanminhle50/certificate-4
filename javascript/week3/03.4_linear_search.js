// File: linear_search.js
// This file shows how linear search works
// Author: Amberle Seidl
// Last modified: 13/02/2024
// Version: 1.0.0

// Create the array to search
const searchArray = [10, 50, 30, 70, 80, 60, 20, 90, 40];
console.log(searchArray);

// Set the value we are searching for.
let key = 20;
console.log(`Key: ${key}`);

// Create the search function.
// Parameter: array to search and key to be found
// returns: the index of the element or -1 if not found
function linearSearch(arraySearch, target){
  // Set the found value to -1 (not found)
  // If found >= 0, the target was found.
  let found = -1;
  console.log(`Array: ${arraySearch}`);
  console.log(`Target: ${target}`);
/* 
  for (i = 0; i < arraySearch.length; i++){
    console.log(`arraySearch[${i}]: ${arraySearch[i]}`); // wrong position
    if(arraySearch[i] == target){
      found = i;
      break;
    }
  }
  return found;
} */
  for (i=0; i<arraySearch.length;i++){
    if(arraySearch[i]==target){
      found =i;
      console.log(`Array Search[${i}]: ${arraySearch[i]}`);
      break;
    }
  }
  return found;
}


// Call the function
const result = linearSearch(searchArray, key);
// Output results
if (result == -1){
  console.log(`The key of ${key} was not found`)
} else {
  console.log(`The key of ${key} was found at index ${result}`)
}