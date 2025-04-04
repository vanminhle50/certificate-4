// ---------------------------------------------------------------------
// Part 4: Data Structure - Class
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen Institute, VIC, Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

// Step 1:

// Define the Movie class
class Movie {
  constructor(movieID, title, year, rating) {
    this.movieID = movieID;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}
//Step 02:
// Create an array of at least 10 movies with mock values
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
document.getElementById('movie-list').innerHTML = movieList.map(movie => `<span class="note bold">${movie.movieID}: ${movie.title}, Year: ${movie.year}, Rating: ${movie.rating}`).join("<br></span>");

//Step 03:
// Use localeCompare() to sort the movie list by movieID (as a string)
function sortMovie() {
  movieList.sort((a, b) => a.movieID.localeCompare(b.movieID));
}
sortMovie();
//Display the movie list
document.getElementById('sorted-movie-list').innerHTML = movieList.map(movie => `<span class="note bold">${movie.movieID}: ${movie.title}, Year: ${movie.year}, Rating: ${movie.rating}`).join("<br></span>");

//Step 04:
// Binary Search Implementation
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
function sequentialSearch(movieList, movieID) {
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].movieID.localeCompare(movieID) === 0) {
      return i; 
    }
  }
  return -1;
}


// Test Binary Search Implementation
let movieIDTest ="A021";
//Display the result to table with case 1
if (binarySearch(movieList,movieIDTest)!=null){
  document.getElementById('binarySearchResult').innerHTML=`Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> <span class="note bold">Found it at the index: ${binarySearch(movieList, movieIDTest)}`
}else document.getElementById('binarySearchResult').innerHTML=`Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> It's <span class="note bold"> NOT FOUND</span>`
//Display the result to table with case 2
movieIDTest ="A000";
if (binarySearch(movieList,movieIDTest)!=null){
  document.getElementById('binarySearchResult1').innerHTML=`Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> <span class="note bold">Found it at the index: ${binarySearch(movieList, movieIDTest)}`
}else document.getElementById('binarySearchResult1').innerHTML=`Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> It's <span class="note bold"> NOT FOUND</span>`

movieIDTest ="S007";
//Display the result to table with case 1
if (sequentialSearch(movieList,movieIDTest)!=null){
  document.getElementById('sequentialSearchResult').innerHTML=`Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> <span class="note bold">Found it at the index: ${sequentialSearch(movieList, movieIDTest)}`
}else document.getElementById('sequentialSearchResult').innerHTML=`Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> It's <span class="note bold"> NOT FOUND</span>`



movieIDTest="D007";
//Display the result to table with case 2
if (sequentialSearch(movieList,movieIDTest)!=null){
  document.getElementById('sequentialSearchResult1').innerHTML=`Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> <span class="note bold">Found it at the index: ${sequentialSearch(movieList, movieIDTest)}`
}else document.getElementById('sequentialSearchResult1').innerHTML=`Search the movie with ID: <span class="bold">${movieIDTest}</span> in movie list: <br> It's <span class="note bold"> NOT FOUND</span>`