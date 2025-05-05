// ---------------------------------------------------------------------
// Part 1: Data structures and algorithms – simple data types.
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen institute, VIC , Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

// Step 1: Create an array with the given numbers
// Define a array of numbers
/**
 * Sorts the input array in ascending order.
 * @param {Array} inputArray - The array is build wwith the following numbers 11, 5, 8, 3, 25, 16, 31, 45, 14, 20.
 */
let inputArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Display the original array in HTML element with id "original-array"
document.getElementById('original-array').innerHTML = `<span class="bold note"> ${inputArray} </span>`;
//Print inputArray to the screen.
console.log(`The inputArray ${inputArray}`);

// Step 2: Function to sort the array in ascending order
/**
 * Sorts the input array in ascending order.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function ascendingSort(arr) {
  return arr.sort((a, b) => a - b);
}

// Create a copy of the array and sort it
let sortedArray = ascendingSort(inputArray.slice());

//Print the sorted array to the screen.
console.log(`The sorted array ${sortedArray}`);

// Display the sorted array in HTML element with id "sorted-array"
document.getElementById('sorted-array').innerHTML = `<span class="bold note"> ${sortedArray} </span>`;

// Step 3: Function to insert a number into the sorted array while keeping it sorted
/**
 * Inserts a number into the sorted array in its correct position.
 * Uses binary search to find the correct index.
 * @param {Array} arr - The sorted array where the number will be inserted.
 * @param {number} num - The number to insert.
 * @returns {Array} - The updated array with the number inserted.
 */
function insertNumber(arr, num) {
  let begin = 0, end = arr.length - 1;

  // Use binary search to determine the correct insertion position
  while (begin <= end) {
    let middle = Math.floor((begin + end) / 2);
    if (arr[middle] < num) {
      begin = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  // Insert the number at the determined position
  arr.splice(begin, 0, num);
  return arr;
}

// Insert the numbers 19, 23, and 30 into the sorted array one by one
insertNumber(sortedArray, 19);
insertNumber(sortedArray, 23);
insertNumber(sortedArray, 30);

// Display the array after insertion in HTML element with id "inserted-array"
document.getElementById('inserted-array').innerHTML = `<span class="bold note"> ${sortedArray} </span>`;

//Print the array after insert to the screen.
console.log(`The sorted array after insert the numbers 19, 23 and 30: ${sortedArray}`);

// Step 4: Function to remove a number from the array
/**
 * Removes the first occurrence of a given number from the array.
 * @param {Array} arr - The array from which the number will be removed.
 * @param {number} num - The number to remove.
 * @returns {Array} - The updated array after removal.
 */
function removeNumber(arr, num) {
  let index = arr.indexOf(num);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

// Remove the numbers 8 and 31 from the array
removeNumber(sortedArray, 8);
removeNumber(sortedArray, 31);

//Print the array after remove the number 8 and 31 to the screen.
console.log(`The array after remove the numbers 8 and 31: ${sortedArray}`);


// Display the array after removal in HTML element with id "removedArray"
document.getElementById('removed-array').innerHTML = `<span class="bold note"> ${sortedArray} </span>`;

// Step 5: Create the sequential search function
/**
 * Searches for a target number in the array using sequential search.
 * @param {Array} arr - The array to search.
 * @param {number} target - The number to find.
 * @returns {number} - The index of the target if found, or -1 if not found.
 */
function sequentialSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Test the sequential search function and display the results
// Test case 1: Search for number 20
let numberTest = 20;
if (sequentialSearch(sortedArray, numberTest) === -1) {
  console.log(`Number ${numberTest} not found in the array`);
  document.getElementById('index-sequential-search-1').innerHTML = `<span class="bold">Number <span class="note"> ${numberTest} </span> not found in the array</span>`;
} else {
  console.log(`The index of number ${numberTest} in the array is ${sequentialSearch(sortedArray, numberTest)}`);
  document.getElementById('index-sequential-search-1').innerHTML = `<span class="bold">The index of number <span class="note"> ${numberTest} </span> in the array is <span class="note"> ${sequentialSearch(sortedArray, numberTest)} </span></span>`;
}

// Test case 2: Search for number 4
numberTest = 4;
if (sequentialSearch(sortedArray, numberTest) === -1) {
  console.log(`Number ${numberTest} not found in the array`);
  document.getElementById('index-sequential-search-2').innerHTML = `<span class="bold">Number <span class="note"> ${numberTest} </span> not found in the array</span>`;
} else {
  console.log(`The index of number ${numberTest} in the array is ${sequentialSearch(sortedArray, numberTest)}`);
  document.getElementById('index-sequential-search-2').innerHTML = `<span class="bold">The index of number <span class="note"> ${numberTest} </span> in the array is <span class="note"> ${sequentialSearch(sortedArray, numberTest)} </span></span>`;
}

// Step 6: Create the binary search function
/**
 * Searches for a target number in a sorted array using binary search.
 * @param {Array} arr - The sorted array to search.
 * @param {number} target - The number to search for.
 * @returns {number} - The index of the target if found, or -1 if not found.
 */
function binarySearch(arr, target) {
  let begin = 0, end = arr.length - 1;

  while (begin <= end) {
    let middle = Math.floor((begin + end) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      begin = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

// Test the binary search function and display the results

// Test case 1: Search for number 100
let numberTest2 = 100;
if (binarySearch(sortedArray, numberTest2) === -1) {
  console.log(`Number ${numberTest2} not found in the array`);
  document.getElementById('index-binary-search-1').innerHTML = `<span class="bold">Number <span class="note"> ${numberTest2} </span> not found in the array</span>`;
} else {
  console.log(`The index of number ${numberTest2} in the array is ${binarySearch(sortedArray, numberTest2)}`);
  document.getElementById('index-binary-search-1').innerHTML = `<span class="bold">The index of number <span class="note"> ${numberTest2} </span> in the array is <span class="note"> ${binarySearch(sortedArray, numberTest2)} </span> (Array[${binarySearch(sortedArray, numberTest2)}] = ${sortedArray[binarySearch(sortedArray, numberTest2)]})</span>`;
}

// Test case 2: Search for number 11
numberTest2 = 11;
if (binarySearch(sortedArray, numberTest2) === -1) {
  console.log(`Number ${numberTest2} not found in the array`);
  document.getElementById('index-binary-search-2').innerHTML = `<span class="bold">Number <span class="note"> ${numberTest2} </span> not found in the array</span>`;
} else {
  console.log(`The index of number ${numberTest2} in the array is ${binarySearch(sortedArray, numberTest2)}`);
  document.getElementById('index-binary-search-2').innerHTML = `<span class="bold">The index of number <span class="note"> ${numberTest2} </span> in the array is <span class="note"> ${binarySearch(sortedArray, numberTest2)} </span> (Array[${binarySearch(sortedArray, numberTest2)}] = ${sortedArray[binarySearch(sortedArray, numberTest2)]})</span>`;
}


// Display the final state of the array in all HTML elements with the class "show-array"
let showArrayElements = document.getElementsByClassName('show-array');
for (let i = 0; i < showArrayElements.length; i++) {
  showArrayElements[i].innerHTML = `Array = { ${sortedArray} }`;
}
