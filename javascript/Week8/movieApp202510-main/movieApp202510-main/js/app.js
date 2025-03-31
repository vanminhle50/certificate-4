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
function searchClick(){
  // get the text elemetn from the DOM
  let formElements = document.getElementById('form-list-control').elements;
  // Get the text from the input box
  let text = formElements['search-string'].value;
  // Run the search method.
  movieList.search(text);
}
// A to Z Click
function a2zClick(){
  movieList.sortA2Z();
}
// Z to A Click
function z2aClick(){
  movieList.sortZ2A();
}

// CRUD Function
// C - Create - add new content
// R - Read - read content
// U - Update - update content
// D - Delete - detele Content

// Add a new movie to the list (create)
function addClick(){
  // Get the add form elements from the DOM
  let formElements = document.getElementById("form-add").elements;
  // Get the movie title from the form
  let title = formElements["title"].value;
  // Get the year from the form
  let year = formElements["year"].value;
  // Add in validation
  // We can test our year and title here.
  // We can add in rules to test our input.

  // Save the new movie into the lsit.
  movieList.add(title, Number(year));
  // Clear the input fields
  formElements.title.value = "";
  formElements.year.value = "";
}
// Update a movie in the list (update)
function updateClick(){
  // Get the add form elements from the DOM
  let formElements = document.getElementById("form-update").elements;
  // Get the index from the form
  let index = formElements["index"].value - 1;
  // Get the movie title from the form
  let title = formElements["title"].value;
  // Get the year from the form
  let year = formElements["year"].value;
  // Add in validation
  // We can test our year and title here.
  // We can add in rules to test our input.
  // Test the index.

  // Save the new movie into the lsit.
  movieList.update(Number(index), title, Number(year));
  // Clear the input fields
  formElements.index.value = "";
  formElements.title.value = "";
  formElements.year.value = "";
}

// Delete a movie in the list (delete)
function deleteClick(){
  // Get the add form elements from the DOM
  let indexElement = document.getElementById("delIndex");
  let index = indexElement.value - 1;
  // Add in validation
  // Test the index.
  // Are you sure question? confirm.

  // Save the new movie into the lsit.
  movieList.delete(Number(index));
  // Clear the input fields
  indexElement.value = "";
}

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