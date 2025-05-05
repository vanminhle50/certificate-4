// ---------------------------------------------------------------------
// Part 4: Data structures and algorithms – complex data types
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen Institute, VIC, Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

/**
 * @class Movie
 * @classdesc A class representing a movie.
 * @property {number} movieID - The ID of the movie.
 * @property {string} title - The title of the movie.
 * @property {number} year - The release year of the movie.
 * @property {number} rating - The rating of the movie.
 */
// Define the Movie class
class Movie {
  constructor(movieID, title, year, rating) {
    this.movieID = movieID;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}
//Display the Movie class
console.log(Movie);

//Display the class definition on the HTML page
//Convert the class definition to a string
const classDefinition = Movie.toString();
//Display the class definition on the HTML page
document.getElementById('movie-object').textContent = classDefinition;

// Create an array of at least 10 movies with mock values
/**
  * @description movieList - An array of 10 movies with
  * @type {Array<Movie>}
  * @memberof Movie
  * @property {string} movieID - The ID of the movie.
  * @property {string} title - The title of the movie.
  * @property {number} year - The release year of the movie.
  * @property {number} rating - The rating of the movie.
 */

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
  new Movie("B110", "Fight Club ", 1999, 8.81)
];

//Display the movie list
console.log(`Movie List:`);
console.log(movieList);

//Display the movie list
document.getElementById('movie-list').innerHTML = movieList.map(movie => `<span class="note bold">${movie.movieID}: ${movie.title}, Year: ${movie.year}, Rating: ${movie.rating}`).join("<br></span>");


// Use localeCompare() to sort the movie list by movieID (as a string)
/**
 * @function sortMovie
 * @description Sort the movie list by movieID
 * @memberof Movie
 * @param {string} a - The first movieID
 * @param {string} b - The second movieID
 */
function sortMovie() {
  movieList.sort((a, b) => a.movieID.localeCompare(b.movieID));
}
sortMovie();

//Display the movie list
console.log(`Sorted Movie List:`);
console.log(movieList);


//Display the movie list
document.getElementById('sorted-movie-list').innerHTML = movieList.map(movie => `<span class="note bold">${movie.movieID}: ${movie.title}, Year: ${movie.year}, Rating: ${movie.rating}`).join("<br></span>");


// Binary Search Implementation
/**
 * @function binarySearch
 * @description Perform a binary search on the movie list by movieID
 * @memberof Movie
 * @param {Array<Movie>} movieList - The list of movies
 * @param {string} movieID - The movieID to search for
 * @returns {number} - The index of the movie in the list
 */
function binarySearch(movieList, movieID) {
  let begin = 0;
  let end = movieList.length - 1;

  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    let comparison = movieList[mid].movieID.localeCompare(movieID);

    if (comparison === 0) {
      return mid;
    } else if (comparison < 0) {
      begin = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// Sequential Search Implementation
/**
 * @function sequentialSearch
 * @description Perform a sequential search on the movie list by movieID
 * @memberof Movie
 * @param {Array<Movie>} movieList - The list of movies
 * @param {string} movieID - The movieID to search for
 * @returns {number} - The index of the movie in the list
 */
function sequentialSearch(movieList, movieID) {
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].movieID.localeCompare(movieID) === 0) {
      return i;
    }
  }
  return -1;
}


// Test Binary Search Implementation
console.log(`Search the movie with ID: use binary search algorithm`);
// Test case 1: Search for a movie that exists in the list
let movieIDTest = "A021";
//Display the result to table with case 1
if (binarySearch(movieList, movieIDTest) > -1) {
  //Display the result to console
  console.log(`Search the movie with ID: ${movieIDTest} in movie list:`);
  console.log(`Found it at the index: ${binarySearch(movieList, movieIDTest)}`);
  console.log(`It's FOUND: ID: ${movieList[binarySearch(movieList, movieIDTest)].movieID} Title: ${movieList[binarySearch(movieList, movieIDTest)].title} Year: ${movieList[binarySearch(movieList, movieIDTest)].year} Rating: ${movieList[binarySearch(movieList, movieIDTest)].rating}`);
  //Display the result to table
  document.getElementById('binarySearchResult').innerHTML = `Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> <span class="note bold">Found it at the index: ${binarySearch(movieList, movieIDTest)} <br>It's FOUND: ID: ${movieList[binarySearch(movieList, movieIDTest)].movieID} Title: ${movieList[binarySearch(movieList, movieIDTest)].title} Year: ${movieList[binarySearch(movieList, movieIDTest)].year} Rating: ${movieList[binarySearch(movieList, movieIDTest)].rating}`
} else {
  //Display the result to console
  console.log(`Search the movie with ID: ${movieIDTest} in movie list:`);
  console.log(`It's NOT FOUND`);
  //Display the result to table
  document.getElementById('binarySearchResult').innerHTML = `Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> It's <span class="note bold"> NOT FOUND</span>`
}

