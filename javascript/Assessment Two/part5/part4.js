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
export default class Movie {
  constructor(movieID, title, year, rating) {
    this.movieID = movieID;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}
//Step 02:
// Create an array of at least 10 movies with mock values
export let movieList = [
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
//Step 03:
// Use localeCompare() to sort the movie list by movieID (as a string)
export function sortMovie() {
  movieList.sort((a, b) => a.movieID.localeCompare(b.movieID));
}

//Step 04:
// Binary Search Implementation
export function binarySearch(movieList, movieID) {
  let begin = 0;
  let end = movieList.length - 1;
  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    if (movieList[mid].movieID === movieID) {
      return mid;
    } else if (movieList[mid].movieID < movieID) {
      begin = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return null;
}

// Sequential Search Implementation
export function sequentialSearch(movieList, movieID) {
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].movieID === movieID) {
      return i; 
    }
  }
  return null;
}