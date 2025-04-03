//=================================================================================
//  File Name: script.js
// Author Name: Van Minh Le
// Student ID: 100693330
// Major: Use Version Control in Development Environments
//=================================================================================
/**
 * @description This is script file for Movie Manager App
 * functionalities:
 * PART 1: Create Data for the Movie Management Website App
 * PART 2: Function of the Movie Management Website App
 * - SECTION 01: Display Section
 * - SECTION 02: Add a Movie Section
 * - SECTION 03: Sort Movie and Reset Data Section (Data Tool Section)
 * - SECTION 04: Search Movie Section
 * PART 3: Automatically Functions was called when website opened
 */
//=================================================================================

// PART 01: CREATE DATA FOR THE MOVIE MANAGEMENT WEBSITE APP
/* Create Movie Class with 4 property MovieID, title, year, rating */
/**
 * @class Movie
 * @description Represents a movie with an ID, title, year, and rating.
 * @constructor
 * @property {string} movieID - The unique ID of the movie.
 * @property {string} title - The title of the movie.
 * @property {number} year - The release year of the movie.
 * @property {parseFloat} rating - The rating of the movie (0-10).
 */
class Movie {
    constructor(movieID, title, year, rating) {
        this.movieID = movieID;
        this.title = title;
        this.year = year;
        this.rating = rating;
    };
}
// Create the movielist array with 10 movie objects each has 4 properties (movieID, title, year, rating).
// The movieID is unique for each movie object.
// The title is a string, the year is a year number type yyyy, and the rating is a float number.
/**
 * @var {Array<Movie>} movieList
 * @description An array of Movie objects representing a list of 10 movie objects.
 */
let movieList = [
    new Movie("N001", "Narcos", 2015, 8.8),
    new Movie("T001", "The The Irishman", 2019, 7.8),
    new Movie("T002", "The Dark Knight", 2008, 9.0),
    new Movie("S001", "Stranger Things", 2016, 8.7),
    new Movie("T003", "The Witcher", 2019, 8.1),
    new Movie("S002", "Schindler's List", 1993, 9.0),
    new Movie("T004", "The Lord of the Rings", 2003, 9.0),
    new Movie("P001", "Pulp Fiction", 1994, 8.90),
    new Movie("T005", "The Good, the Bad and the Ugly", 1966, 8.8),
    new Movie("F001", "Fight Club", 1999, 8.1)
];
// Deep copy an independent copy of movieList into originalData - It use for reset data function.
let originalData = structuredClone(movieList);

// Get the element with the ID "movieListTbody" from the HTML to specify where to display the movie list.
let movieListTbody = document.getElementById('movieListTbody');

//Create movieManager class for managing movie data.
/**
 * @class MovieManager
 * @description Manages the movie list and provides methods for adding, sorting, searching, and displaying movies.
 */
let movieManager = new MovieManager(movieListTbody, movieList);

// END OF PART 01: CREATE DATA FOR MOVIE LIST

// PART 02: FUNCTION OF THE MOVIE MANGAGEMENT WEBSITE APP

// SECTION 01: DISPLAY SECTION.
/**
 * Section 01 include the following functions:
 * 0. Display Data: Display the movie data in the table. It automatically called when the website is opened through constructor of class MovieManager.
 * 1. Display Function Section: Toggle the visibility of sections when the function buttons are clicked.
 * 2. Refresh Data: Refresh the movie data in the table.
 */

// Function 01. Display Function Section
// Define toggleSectionDisplay function to show a specified form when click the function button.
/**
 * @function toggleSectionDisplay 
 * @description Toggles the visibility of sections and sets the active state for function buttons.
 * @param {string} rootID - The ID of the section to display.
 * @param {HTMLElement} currentButton - The button that was clicked.
 */

function toggleSectionDisplay(rootID, currentButton) {
    // Part 1: Toggle the visibility of sections.
    // Step 01: Set display property with value "none" all sections forms to hide all section forms when button was clicked.
    // Get HTMLCollection of all elements has classname 'toggle-section' and assign it to toggleSection variable.
    const toggleSection = document.getElementsByClassName('toggle-section');
    // Loop through each element in the toggleSection HTMLCollection and set its display property to 'none' to hide it.
    for (let i = 0; i < toggleSection.length; i++) {
        toggleSection[i].style.display = 'none';
    }

    //Reset Text Content of lable search result. This part is used for search function.
    document.getElementById('searchResultlabel').textContent = "";
    movieManager.displayData(movieList);

    // Step 02: Show current section only when button was clicked.
    // Get the element with the ID specified by rootID when button was clicked and assign it to currentSection
    currentSection = document.getElementById(rootID);
    // Display the current section by setting its display property to 'flex'.
    currentSection.style.display = 'flex';
    // Part 2: Assign active state for current button when button was clicked.
    // Step 01: Clear active class from all toggle buttons if it has active class.
    // Get HTMLCollection of all elements has classname 'toggle-button' and assign it to toggleButton variable.
    let toggleButton = document.getElementsByClassName('toggle-button');
    // Loop through each element in the toggleButton HTMLCollection and remove the 'active' class from it.
    for (let i = 0; i < toggleButton.length; i++) {
        toggleButton[i].classList.remove('active');
    }
    // Step 02: Add "active" class for current toggle button when button was clicked.
    currentButton.classList.add('active');
}
// End of Function 01: Display Function Section


