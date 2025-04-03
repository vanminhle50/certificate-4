//=================================================================================
// File name: movie-list-class.js
// Author Name: Van Minh Le
// Student ID: 100693330
// Major: Use Version Control in Development Environments
//=================================================================================
/**
 * @class MovieManager
 * @description A class stores methods to manage movie list.
 * REQUIREMENT 01: FUNCTION TO DISPLAY MOVIE LIST
 * @function DisplayData - Displays the movie list in the table.
 * REQUIREMENT 02: FUNCTION TO ADD MOVIE
 * @function addMovie - Adds a new movie to the movie list.
 * REQUIREMENT 03: FUNCTION TO SORT THE MOVIES LIST
 * @function sortA2ZById - Sorts the movie list by ID in ascending order.
 * @function sortZ2AByID - Sorts the movie list by ID in descending order.
 * @function sortA2ZByTitle - Sorts the movie list by title in ascending order.
 * @function sortZ2AByTitle - Sorts the movie list by title in descending order.
 * @function sortBestMovie - Sorts the movie list by rating in descending order.
 * FUNCTION TO RESET DATA TO ORIGINAL STATE
 * @function resetData - Resets the movie list to its original state.
 * REQUIREMENT 04: FUNCTION TO SEARCH MOVIES
 * @function searchById - Searches for a movie by ID.
 * @function searchByTitle - Searches for movies by title.
 */
//=================================================================================

// MOVIE MANAGER CLASS
/**
 * @constructor Constructor automatically runs when the MovieManager class is created.
 * @param {HTMLElement} rootID: The element where the movie list will be displayed. 
 * @param {Array<Object>} movieList: The list of movies to be managed.
 */
class MovieManager {
    constructor(rootID, movieList) {
        this.rootID = rootID; // Get the element where the movie list will be displayed.
        this.movieList = movieList; // Get the movie array from the main script.
        this.displayData(movieList); // Call displayData() method to display the movie list in the table.
    }
    //REQUIREMENT 01: DISPLAY DATA FUNCTION
    /**
     * @description A function to display a movies array in the table.
     * @param {Array<object>} movieList: The array in which each element is a movie object with movie ID, title, release year, and rating properties.
     */
    displayData(movieList) {

        /* First method (using innerHTML) is quick and suitable for small programs without security concerns. 
           However, it can expose the app to XSS (Cross-Site Scripting) attacks and remove event listeners from child elements. 
           Use it for trusted data and simple updates. 
                this.rootID.innerHTML = '';
                this.movieList.forEach(movie => this.rootID.innerHTML += `<tr><td>${movie.movieID}</td><td>${movie.title}</td><td>${movie.year}</td><td>${movie.rating}</td></tr>`);
        */

        //Second method: DOM Manipulation (Using DOM API (Document Object Model Application Programming Interface) to create HTML elements in JavaScipt )
        //Step 01: CLEAR DATA IN TABLE
        // Get childNodes variation is HTMLCollection of all <tr></tr> elements
        let childNodes = this.rootID.getElementsByTagName('tr');
        // Loop backward to make sure all elements is removed.
        for (let i = childNodes.length - 1; i >= 0; i--) {
            this.rootID.removeChild(childNodes[i]); // Remove all <tr> elements in the table body.
        }

        //Step 02: PUSH DATA TO TABLE
        // Loop forward to push all movies from movielist to the table.
        for (let i = 0; i < movieList.length; i++) {
            let movie = movieList[i]; // Get a movie from movie list.
            // Create a new <tr> element for each movie.
            let tr = document.createElement('tr');
            // Create a new <td> element for movieID, title, year, and rating properties of the movie.
            let tdID = document.createElement('td');
            let tdTitle = document.createElement('td');
            let tdYear = document.createElement('td');
            let tdRating = document.createElement('td');
            // Set content for <td> element for movieID, title, year, and rating properties of the movie.
            tdID.textContent = movie.movieID;
            tdTitle.textContent = movie.title;
            tdYear.textContent = movie.year;
            tdRating.textContent = parseFloat(movie.rating).toFixed(2);
            // Append td [tdID, tdTitle, tdYear, and tdRating] to <tr> to create a row for each movie.
            tr.appendChild(tdID);
            tr.appendChild(tdTitle);
            tr.appendChild(tdYear);
            tr.appendChild(tdRating);
            // Append <tr> to table body to display the movie data.
            this.rootID.appendChild(tr);
        }
    }
    // END OF REQUIREMENT 01: DISPLAY DATA FUNCTION