// Test case 2: Search for a movie that does not exist in the list
movieIDTest = "A000";
if (binarySearch(movieList, movieIDTest) > -1) {
  //Display the result to console
  console.log(`Search the movie with ID: ${movieIDTest} in movie list:`);
  console.log(`Found it at the index: ${binarySearch(movieList, movieIDTest)}`);
  console.log(`It's FOUND: ID: ${movieList[binarySearch(movieList, movieIDTest)].movieID} Title: ${movieList[binarySearch(movieList, movieIDTest)].title} Year: ${movieList[binarySearch(movieList, movieIDTest)].year} Rating: ${movieList[binarySearch(movieList, movieIDTest)].rating}`);
  document.getElementById('binarySearchResult1').innerHTML = `Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> <span class="note bold">Found it at the index: ${binarySearch(movieList, movieIDTest)}<br>It's FOUND: ID: ${movieList[binarySearch(movieList, movieIDTest)].movieID} Title: ${movieList[binarySearch(movieList, movieIDTest)].title} Year: ${movieList[binarySearch(movieList, movieIDTest)].year} Rating: ${movieList[binarySearch(movieList, movieIDTest)].rating}`
} else {
  //Display the result to console
  console.log(`Search the movie with ID: ${movieIDTest} in movie list:`);
  console.log(`It's NOT FOUND`);
  //Display the result to table
  document.getElementById('binarySearchResult1').innerHTML = `Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> It's <span class="note bold"> NOT FOUND</span>`
}

// Test Sequential Search Implementation
console.log(`Search the movie with ID: use sequential search algorithm`);
movieIDTest = "S007";
// Test case 1: Search for a movie that exists in the list
if (sequentialSearch(movieList, movieIDTest) > -1) {
  //Display the result to console
  console.log(`Search the movie with ID: ${movieIDTest} in movie list:`);
  console.log(`Found it at the index: ${sequentialSearch(movieList, movieIDTest)}`);
  console.log(`It's FOUND: ID: ${movieList[sequentialSearch(movieList, movieIDTest)].movieID} Title: ${movieList[sequentialSearch(movieList, movieIDTest)].title} Year: ${movieList[sequentialSearch(movieList, movieIDTest)].year} Rating: ${movieList[sequentialSearch(movieList, movieIDTest)].rating}`);
  //Display the result to table
  document.getElementById('sequentialSearchResult').innerHTML = `Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> <span class="note bold">Found it at the index: ${sequentialSearch(movieList, movieIDTest)} <br>It's FOUND: ID: ${movieList[sequentialSearch(movieList, movieIDTest)].movieID} Title: ${movieList[sequentialSearch(movieList, movieIDTest)].title} Year: ${movieList[sequentialSearch(movieList, movieIDTest)].year} Rating: ${movieList[sequentialSearch(movieList, movieIDTest)].rating}`
} else {
  //Display the result to console
  console.log(`Search the movie with ID: ${movieIDTest} in movie list:`);
  console.log(`It's NOT FOUND`);
  //Display the result to table
  document.getElementById('sequentialSearchResult').innerHTML = `Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> It's <span class="note bold"> NOT FOUND</span>`
}

movieIDTest = "D007";
// Test case 2: Search for a movie that does not exist in the list
if (sequentialSearch(movieList, movieIDTest) > -1) {
  //Display the result to console
  console.log(`Search the movie with ID: ${movieIDTest} in movie list:`);
  console.log(`Found it at the index: ${sequentialSearch(movieList, movieIDTest)}`);
  console.log(`It's FOUND: ID: ${movieList[sequentialSearch(movieList,movieIDTest)].movieID} Title: ${movieList[sequentialSearch(movieList, movieIDTest)].title} Year: ${movieList[sequentialSearch(movieList, movieIDTest)].year} Rating: ${movieList[sequentialSearch(movieList, movieIDTest)].rating}`);
  //Display the result to table
  document.getElementById('sequentialSearchResult1').innerHTML=`Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> <span class="note bold">Found it at the index: ${sequentialSearch(movieList, movieIDTest)}<br> Details: ID:${movieList[sequentialSearch(movieList, movieIDTest)].movieID} Title: ${movieList[sequentialSearch(movieList, movieIDTest)].title}, Year: ${movieList[sequentialSearch(movieList, movieIDTest)].year}, Rating: ${movieList[sequentialSearch(movieList, movieIDTest)].rating}`
}else {
  //Display the result to console
  console.log(`Search the movie with ID: ${movieIDTest} in movie list:`);
  console.log(`It's NOT FOUND`);
  //Display the result to table
  document.getElementById('sequentialSearchResult1').innerHTML = `Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> It's <span class="note bold"> NOT FOUND</span>`
}