// ---------------------------------------------------------------------
// Part 5: Buid the UI for part 4
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen Institute, VIC, Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

import Movie from "./part4.js"
import { movieList, sortMovie,sequentialSearch,binarySearch } from "./part4.js" 
let originalMovieList = [...movieList];
// Call function show movie list when website is opened.
showMovieList(movieList);
// Function show movie list to table
function showMovieList(movieList){
    document.getElementById('movieListTbody').innerHTML="";
    movieList.forEach(movie => document.getElementById('movieListTbody').innerHTML+= `<tr><td>${movie.movieID}</td><td>${movie.title}</td><td>${movie.year}</td><td>${movie.rating}</td></tr>`);
}


// Function for sort movie list by ID
function sortMoviebyID(movieList){
    sortMovie();
    showMovieList(movieList);
}
function refreshData(movieList){
    movieList=[...originalMovieList];
    showMovieList(movieList);
}
function addMovie(movieList){
const movieID = document.getElementById('movieIDInput').value;
const movieTitle = document.getElementById('movieTitleInput').value;
console.log(movieTitle);
const movieYear = parseInt(document.getElementById('movieYearInput').value);
const movieRating = parseFloat(document.getElementById('movieRatingInput').value);
if (!movieID || !movieTitle || !movieYear || !movieRating) {
    alert("Please fill all fields");
    return;
}
movieList.push(new Movie (movieID,movieTitle, movieYear, movieRating ));
showMovieList(movieList);
}


// Listen Event and add function for it.
//Show original data

document.getElementById('refreshData').addEventListener('click', function() {
    refreshData(movieList);
});

document.getElementById('sortByID').addEventListener('click', function(){sortMoviebyID(movieList);});

document.getElementById('addMovieBtn').addEventListener('click', function(){addMovie(movieList);});
