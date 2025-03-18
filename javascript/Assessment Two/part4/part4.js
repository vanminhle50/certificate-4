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
// Create an array of at least 10 movies with mock values
let movieList=[
    new Movie("021", "The Shawshank Redemption",1994,9.3),
    new Movie("020","The Godfather",1972,9.2),
    new Movie("003","The Dark Knight",2008,9.0),
    new Movie("104","The Godfather Part II",1974,9.0),
    new Movie("005","12 Angry Men",1957,9.0),
    new Movie("106","Schindler's List",1993,9.0),
    new Movie("007","The Lord of the Rings: The Return of the King",2003,9.0),
    new Movie("108","Pulp Fiction",1994,8.9),
    new Movie("009","The Good, the Bad and the Ugly",1966,8.8),
    new Movie("110", "Fight Club ",1999,8.81)
];
document.getElementById('movieListResult').innerHTML = movieList.map(movie => `${movie.movieID}: ${movie.title}`).join("<br>");

movieList.sort((a,b)=>a.movieID-b.movieID);

document.getElementById('sorted-movie-list').innerHTML = movieList.map(movie => `${movie.movieID}: ${movie.title}`).join("<br>");
