// -------------------------------------------------------------------------
// PART 5: BUID THE UI FOR PART 4
// -------------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen Institute, VIC, Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// -------------------------------------------------------------------------

//--------------------------------------------------------------------------
//IMPORT MODULES 
//--------------------------------------------------------------------------

/* Import Javascript code from part 4 to inherit Object Movie, Array movieList, function sortMovie, sequentialSearch, binarySearch */
import Movie from "./part4.js"
import { movieList, sortMovie, sequentialSearch, binarySearch } from "./part4.js"
// Define originalMovieList to store original data to reset data when user click button Reset Data
let originalMovieList = [...movieList];
//--------------------------------------------------------------------------
//SECTION 2: DISPLAY DATA TO TABLE + REFRESH DATA FUNCTION
//--------------------------------------------------------------------------
// Call function show movie list when website is opened.
showMovieList(movieList);
// Function show movie list to table
/**
 * @description This function displays the movie list to the table.
 * @param {Array<Movie>} movieList This is an array of movie objects
 * @returns {void} This function does not return anything. It just display movie list to table.
 */
function showMovieList(movieList) {
    document.getElementById('movieListTbody').innerHTML = "";
    movieList.forEach(movie => document.getElementById('movieListTbody').innerHTML += `<tr><td>${movie.movieID}</td><td>${movie.title}</td><td>${movie.year}</td><td>${movie.rating}</td></tr>`);
}

//REFRESH DATA FUNCTION
//Call function refreshData to refresh data when user click button Refresh Data
document.getElementById('refreshData').addEventListener('click', function () {
    showMovieList(movieList);
    alert("Data has been refreshed successfully!");
});

//--------------------------------------------------------------------------
//SECTION 1: ADD MOVIE SECTION
//--------------------------------------------------------------------------
// Function addMovie to add movie to movieList when user click button Add Movie
/**
 * @description This function adds a movie to the movie list.
 * @param {Array<Movie>} movieList This is an array of movie objects
 * @returns {void} This function does not return anything. It just add movie to movie list.
 * @throws {Error} This function throws an error if the input fields are empty or invalid.
 */
function addMovie(movieList) {
    // Define const for input field
    const movieID = document.getElementById('movieIDInput').value;
    const movieTitle = document.getElementById('movieTitleInput').value;
    const movieYear = parseInt(document.getElementById('movieYearInput').value);
    const movieRating = parseFloat(document.getElementById('movieRatingInput').value);
    // Check if input field is empty or not
    if (!movieID || !movieTitle || !movieYear || !movieRating) {
        alert("Please fill all fields");
        return;
    } else
        // Check if input field is valid or not
        if (0.1 > movieRating || movieRating > 10) {
            alert("The rating should be a value between 0.1 and 10.0");
            return;
        } else // Check if year is valid or not
            if (movieYear < 1895 || movieYear >= new Date().getFullYear()) {
                alert("The year should be a value from 1895 to current year");
                return;
            } else
                // Check if movieID is exists or not
                if (sequentialSearch(movieList, movieID) >= 0) {
                    alert("The movieID already exists");
                    return;
                }
    // Create new movie object and push to movieList
    movieList.push(new Movie(movieID, movieTitle, movieYear, movieRating));
    // Show movie list to table
    showMovieList(movieList);
}
// Listen for click event on button Add Movie to call function addMovie
document.getElementById('addMovieBtn').addEventListener('click', function () { addMovie(movieList); });

//--------------------------------------------------------------------------
// SECTION 3: SEARCH MOVIES SECTION
//--------------------------------------------------------------------------
// BINARY SEARCH MOVIE FUNCTION
// Function searchMovie to search movie by ID when user click button Search Movie by ID
/**
 * @description This function searches for a movie by its ID using binary search.
 * @param {Array<Movie>} movieList This is an array of movie objects
 * @param {string} movieSearchInput This is the movie ID to search for.
 * @returns {void} This function does not return anything. It just search movie by ID.
 * @throws {Error} This function throws an error if the input field is empty or not.
 */
