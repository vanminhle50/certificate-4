//Step 07:
// Import the 'fs' module from Node.js to work with the file system
const fs = require('node:fs'); 
// Define a string that will be written to the file
const data = "This is a string that we are going to write to file.";
console.log("Writing to file");
// Use the 'writeFile' function to write the data to 'output.txt'
fs.writeFile('./file-text/output.txt', data, (err) => {
    // Check for errors during writing
    if (err) {
        console.log(err); // Log the error if any occurs
    } else {
        console.log("File written successfully"); // Confirm successful writing
    }
});
//Step 08:
console.log("Reading from file");
// Use the 'readFile' function to read the contents of 'output.txt'
fs.readFile("./file-text/output.txt", (err, fileText) => {
    // Check for errors during reading
    if (err) {
        console.error(err); // Log the error if any occurs
        return;
    }
    console.log("The file content are: ");
    console.log(fileText.toString()); // Convert the file content to string and log it
});
