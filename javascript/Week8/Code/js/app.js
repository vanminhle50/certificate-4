// Create an array movies
let initMovies = [
    {title: "The Shawshank Redemption", year: 1994},
    {title: "The Godfather", year: 1972},
    {title: "The Godfather: Part II", year: 1974},
    {title: "The Dark Knight", year: 2008},
    {title: "Krull", year: 1983},
    {title: "The Last Starfighter", year: 1981},
  ]
  
  // Create an instance of the MovieList class
  // MovieList takes in the rootId and the movie array
  let movieList = new MovieList('list', initMovies);
  
  // Event functions
  // Search Click
  // A to Z Click
  // Z to A Click
  
  // CRUD Function
  // C - Create - add new content
  // R - Read - read content
  // U - Update - update content
  // D - Delete - detele Content
  
  // Add a new movie to the list (create)
  // Update a movie in the list (update)
  // Delete a movie in the lsit (delete)
  
  // UI JavaScript
  // Tabs section
  // Function openForm
  // Take in 2 parameters, an event and an action
  // Return nothing.
  function openForm(evt, action){
    // declare variables
    let i, tabContent, tabLinks;
  
    // Get all elements that have the classname of tabcontent
    tabContent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabContent.length; i++){
      // set the display to none for all elements with the class name of tabcontent
      tabContent[i].style.display = 'none';
    }
  
    // Get all the elements that have the class name of tablinks and remove the class of active.
    tabLinks = document.getElementsByClassName('tablinks');
    for(i = 0; i < tabLinks.length; i++){
      // remove the active class
      tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }
  
    // Show the current tab and add the active class to the button that opened the tab
    document.getElementById(action).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // End of openForm()
  
  // Open tab by default.
  document.getElementById('defaultOpen').click();
  
  // Footer code
  // Get the date and inject it into the span located in the footer.
  // Get the span
  const dateSpan = document.getElementById("date");
  // Get the current date
  const theDate = new Date();
  // Add in the date to the DOM.
  dateSpan.textContent = theDate.getFullYear();