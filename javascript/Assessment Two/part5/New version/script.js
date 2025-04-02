/* PART 1: DEFINE AND CREATE ORIGINAL DATA */
/* This is program use table element to display movies data */
/* Define class Movie with 4 property MovieID, title, year, rating */
class Movie {
    constructor(movieID, title, year, rating) {
        this.movieID = movieID;
        this.title = title;
        this.year = year;
        this.rating = rating;
    };
}
/* Initialize the value of the movieList array*/
let movieList = [
    new Movie("A021", "The Shawshank Redemption", 1994, 9.3),
    new Movie("C020", "The Godfather", 1972, 9.2),
    new Movie("D003", "The Dark Knight", 2008, 9.0),
    new Movie("A104", "The Godfather Part II", 1974, 9.0),
    new Movie("B005", "12 Angry Men", 1957, 9.0),
    new Movie("A106", "Schindler's List", 1993, 9.0),
    new Movie("S007", "The Lord of the Rings", 2003, 9.0),
    new Movie("D108", "Pulp Fiction", 1994, 8.9),
    new Movie("L009", "The Good, the Bad and the Ugly", 1966, 8.8),
    new Movie("B110", "Fight Club", 1999, 8.1)
];
let originalData = [...movieList];

//========================================================
/* PART 2: CLASS MANAGE MOVIES */
/* Description: This part store methods to manage movies*/
class ManageMovies {
    constructor(rootID, movieList) {
        /* The ID of the element where the movie list will be displayed.
        In the program - This is the ID of tbody: movieListTbody when we create ManageMovies Class in the Main program*/
        this.rootID = rootID;
        this.movieList = movieList;
        this.displayData(movieList);
    }
    /* REQUIREMENT 01 - DISPLAY DATA*/
    /* Define displayData() method */
    displayData(movieList) {

        /* First method (using innerHTML) is quick and suitable for small programs without security concerns. 
           However, it can expose the app to XSS (Cross-Site Scripting) attacks and remove event listeners from child elements. 
           Use it for trusted data and simple updates. 

        //Step 01: Clear data table
        this.rootID.innerHTML = '';

        // Step 02: Push Data to table
        this.movieList.forEach(movie => this.rootID.innerHTML += `<tr><td>${movie.movieID}</td><td>${movie.title}</td><td>${movie.year}</td><td>${movie.rating}</td></tr>`);
        */

        /* Second method: DOM Manipulation (Using DOM API (Document Object Model Application Programming Interface) to create HTML elements in JavaScipt ) */
        //Step 01: Clear data table
        // Define childNodes HTMLCollection all elements have Tagname 'tr'
        let childNodes = this.rootID.getElementsByTagName('tr');
        // Create a backward loop to make sure all elements is removed.
        for (let i = childNodes.length - 1; i >= 0; i--) {
            this.rootID.removeChild(childNodes[i]);
        }

        //Step 02: Push Data to table
        //Create a forward loop to push all movies from movielist to the table.
        for (let i = 0; i < movieList.length; i++) {
            // Get a movie from movie list.
            let movie = movieList[i];
            // Create a table row to store a movie.
            let tr = document.createElement('tr');
            // Create a td element to store the movieID Data of the movie.
            let tdID = document.createElement('td');
            // Set content for tdID
            tdID.textContent = movie.movieID;
            // Create a td element to store the Title of the movie.
            let tdTitle = document.createElement('td');
            // Set content for movie title
            tdTitle.textContent = movie.title;
            // Create a td element to store the relevant year of the movie.
            let tdYear = document.createElement('td');
            // Set content for movie year
            tdYear.textContent = movie.year;
            // Create a td element to store the rating of the movie.
            let tdRating = document.createElement('td');
            // Set content for movie rating
            tdRating.textContent = movie.rating;
            // Append <td> to <tr>
            tr.appendChild(tdID);
            tr.appendChild(tdTitle);
            tr.appendChild(tdYear);
            tr.appendChild(tdRating);
            // Append <tr> to table
            this.rootID.appendChild(tr);
        }
    }
    /* End of Display Data Function */

