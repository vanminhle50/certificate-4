// ---------------------------------------------------------------------
// Part 5: Buid the UI for part 4
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen Institute, VIC, Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

import Movie from "./part4.js"
import { movieList, sortMovie, sequentialSearch, binarySearch } from "./part4.js"
let originalMovieList = [...movieList];
// Call function show movie list when website is opened.
showMovieList(movieList);
// Function show movie list to table
function showMovieList(movieList) {
    document.getElementById('movieListTbody').innerHTML = "";
    movieList.forEach(movie => document.getElementById('movieListTbody').innerHTML += `<tr><td>${movie.movieID}</td><td>${movie.title}</td><td>${movie.year}</td><td>${movie.rating}</td></tr>`);
}


// Function for sort movie list by ID (ascending)
function sortMoviebyID(movieList) {
    sortMovie(movieList);
    showMovieList(movieList);
}
function refreshData(movieList) {
    movieList = [...originalMovieList];
    showMovieList(movieList);
}
function addMovie(movieList) {
    const movieID = document.getElementById('movieIDInput').value;
    const movieTitle = document.getElementById('movieTitleInput').value;
    const movieYear = parseInt(document.getElementById('movieYearInput').value);
    const movieRating = parseFloat(document.getElementById('movieRatingInput').value);
    if (!movieID || !movieTitle || !movieYear || !movieRating) {
        alert("Please fill all fields");
        return;
    } else
        if (0.01 > movieRating || movieRating > 10) {
            alert("The rating should be a value between 0.01 and 10.0");
            return;
        } else if (movieYear <= 1985 || movieYear >= new Date().getFullYear()) {
            alert("The year should be a value from 1895 to current year");
            return;
        } else
            if (sequentialSearch(movieList, movieID) >= 0) {
                alert("The movieID already exists");
                return;
            }

    movieList.push(new Movie(movieID, movieTitle, movieYear, movieRating));
    showMovieList(movieList);
}

// Listen Event and add function for it.
//Show original data

document.getElementById('refreshData').addEventListener('click', function () {
    refreshData(movieList);
});

document.getElementById('sortByID').addEventListener('click', function () { sortMoviebyID(movieList); });

document.getElementById('addMovieBtn').addEventListener('click', function () { addMovie(movieList); });



function SearchbyID(movieList) {
    const searchResultlabel = document.getElementById('searchResultlabel');
    const searchResultTbody = document.getElementById('searchResultTbody');
    const searchResultTable = document.getElementById('searchResultTable');
    const movieSearchInput = document.getElementById('movieSearchInput').value;
    // Reset result
    searchResultTable.style.display = 'none';
    searchResultlabel.innerHTML = "";
    searchResultTbody.innerHTML = '';

    if (!movieSearchInput) {
        alert('Please fill the movieID to search');
        return;
    }
    sortMovie(movieList);
    let indexResult = binarySearch(movieList, movieSearchInput);
    if (indexResult >= 0) {
        searchResultTable.style.display = 'table';
        //Display result to table Search Result
        searchResultlabel.innerHTML = `01 result`;
        searchResultTbody.innerHTML = `<tr><td>${movieList[indexResult].movieID}</td><td>${movieList[indexResult].title}</td><td>${movieList[indexResult].year}</td><td>${movieList[indexResult].rating}</td></tr>`;
    } else searchResultlabel.innerHTML = `0 result`;
}

document.getElementById('searchBtn').addEventListener('click', function () {
    SearchbyID(movieList);
});




// Function and display sort Ascending by Name
document.getElementById('sortAscendingByName').addEventListener('click', function () {
    sortAscendingByName(movieList);
});
function sortAscendingByName(movieList) {
    movieList.sort((a, b) => a.title.charAt(0).localeCompare(b.title.charAt(0)));
    showMovieList(movieList);
}

// Function and display sort Decending by Name
document.getElementById('sortDescendingByName').addEventListener('click', function () {
    sortDescendingByName(movieList);
});
function sortDescendingByName(movieList) {
    movieList.sort((b, a) => a.title.charAt(0).localeCompare(b.title.charAt(0)));
    showMovieList(movieList);
}






// Function and display sort Descending by ID
document.getElementById('sortDescendingByID').addEventListener('click', function () {
    sortDescendingByID(movieList);
});

function sortDescendingByID(movieList) {
    movieList.sort((b, a) => a.movieID.localeCompare(b.movieID));
    showMovieList(movieList);
}

function sequentialSearchByTitle(movieList) {
    const searchResultlabel = document.getElementById('searchResultlabel');
    const searchResultTbody = document.getElementById('searchResultTbody');
    const searchResultTable = document.getElementById('searchResultTable');
    let movieSearchInput = document.getElementById('movieSearchInput').value;
    movieSearchInput= movieSearchInput.trim().replace(/\s+/g, ' ').toLowerCase();
    console.log(movieSearchInput);

    // Reset result
    searchResultTable.style.display = 'none';
    searchResultlabel.innerHTML = "";
    searchResultTbody.innerHTML = '';
    
    if (!movieSearchInput) {
        alert('Please fill the movie title to search');
        return;
    }

    let found = false; // Biến xác định có tìm thấy phim không
    
    for (let i = 0; i < movieList.length; i++) {
        console.log(movieList[i].title.toLowerCase());
        if (movieList[i].title.trim().replace(/\s+/g, ' ').toLowerCase().localeCompare(movieSearchInput) === 0) {
            found = true;
            searchResultTable.style.display = 'table';
            // Hiển thị kết quả tìm thấy
            searchResultlabel.innerHTML = `1 result`;
            searchResultTbody.innerHTML = `<tr><td>${movieList[i].movieID}</td><td>${movieList[i].title}</td><td>${movieList[i].year}</td><td>${movieList[i].rating}</td></tr>`;
            break; // Dừng vòng lặp sau khi tìm thấy kết quả đầu tiên
        }
    }

    // Nếu không tìm thấy phim nào
    if (!found) {
        searchResultlabel.innerHTML = `0 result`;
    }
}

document.getElementById('searchByTitleBtn').addEventListener('click', function () {
    sequentialSearchByTitle(movieList);
});