// Function 01.1 Display Default Form Section
// Define defaultOpenForm function to show default form when website was opened.
/**
 * @function defaultOpenForm 
 * @description Displays the default form section when the website is opened.
 * @param {string} rootID - The ID of the section to display.
 * @param {HTMLElement} currentButton - The button that was clicked.
 * @returns {void}
 */

function defaultOpenForm(rootID, currentButton) {
    // Call toggleSectionDisplay Function to show a specified form.
    toggleSectionDisplay(rootID, currentButton);
}
// End of Function 01.1 Display Default Form Section

// Function 02: Refresh the movie data to show currently data to table.
/**
 * @function refreshData
 * @description Refreshes the movie data in the table and resets the search result label.
 * @returns {void}
 */
function refreshData() {
    movieManager.displayData(movieList);
    //Reset Text Content of lable search result to empty string. This part is used for search function.
    document.getElementById('searchResultlabel').textContent = "";
}
// End of Function 02: Refresh the movie data to show currently data to table.
// END OF SECTION 01: DISPLAY SECTION.

// SECTION 02: ADD A MOVIE SECTION
/**
 * Section 02 include the following functions:
 * 1. Add Movie Function: Call function from class Manage Movie to create a movie object form input box form HTML and push it to the movieList array and show in the table.
 * 2. Clear Input Boxs: Clear input boxs if the user want to renew the input data.
 */


// Function 01: Add Movie Function - Call function from class Manage Movie
/**
 * @function addMovie
 * @description Adds a movie to the movie list and updates the display.
 * @returns {void}
 */
function addMovie() {
    movieManager.addMovie();
    movieManager.displayData(movieList);
}
// End of Function 01: Add Movie Function - Call function from class Manage Movie

// Function 02: Clear Input Boxs - Clear input detail boxs when user want to renew the input data.
/**
 * @function clearInputBox
 * @description Clears the input fields in the form and hides the clear button.
 * @return {void} 
 */
function clearInputBox() {
    // Clear the input fields by setting their values to an empty string.
    document.getElementById('movieIDInput').value = '';
    document.getElementById('movieTitleInput').value = '';
    document.getElementById('movieYearInput').value = '';
    document.getElementById('movieRatingInput').value = '';
    document.getElementById('clearInputBox').style.display = 'none'; // Hide the clear button
}
// End of Function 02: Clear Input Boxs
// END OF SECTION 02: ADD A MOVIE SECTION

// SECTION 03: SORT MOVIE AND RESET DATA SECTION ( DATA TOOL SECTION )
/**
 * Section 03 include the following functions:
 * 1. Sort by ID: Sort the movie list by ID in ascending or descending order.
 * 2. Sort by Title: Sort the movie list by title in ascending or descending order.
 * 3. Sort by Best Movie: Sort the movie list by rating in descending order.
 * 4. Reset Data: Reset the movie list to the original data.
 * 4.1 Show Reset Modal: Show a modal to confirm data reset.
 * 4.2 Reset Data: Reset the movie list to the original data if confirmed.
 */

// Function 01: Sort by ID
// Function 01.1 Sort A-Z the movie list by ID in ascending order function
/**
 * @function sortA2ZById
 * @description Sorts the movie list by ID in ascending order and updates the display.
 * @return {void}
 */
function sortA2ZById() {
    movieManager.displayData(movieManager.sortA2ZById());
}
// End of Function 01.1 Sort A-Z the movie list by ID in ascending order function
// Function 01.2 Sort Z-A the movie list by ID in descending order function
/**
 * @function sortZ2AByID
 * @description Sorts the movie list by ID in descending order and updates the display.
 * @return {void}
 */
function sortZ2AByID() {
    movieManager.displayData(movieManager.sortZ2AByID());
}
// End of Function 01.2 Sort Z-A the movie list by ID in descending order function
// End of Function 01: Sort by ID

// Function 02: Sort by Title
// Function 02.1 Sort A-Z the movie list by Title in ascending order function
/**
 * @function sortA2ZByTitle
 * @description Sorts the movie list by title in ascending order and updates the display.
 * @return {void}
 */
function sortA2ZByTitle() {

    movieManager.displayData(movieManager.sortA2ZByTitle());
}
// End of Function 02.1 Sort A-Z the movie list by Title in ascending order function

// Function 02.2 Sort Z-A the movie list by Title in descending order function
/**
 * @function sortZ2AByTitle
 * @description Sorts the movie list by title in descending order and updates the display.
 * @return {void}
 */
function sortZ2AByTitle() {
    movieManager.displayData(movieManager.sortZ2AByTitle());
}
// End of Function 02.2 Sort Z-A the movie list by Title in descending order function
// End of Function 02: Sort by Title

