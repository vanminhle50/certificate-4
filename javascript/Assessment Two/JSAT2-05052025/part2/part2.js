// ---------------------------------------------------------------------
// Part 2: Data Structure - Object
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen Institute, VIC, Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

// Step 1: Create an object with the given movie details
/**
 * @const {Object} myMovie - The movie object containing title and year of release.
 * @property {string} myMovie.title - The title of the movie, e.g., "The Longest Day".
 * @property {number} myMovie.year - The year of the film's production. 
 */
// Define an object "myMovie" with initial properties "title" and "year"
const myMovie = { title: "The longest day", year: 1964 };

// ---------------------------------------------------------------------
// Function: showObject
// Description: Returns an HTML string displaying all properties of an object.
// Parameters:
//    myObject - The object whose properties will be displayed.
// Returns:
//    A string containing HTML code that lists each property and its value.
// ---------------------------------------------------------------------
function showObject(myObject) {
  // Variable to accumulate the result HTML string
  let resultString = "";
  // Iterate over all properties in the object using a for-in loop
  for (let index in myObject) {
    // Append each property name and its value to the result string, using HTML formatting
    resultString += `<span class="bold"><span class="note">${index}</span>: ${myObject[index]} <br></span>`;
  }
  // Return the complete HTML string
  return resultString;
}

// Display the original object by updating the HTML element with id "inputObject"
// "inputObject" is assumed to be an existing HTML element where the movie details will be shown
document.getElementById("input-object").innerHTML = showObject(myMovie);
//Print the object to the console
console.log(myMovie);

// ---------------------------------------------------------------------
// Step 2: Add properties to the object
/**
 * @property { float number } myMovie.rating - The rating of the movie.
 * @property { string } myMovie.summary - The summary of the movie
 */
// Add a new property "rating" with a value of 5 to the "myMovie" object
myMovie.rating = 5;
// Add a new property "summary" with a description of the movie to the "myMovie" object
myMovie.summary = "World War II movie about the Normandy landings";

// Display the updated object with new properties in the HTML element with id "addPropertiesObject"
document.getElementById("add-properties-object").innerHTML = showObject(myMovie);

//Print the object to the console after add properties.
console.log(`The object to the console after add properties:`);
console.log(myMovie);

// Step 3: Change the values of the properties

// Update the "rating" property to 4
myMovie.rating = 4;
// Update the "year" property to 1962
myMovie.year = 1962;

//Print the object to the console after changing properties.
console.log(`The object to the console after changing properties:`);
console.log(myMovie);
// Display the object with changed property values in the HTML element with id "changingPropertiesObject"
document.getElementById("changing-properties-object").innerHTML = showObject(myMovie);

// Step 4: Remove a property from the object
// Remove the "summary" property from the "myMovie" object
delete myMovie.summary;

//Print the object to the console after deleting the "summary" property.
console.log(`The object to the console after deleting the "summary" property:`);
console.log(myMovie);
// Display the object after deleting the "summary" property in the HTML element with id "deletePropertyObject"
document.getElementById("delete-properties-object").innerHTML = showObject(myMovie);