    // REQUIREMENT 02: ADD A MOVIE TO MOVIE LIST
    /**
     * @description A function to add a new movie to the movie list.
     * @param {string} movieID: The ID of the movie.
     * @param {string} movieTitle: The title of the movie.
     * @param {number} movieYear: The release year of the movie.
     * @param {parseFloat} movieRating: The rating of the movie.
     */
    addMovie() {
        // Get values for movieID, movieTitle, movieYear, and movieRating from the input fields in the Add Movie section.
        // Use trim() to remove leading and trailing whitespace from the input values.
        let movieID = document.getElementById('movieIDInput').value.trim();
        let movieTitle = document.getElementById('movieTitleInput').value.trim();
        let movieYear = Number(document.getElementById('movieYearInput').value);
        let movieRating = parseFloat(document.getElementById('movieRatingInput').value); // Convert the input value to a float number.
        // Check if the input values are empty or not.
        // If any of the input values are empty, focus on the corresponding input field and return.
        if (!movieID) {
            document.getElementById('movieIDInput').focus();
            return;
        }
        else if (!movieTitle) // If movieTitle is empty, focus on the movieTitle input field and return.
        {
            document.getElementById('movieTitleInput').focus();
            return;
        }
        else if (!movieYear === "" || movieYear == 0)
        // If movieYear is empty, focus on the movieYear input field and return.
        {
            document.getElementById('movieYearInput').focus();
            return;
        }
        else if (!movieRating === "" || movieRating == 0)
        // If movieRating is empty, focus on the movieRating input field and return.
        {
            document.getElementById('movieRatingInput').focus();
            return;
        }
        else  // Check input values is valid or not.
        {
            // Check if the movieID already exists in the movie list
            for (let i = 0; i < this.movieList.length; i++) {
                if (movieID === this.movieList[i].movieID) {
                    alert(`The ID exists!`);
                    return;
                }
            }
            // The relevant year of the movie between 1895 to current year
            let currentYear = new Date().getFullYear();
            if (!Number.isInteger(movieYear) || movieYear < 1895 || movieYear > currentYear) {
                alert(`The relevant year of the movie should be between 1895 and ${currentYear}!`);
                return;
            } else
                // Check if the movie rating is a number between 0 and 10
                if (movieRating <= 0 || movieRating > 10) {
                    alert(`The movie rating should be greater than 0 and less than 10!`);
                    return;
                } else {
                    // If all input values are valid, create a new movie object and push it to the movie list.
                    this.movieList.push(new Movie(movieID, movieTitle, movieYear, movieRating.toFixed(2)));
                }
        }
    }

    //REQUIREMENT 03: SORT MOVIE LIST IN DIFFERENT WAYS
    /**
     * @description Functions to sort the movie list in different ways.
     * @returns {Array<object>} - Returns the sorted movie list.
     */
    //SORT MOVIE LIST BY ID
    // Function to sort the movie list by ID in ascending order.
    sortA2ZById() {
        return this.movieList.sort((a, b) => a.movieID.localeCompare(b.movieID));
    }
    // Function to sort the movie list by ID in descending order.
    sortZ2AByID() {
        return this.movieList.sort((b, a) => a.movieID.localeCompare(b.movieID));
    }
    // Sort by Title
    // Function to sort the movie list by Title in ascending order.
    sortA2ZByTitle() {
        return this.movieList.sort((a, b) => a.title.localeCompare(b.title));
    }
    // Function to sort the movie list by Title in descending order.
    sortZ2AByTitle() {
        return this.movieList.sort((b, a) => a.title.localeCompare(b.title));
    }
    // Function to sort the movie list by rating to found the best movie (descending order).
    sortBestMovie() {
        return this.movieList.sort((a, b) => b.rating - a.rating);
    }
    // END OF REQUIREMENT 03: SORT MOVIE LIST IN DIFFERENT WAYS

    // BONUS REQUIREMENT: RESET DATA TO ORIGINAL STATE
    /**
     * @description A function to reset the movie list to its original state.
     * @param {Array<object>} originalData: The original movie data to reset the movie list.
     * @returns {void} - No return value. Just resets the movie list to its original state.
     */
    resetData(originalData) {
        movieList.length = 0;  // Clear the movieList array by setting its length to 0.
        movieList.push(...structuredClone(originalData)); // Create a deep copy of originalData array using structuredClone.
        this.movieList = movieList; // Update the movieList array of the class with the new list.
        this.displayData(this.movieList); // Call displayData() to render the updated movie list in the table.
    }
    // END OF BONUS REQUIREMENT: RESET DATA TO ORIGINAL STATE

    // REQUIREMENT 04: SEARCH A MOVIE IN MOVIE LIST

    /**
     * @description Functions to search a movie in the movie list by ID or title.
     * @param {string} searchString: The string input to search movie in the movie list may be ID or title.
     * @returns {Array<object>} An array [searchList] of movies that match the search by Id or title.
     */

    // Uses toLowerCase() to make the search case-insensitive.
    // Uses trim() to remove leading and trailing whitespace from the search string.
    // Uses replace(/\s+/g, ' ') to replace multiple spaces with a single space.

    // Function to search a movie by Id in the movie list.
    // It search exactly the movie ID in the movie list. If it not found any movie has the ID, it will return an empty array.
    searchById(searchString) {
        searchString = searchString.toLowerCase().trim().replace(/\s+/g, ' ');
        let searchList = [];
        for (let i = 0; i < this.movieList.length; i++) {
            if (this.movieList[i].movieID.toLowerCase().trim().replace(/\s+/g, ' ') === searchString) {
                searchList.push(this.movieList[i]);
            }
        }
        return searchList;
    }

    // Function to search a movie by title in the movie list.
    // It search the string which is included in the title of the movie list.
    searchByTitle(searchString) {
        searchString = searchString.toLowerCase().trim().replace(/\s+/g, ' ');
        let searchList = [];
        for (let movie of this.movieList) {
            if (movie.title.toLowerCase().trim().replace(/\s+/g, ' ').includes(searchString)) {
                searchList.push(movie);
            }
        }
        return searchList;
    }
}
// END OF REQUIREMENT 04: SEARCH A MOVIE IN MOVIE LIST
//=================================================================================