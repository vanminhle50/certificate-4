// 1. We need to bring in the fs module from Node
const fs = require('node:fs');

// 2. Create some data to write to a file
const data = "This is some text we are going to write to a file";

// 3. Use the writeFile function.
// This function takes in 4 parameters
// the file name, 
// The data
// Options - this is optional
// And a callback function

//4. Write file
console.log("Writing to file");
fs.writeFile('output.txt', data, (err) => {
  // check if there is an error
  if (err){
    console.error(err);
  } else {
    // Log that the file was written successfuly.
    console.log("File written successfully");
  }
});

// 5. Use the readFile function
// This function takes in 3 parameters
// The file name
// The options - this is optional
// And a callback function

// 6. read from file
console.log("Reading from file");
fs.readFile('output.txt', (err, fileText) => {
  // check for any errors
  if (err) {
    console.error(err);
    return;
  } 
  // output read file to the console.
  console.log("The file contents are:")
  console.log(fileText.toString());
});

// Note: There are other ways to do this.
// You also have 
// fsPromises.readFile()
// fsPromises.writeFile()
// These functions are similar to above, 
// but without the callback.
// They also return a promise.