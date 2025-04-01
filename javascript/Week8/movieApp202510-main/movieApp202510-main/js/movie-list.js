// The MovieList Class
// This class has 2 attributes and some methods
// Look at the Readme.md file for full list of methods.

class MovieList {
  /**
   * @description: Constructor of the class
   * @param {HTMLElement} rootId : The id of the list is to be shown.
   * @param {Array<object>} movies: The array of movie object 
   */
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
  genMovieSearchList(list){
    // Loop through the list
    for(let i = 0; i < list.length; i++){
      let movie = list[i];
      // Call the movieRow function to generate a row.
      this.movieRow(movie.title, movie.year);
    }
  }

  // Remove all list elements from the DOM
  removeElements(){
    // Get the parent element
    const rootElement = document.getElementById(this.rootId);
    // Get all elements with the class name of row.
    const childNodes = document.getElementsByClassName('row');
    // How many children do we have
    const len = childNodes.length - 1;
    for(let i = len; i >= 0; i--){
      // Get the last element in the array- Use reverse iteration instead for forward interation because if you you forward interation, computer will remove the first element from the DOM then the new element will be instead this one and computer will be skip that (the new first element).
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
  update(index, title, year){
    // Update the title
    this.movieList[index].title = title;
    // Update the year
    this.movieList[index].year = year;
    // Refresh the list.
    this.refresh();
  }

  // Delete function - delete a movie
  delete(index){
    // Remove one movie from the array
    // Note: we should really test the index here
    // Test for out of bounds.
    this.movieList.splice(index, 1);
    // Refresh
    this.refresh()
  }

  // sortA2Z - sorting the movieList in ascending order
  sortA2Z(){
    this.movieList.sort(function(a, b){
      return a.title.localeCompare(b.title);
    });
  }

  // sortZ2a - sorting the movieList in descending order
  sortZ2AZ(){
    this.movieList.sort(function(a, b){
      return b.title.localeCompare(a.title);
    });
  }

  // Search - search by partial title
  search(nameString){
    // Create an array to hold the search results;
    let shortList = [];
    // Use a loop to check if the nameString is in any movie title.
    for(let movie of this.movieList){
      // Check for nameString in the title
      if(movie.title.includes(nameString)){
        // if the nameString is in the movie title, add this to our shortList.
        shortList.push(movie);
      }
    }
    // Generate the list to display
    this.genMovieSearchList(shortList);
  }
}