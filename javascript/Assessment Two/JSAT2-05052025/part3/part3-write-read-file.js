// ---------------------------------------------------------------------
// Part 3: Working with files
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen institute, VIC , Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

//Step 07: Write a text file using Node.js
// Import the 'fs' module from Node.js to work with the file system
const fs = require('node:fs');
// Define a string that will be written to the file
const data = "This is a string that we are going to write to file.";
// Log a message to the console to indicate that we are writing to a file
console.log("Writing to file");
// Use the 'writeFile' function to write the data to 'output.txt'
fs.writeFile('./file-text/output.txt', data, (err) => {
    // Check for errors during writing
    if (err) {
        // Log the error if any occurs
        console.log(err);
    } else {
        // Confirm successful writing
        console.log("File written successfully");
    }
});

//Step 08: Read a text file using Node.js
// Use the 'readFile' function to read the contents of 'output.txt'
fs.readFile("./file-text/output.txt", (err, fileText) => {
    // Check for errors during reading
    // Log a message to the console to indicate that we are reading from a file
    console.log("Reading from file");
    if (err) {
        // Log the error if any occurs
        console.error(err);
        return;
    }
    // Confirm successful reading
    // Display the content of the file
    console.log("The file content are: ");
    // Convert the file content to string and log it to the console
    console.log(fileText.toString());
});
