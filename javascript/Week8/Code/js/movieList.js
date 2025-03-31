// The MovieList Class
// This class has 2 attributes and some methods
// Look at the Readme.md file for full list of methods.

class MovieList {
    constructor(rootId, movies){
      this.rootId = rootId; // the html id of where the list is to be shown
      this.movieList = movies; // Thye array of movie to be displayed
      this.refresh();
    }
  
  
    // Methods
    // Generate one row of the movieList
    movieRow(title, year){
      // get the parent element
      const rootElement = document.getElementById(this.rootId);
      // Create a new li
      const row = document.createElement('li');
      // Create the text and add the class to the new li.
      row.classList.add('row');
      row.textContent = `${title} (${year})`;
      // Add the new element to DOM.
      rootElement.appendChild(row);
    }
    // Generate All rows of the movieList
    genMovieList(){
      // Loop through the movieList.
      for(let i = 0; i < this.movieList.length; i++){
        let movie = this.movieList[i];
        // Call the movieRow function to generate the row.
        this.movieRow(movie.title, movie.year);
      }
    }
  
    // Generate a movieList based on a search term
  
    // Remove all list elements from the DOM
    removeElements(){
      // Get the parent element
      const rootElement = document.getElementById(this.rootId);
      // Get all elements with the class name of row.
      const childNodes = document.getElementsByClassName('row');
      // How many children do we have
      const len = childNodes.length - 1;
      for(let i = len; i >= 0; i++){
        // Get the last element in the array
        const child = childNodes[i];
        // Remove that element from the DOM
        rootElement.removeChild(child);
      }
    }
  
    // Refresh function
    refresh(){
      // Remove elements
      this.removeElements();
      // Generate the movie list
      this.genMovieList();
    }
    // Add function - add a new movie
    add(title, year){
      // Add a new movie to the end of the list.
      this.movieList.push({title: title, year: year});
      // Write this code another way (ES6)
      // this.movieList.push({ title, year});
      this.refresh();
    }
    
    // Update function - update a movie
    // Delete function - delete a movie
  
    // sortA2Z - sorting the movieList in ascending order
    // sortZ2a - sorting the movieList in descending order
    // Search - search by partial title
  }