function SearchbyID(movieList) {
    const searchResultlabel = document.getElementById('searchResultlabel');
    const searchResultTbody = document.getElementById('searchResultTbody');
    const searchResultTable = document.getElementById('searchResultTable');
    const movieSearchInput = document.getElementById('movieSearchInput').value;
    // Reset result table to null
    searchResultTable.style.display = 'none';
    searchResultlabel.innerHTML = "";
    searchResultTbody.innerHTML = '';
    //Check if input field is empty or not
    if (!movieSearchInput) {
        alert('Please fill the movieID to search');
        return;
    }
    // Sort movie list by ID to prepare for binary search
    sortMovie(movieList);
    // Call binarySearch function to search movie by ID
    let indexResult = binarySearch(movieList, movieSearchInput);
    // Check if movieID is found or not
    if (indexResult >= 0) {
        searchResultTable.style.display = 'table';
        //Display result to table Search Result
        searchResultlabel.innerHTML = `01 result`;
        searchResultTbody.innerHTML = `<tr><td>${movieList[indexResult].movieID}</td><td>${movieList[indexResult].title}</td><td>${movieList[indexResult].year}</td><td>${movieList[indexResult].rating}</td></tr>`;
    } else
        // If movieID is not found, display message "O result" to user
        searchResultlabel.innerHTML = `0 result`;
}

// Listen for click event on button Search Movie by ID to call function SearchbyID
document.getElementById('searchByIDBtn').addEventListener('click', function () {
    SearchbyID(movieList);
});
// SEQUENTIAL SEARCH MOVIE FUNCTION
// Function searchMovie to search movie by Title when user click button Search Movie by Title
/**
 * @description This function searches for a movie by its title using sequential search.
 * @param {Array<Movie>} movieList This is an array of movie objects
 * @param {string} movieSearchInput This is the movie title to search for.
 * @returns {void} This function does not return anything. It just search movie by title.
 * @throws {Error} This function throws an error if the input field is empty or not.
 */
function sequentialSearchByTitle(movieList) {
    const searchResultlabel = document.getElementById('searchResultlabel');
    const searchResultTbody = document.getElementById('searchResultTbody');
    const searchResultTable = document.getElementById('searchResultTable');
    let movieSearchInput = document.getElementById('movieSearchInput').value;
    movieSearchInput = movieSearchInput.trim().replace(/\s+/g, ' ').toLowerCase();
    console.log(movieSearchInput);

    // Reset result table to null
    searchResultTable.style.display = 'none';
    searchResultlabel.innerHTML = "";
    searchResultTbody.innerHTML = '';
    // Check if input field is empty or not
    if (!movieSearchInput) {
        alert('Please fill the movie title to search');
        return;
    }
    // Define found to count the number of movies found
    let found = 0;
    // Loop through movieList to find movie by title
    for (let i = 0; i < movieList.length; i++) {
        // Check if movie title is found or not
        // Use trim() to remove leading and trailing spaces, replace(/\s+/g, ' ') to replace multiple spaces with one space, and toLowerCase() to convert to lowercase
        if (movieList[i].title.trim().replace(/\s+/g, ' ').toLowerCase().localeCompare(movieSearchInput) === 0) {
            found++;
            searchResultTable.style.display = 'table';
            // Display result to table Search Result    
            searchResultlabel.innerHTML = `${found} result`;
            searchResultTbody.innerHTML += `<tr><td>${movieList[i].movieID}</td><td>${movieList[i].title}</td><td>${movieList[i].year}</td><td>${movieList[i].rating}</td></tr>`;
        }
    }

    // Display message "0 result" to user if no movie found
    if (!found) {
        searchResultlabel.innerHTML = `0 result`;
    }
}

// Listen for click event on button Search Movie by Title to call function sequentialSearchByTitle
document.getElementById('searchByTitleBtn').addEventListener('click', function () {
    sequentialSearchByTitle(movieList);
});
//--------------------------------------------------------------------------
// SECTION 4: SORT MOVIE LIST SECTION - RESET DATA
//--------------------------------------------------------------------------
// Function and display sort Ascending by movie ID
/**
 * @description This function sorts the movie list by ID in ascending order.
 * @param {Array<Movie>} movieList This is an array of movie objects
 * @returns {void} This function does not return anything. It just sort movie list by ID.
 */
function sortMoviebyID(movieList) {
    sortMovie(movieList);
    showMovieList(movieList);
}
document.getElementById('sortByID').addEventListener('click', function () { sortMoviebyID(movieList); });

// Function and display sort Descending by movie ID
document.getElementById('sortDescendingByID').addEventListener('click', function () {
    sortDescendingByID(movieList);
});
/**
 * @description This function sorts the movie list by ID in descending order.
 * @param {Array<Movie>} movieList This is an array of movie objects
 * @return {void} This function does not return anything. It just sort movie list by ID.
 */