    /* REQUIREMENT 02: ADD A MOVIE TO MOVIE LIST*/
    addMovie() {
        /* Get elements from input box in Add Movie Section */
        let movieID = document.getElementById('movieIDInput').value.trim();
        let movieTitle = document.getElementById('movieTitleInput').value.trim();
        /* Type of movieYear variable is a number */
        let movieYear = Number(document.getElementById('movieYearInput').value);
        /* Type of movieRating variable is a number */
        let movieRating = Number(document.getElementById('movieRatingInput').value);
        if (!movieID) {
            document.getElementById('movieIDInput').focus();
            return;
        }
        else if (!movieTitle) {
            document.getElementById('movieTitleInput').focus();
            return;
        }
        else if (!movieYear === "" || movieYear == 0) {
            document.getElementById('movieYearInput').focus();
            return;
        }
        else if (!movieRating === "" || movieRating == 0) {
            document.getElementById('movieRatingInput').focus();
            return;
        }
        else /* Check if the ID exists */ {
            for (let i = 0; i < this.movieList.length; i++) {
                if (movieID === this.movieList[i].movieID) {
                    alert(`The ID exists!`);
                    return;
                }
            }
            /* The relevant year of the movie between 1895 to current year */
            let currentYear = new Date().getFullYear();
            if (!Number.isInteger(movieYear) || movieYear < 1895 || movieYear > currentYear) {
                alert(`The relevant year of the movie should be between 1895 and ${currentYear}!`);
                return;
            } else
                if (movieRating <= 0 || movieRating > 10) {
                    alert(`The movie rating should be greater than 0 and less than 10!`);
                    return;
                } else {
                    this.movieList.push(new Movie(movieID, movieTitle, movieYear, movieRating));
                }
        }
    }



    /* REQUIREMENT 02: ADD A MOVIE TO MOVIE LIST*/
    //Sort by ID
    // Sort A to Z by ID function
    sortA2ZById() {
        this.movieList.sort((a, b) => a.movieID.localeCompare(b.movieID));
    }
    // Sort Z to A by ID function
    sortZ2AByID() {
        this.movieList.sort((b, a) => a.movieID.localeCompare(b.movieID));
    }
    // Sort by Title
    // Sort A to Z by Title function
    sortA2ZByTitle() {
        this.movieList.sort((a, b) => a.title.localeCompare(b.title));
    }
    // Sort Z to A by Title function
    sortZ2AByTitle() {
        this.movieList.sort((b, a) => a.title.localeCompare(b.title));
    }
    /* Sort by Rating */
    sortBestMovie() {
        this.movieList.sort((a, b) => b.rating - a.rating);
    }
    resetData(originalData) {
        this.movieList = [];
        for (let i = 0; i < originalData.length; i++) {
            this.movieList.push(originalData[i]);
        }
        return movieList;
    }
    /* REQUIREMENT 03: SEARCH A MOVIE IN MOVIE LIST */
    /* Search by ID */

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