// Function 03: Sort by Best Movie
/**
 * @function sortBestMovie
 * @description Sorts the movie list by rating in descending order to find the best movie and updates the display.
 * @return {void}
 */
function sortBestMovie() {
    movieManager.displayData(movieManager.sortBestMovie());
}
// End of Function 03: Sort by Best Movie

// Function 04: Reset Data
// Function 04.1 Show Reset Modal
/**
 * @function showResetModal
 * @description Displays a modal to confirm data reset.
 * @return {void}
 */
function showResetModal() {
    document.getElementById('resetDataModal').style.display = "flex";
}
// End of Function 04.1 Show Reset Modal
// Function 04.2 Reset Data
/**
 * @function resetData
 * @description Resets the movie list to the original data if confirmed.
 * @param {number} reset - Indicates whether to reset data (1) or cancel (0).
 * @return {void}
 */
function resetData(reset) {
    if (reset === 0) {
        document.getElementById('resetDataModal').style.display = 'none';
        return;
    } else {
        document.getElementById('resetDataModal').style.display = 'none';
        movieManager.resetData(originalData);
    }
}
// End of Function 04.2 Reset Data
// End of Function 04: Reset Data
// END OF SECTION 03: SORT MOVIE AND RESET DATA SECTION ( DATA TOOL SECTION )

// SECTION 04: SEARCH MOVIE SECTION
/**
 * Section 04 include the following functions:
 * 1. Search by Title: Search for movies by title.
 * 2. Search by ID: Search for movies by ID.
 */

// Function 01: Search by Title
/**
 * @function searchByTitle
 * @description Searches for movies by title and updates the display with the search results.
 * @return {void}
 */
function searchByTitle() {
    // Get the value from the input box with ID "movieSearchInput" and trim any leading or trailing whitespace.
    let searchString = document.getElementById('movieSearchInput').value.trim();
    // Check if the search string is empty. If it is, focus on the input box and return.
    if (!searchString) {
        document.getElementById('movieSearchInput').focus();
        return;
    } else
    // If the search string is not empty, call the searchByTitle function from the movieManager class to search for movies by title.
    {
        // Call the searchByTitle function from the movieManager class to search for movies by title. Get array of movie objects that match the search string.
        let searchResult = movieManager.searchByTitle(searchString);
        movieManager.displayData(searchResult);
        // Set text content for Search Result Lable to display the number of search results.
        document.getElementById('searchResultlabel').textContent = `Found ${searchResult.length} results`;
    }
}
// End of Function 01: Search by Title
// Function 02: Search by ID
/**
 * @function searchById
 * @description Searches for movies by ID and updates the display with the search results.
 * @return {void}
 **/
function searchById() {
    // Get the value from the input box with ID "movieSearchInput" and trim any leading or trailing whitespace.
    let searchString = document.getElementById('movieSearchInput').value.trim();
    // Check if the search string is empty. If it is, focus on the input box and return.
    if (!searchString) {
        document.getElementById('movieSearchInput').focus();
        return;
    } else // If the search string is not empty, call the searchById function from the movieManager class to search for movies by ID.
    {
        // Call the searchById function from the movieManager class to search for movies by ID. Get array of movie objects that match the search string.
        let searchResult = movieManager.searchById(searchString);
        movieManager.displayData(searchResult);
        // Set text content for Search Result Lable to display the number of search results.
        document.getElementById('searchResultlabel').textContent = `Found ${searchResult.length} results`;
    }
}
// End of Function 02: Search by ID
// END OF SECTION 04: SEARCH MOVIE SECTION
// END OF PART 02: FUNCTION OF THE MOVIE MANGAGEMENT WEBSITE APP

// PART 03: AUTOMATICALY FUNCTIONS WAS CALLED WHEN WEBSITE OPENED
// 01: Display Default Form Section when the website is opened.
// Get element from the ID "defaultButton" and assign it to defaultButton variable.
defaultButton = document.getElementById('defaultButton');
// Call defaultOpendForm Function to show default section - Add Movies Section when website opened.
defaultOpenForm('addMoviesSection', defaultButton);


// 02: Toggle visibility of the "Clear" button in the "Add a Movie" section that clears input detail boxs.
// Get HTMLCollection from all elements has classname "add-input".
let addInput = document.getElementsByClassName("add-input");
// Loop through each element in the addInput HTMLCollection and toggle the display of the clear button based on input.
for (let i = 0; i < addInput.length; i++) {
    // Add an event listener to each input element to listen for the "input" event.
    // When the event occurs, check if the "clearInputBox" element is displayed or not.
    // If it is not displayed, set its display to "block" to show it.
    addInput[i].addEventListener("input", function () {
        if (document.getElementById('clearInputBox').style.display = 'none') {
            document.getElementById('clearInputBox').style.display = 'block';
        }

        else {
            document.getElementById('clearInputBox').style.display = 'none';
        }
    });
}