function sortDescendingByID(movieList) {
    movieList.sort((b, a) => a.movieID.localeCompare(b.movieID));
    showMovieList(movieList);
}

// Function and display sort Ascending by movie Title
document.getElementById('sortAscendingByTitle').addEventListener('click', function () {
    sortAscendingByTitle(movieList);
});
/**
 * @description This function sorts the movie list by title in ascending order.
 * @param {Array<Movie>} movieList This is an array of movie objects
 * @return {void} This function does not return anything. It just sort movie list by title.
 */
function sortAscendingByTitle(movieList) {
    movieList.sort((a, b) => a.title.localeCompare(b.title));
    showMovieList(movieList);
}

// Function and display sort Decending by movie Title
document.getElementById('sortDescendingByTitle').addEventListener('click', function () {
    sortDescendingByTitle(movieList);
});
/**
 * @description This function sorts the movie list by title in descending order.
 * @param {Array<Movie>} movieList This is an array of movie objects
 * @return {void} This function does not return anything. It just sort movie list by title.
 */
function sortDescendingByTitle(movieList) {
    movieList.sort((b, a) => a.title.localeCompare(b.title));
    showMovieList(movieList);
}

// Function and display movie list sort Acsending by Rating
/**
 * @description This function sorts the movie list by rating in ascending order.
 * @param {Array<Movie>} movieList This is an array of movie objects
 * @return {void} This function does not return anything. It just sort movie list by rating.
 */
function sortAscendingByRating(movieList) {
    movieList.sort((b, a) => a.rating - b.rating);
    showMovieList(movieList);
}
document.getElementById('sortAscendingByRating').addEventListener('click', function () {
    sortAscendingByRating(movieList);
})

//RESET DATA FUNCTION
// Function resetData to reset data to original data when user click button Reset Data
/**
 * @description This function resets the movie list to the original data.
 * @param {Array<Movie>} movieList This is an array of movie objects
 * @return {void} This function does not return anything. It just reset movie list to original data.
 */
function resetData(movieList) {
    movieList = [...originalMovieList];
    showMovieList(movieList);
}
//Reset Data button to reset data to original data when user click button Reset Data
document.getElementById('resetData').addEventListener('click', function () {
    resetData(movieList);
});



// --------------------------------------------------------------------------
// TOGGLE SETTING FUNCTION
// --------------------------------------------------------------------------
/**
 * @description This function toggles the display of the add movie, search movie, and data tool sections.
 * @returns {void} This function does not return anything. It just show and hide feature section when user click button Add Movie, Search Movie, Data Tool.
 * @constant {HTMLElement} addToggleButton - The button to show and hide the add movie section.
 * @constant {HTMLElement} searchToggleButton - The button to show and hide the search movie section.
 * @constant {HTMLElement} toolToggleButton - The button to show and hide the data tool section.
 * @constant {HTMLElement} addMoviesSection - The Add Movies section is show and hide when click the add movie button.
 * @constant {HTMLElement} searchSection - The Search Movies section is show and hide when click the search movie button.
 * @constant {HTMLElement} dataToolSection - The Data Tools section is show and hide when click the data tool button.
 */
function toggleSetting() {
    //Difine const for button to show and hide section
    const addToggleButton = document.getElementById('addToggleButton');
    const searchToggleButton = document.getElementById('searchToggleButton');
    const toolToggleButton = document.getElementById('toolToggleButton');
    // Difine const for section to show and hide section
    const addMoviesSection = document.getElementById('addMoviesSection');
    const searchSection = document.getElementById('searchSection');
    const dataToolSection = document.getElementById('dataToolSection');
    // Set display for all sections
    addToggleButton.addEventListener('click', function () {
        if (addMoviesSection.style.display === "none" || addMoviesSection.style.display === "") {
            addMoviesSection.style.display = "flex";
        } else addMoviesSection.style.display = "none"
    });
    searchToggleButton.addEventListener('click', function () {
        if (searchSection.style.display === "none" || searchSection.style.display === "") {
            searchSection.style.display = "flex";
        } else searchSection.style.display = "none"
    });
    toolToggleButton.addEventListener('click', function () {
        if (dataToolSection.style.display === "none" || dataToolSection.style.display === "") {
            dataToolSection.style.display = "flex";
        } else dataToolSection.style.display = "none"
    });
}
// Call function toggleSetting to show and hide feature section when user click button Add Movie, Search Movie, Data Tool
toggleSetting();