    /* Search by Title */
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
//========================================================
/* PART 3: THE MANGAGE MOVIES WEBSITE APP */

/* DISPLAY SECTION */
/* Get element with movieListTbody */
let movieListTbody = document.getElementById('movieListTbody');
/* Create class Manage Movies taking in the rootID and the movie array*/
let manageMovies = new ManageMovies(movieListTbody, movieList);
// Form control function
function formControl(rootID, currentButton) {
    /* Step 01: Hide all toggle sections when click button*/
    /* Define toggleSection HTMLCollection all elements has classname 'toggle-section' */
    const toggleSection = document.getElementsByClassName('toggle-section');
    /* Modify display property with none value to hide toggle section */
    for (let i = 0; i < toggleSection.length; i++) {
        toggleSection[i].style.display = 'none';
    }
    /* Reset Text Content of lable search result */
    document.getElementById('searchResultlabel').textContent = "";
    manageMovies.displayData(movieList);

    /* Step 02: Show current section only when click button */
    // Get the element with the ID specified by rootID when click button and assign it to currentSection
    currentSection = document.getElementById(rootID);
    // Display the current section by setting its display property to 'flex'
    currentSection.style.display = 'flex';

    /* Assign active state for current button when click button */
    /* Step 01: Clear active state from all toggle buttons*/
    let toggleButton = document.getElementsByClassName('toggle-button');
    for (let i = 0; i < toggleButton.length; i++) {
        toggleButton[i].classList.remove('active');
    }
    /* Step 02: Add active state for current toggle button */
    currentButton.classList.add('active');
}
/* Define defaultOpenForm function to show default form when website opened*/
function defaultOpenForm(rootID, currentButton) {
    /* Call formControl Function to show a specified form */
    formControl(rootID, currentButton);
}
/* Get element from defaultButton ID */
defaultButton = document.getElementById('defaultButton');
/* Call defaultOpendForm Function to show Add Movie Section when website opened*/
defaultOpenForm('addMoviesSection', defaultButton);
/* Refresh Data */
function refreshData() {
    manageMovies.displayData(movieList);
    /* Reset Text Content of lable search result */
    document.getElementById('searchResultlabel').textContent = "";
}




/* ADD MOVIE SECTION */
/* Add Movie Function - Call function from class Manage Movie to makke  */
function addMovie() {
    manageMovies.addMovie();
    manageMovies.displayData(movieList);
}
function clearInputBox() {
    document.getElementById('movieIDInput').value = '';
    document.getElementById('movieTitleInput').value = '';
    document.getElementById('movieYearInput').value = '';
    document.getElementById('movieRatingInput').value = '';
    document.getElementById('clearInputBox').style.display = 'none';
}

/* SORT SECTION */
/* Sort by ID */
/* Sort A-Z by ID function */
function sortA2ZById() {
    manageMovies.sortA2ZById();
    manageMovies.displayData(movieList);
}
/* Sort Z-A by ID function */
function sortZ2AByID() {
    manageMovies.sortZ2AByID();
    manageMovies.displayData(movieList);
}
/* Sort by Title */
/* Sort A-Z by Title function */
function sortA2ZByTitle() {
    manageMovies.sortA2ZByTitle();
    manageMovies.displayData(movieList);
}
/* Sort Z-A by Tile function */
function sortZ2AByTitle() {
    manageMovies.sortZ2AByTitle();
    manageMovies.displayData(movieList);
}
/* Sort Best Movie */
function sortBestMovie() {
    manageMovies.sortBestMovie();
    manageMovies.displayData(movieList);
}
function showResetModal() {
    document.getElementById('resetDataModal').style.display = "flex";
}
function resetData(reset) {
    if (reset === 0) {
        document.getElementById('resetDataModal').style.display = 'none';
        return;
    } else if (reset===1){
        document.getElementById('resetDataModal').style.display = 'none';
        return;
    }
}

/* SEARCH MOVIE SECTION */

function searchByTitle() {

    let searchString = document.getElementById('movieSearchInput').value.trim();
    if (!searchString) {
        document.getElementById('movieSearchInput').focus();
        return;
    } else {
        let searchResult = manageMovies.searchByTitle(searchString);

        manageMovies.displayData(searchResult);
        /* Assign the number of search result for search Result Lable */
        document.getElementById('searchResultlabel').textContent = `Found ${searchResult.length} results`;
    }
}

function searchById() {

    let searchString = document.getElementById('movieSearchInput').value.trim();
    if (!searchString) {
        document.getElementById('movieSearchInput').focus();

        return;
    } else {
        let searchResult = manageMovies.searchById(searchString);

        manageMovies.displayData(searchResult);
        /* Assign the number of search result for search Result Lable */
        document.getElementById('searchResultlabel').textContent = `Found ${searchResult.length} results`;
    }
}

let addInput = document.getElementsByClassName("add-input");
for (let i = 0; i < addInput.length; i++) {
    addInput[i].addEventListener("input", function () {
        if (document.getElementById('clearInputBox').style.display === 'none') {
            document.getElementById('clearInputBox').style.display = 'block';
        } else {
            document.getElementById('clearInputBox').style.display = 'none';
        }
    });
}