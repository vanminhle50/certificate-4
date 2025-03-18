// File: binary_search.js
// This file shows how binary search works
// Author: Amberle Seidl
// Last modified: 13/02/2024
// Version: 1.0.0

// Create array to search
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
console.log(sortedArray);

// Set the value we are searching for.
const key = 23;
console.log(`Key: ${key}`);

// Create the search function.
// Parameter: array to search and key to be found
// returns: the index of the element or -1 if not found
function binarySearch(searchArray, target){
  // Set the found value to -1 (not found)
  // If found >= 0, the target was found.
  let found = -1;
  console.log(`Array: ${searchArray}`);
  console.log(`Target: ${target}`);

  // init the start and end points
  let start = 0;
  let end = searchArray.length -1;
  console.log(`Start: ${start}, End: ${end}`);

  // Loop through while the start does not meet the end
  while (start <= end){
    // Find the mid index
    let mid = Math.floor((start + end)/2);
    console.log(`Mid: ${mid}`);

    // Test if the element is present at the mid.
    if(searchArray[mid] == target){
      console.log(`SearchArray[${mid}]: ${searchArray[mid]}`)
      found = mid;
      break;
    } else if (searchArray[mid] < target){
      // look in the right half
      console.log(`SearchArray[${mid}]: ${searchArray[mid]}`)
      start = mid +1;
      console.log(`Start: ${start}, End: ${end}`);
    } else {
      // look in the left half
      console.log(`SearchArray[${mid}]: ${searchArray[mid]}`)
      end = mid - 1;
      console.log(`Start: ${start}, End: ${end}`);
    }
  } // End While
  return found;
}

// Call the function
const result = binarySearch(sortedArray, key);
// Output results
if (result == -1){
  console.log(`The key of ${key} was not found`)
} else {
  console.log(`The key of ${key} was found at index ${result}`)
}