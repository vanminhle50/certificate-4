//? EXAMINE THE DOCUMENT OBJECT //

//The document;
//! console.dir(document);
//This will give us a list of all the things that are in the document.
//This is a very large tree of properties and methods
//All for example stores all the html elements on the html page

//* Examples - Read properties
//! console.log(document.domain);
//! console.log(document.URL);
//! console.log(document.title);
//! console.log(document.doctype);

//* Example - Change a property
//! document.title =  123;

//* Example - View a element and it's children
//! console.log(document.head);
//! console.log(document.body);

//* Example - View all elements as an array
//! console.log(document.all);

//* Example - View a single element by it's array ID
//! console.log(document.all[10]);
//! document.all[10].textContent = 'Hello';

//* Example - Get a particular type of element
//! console.log(document.forms); //Gets all forms
//! console.log(document.links); //Gets all links
//! console.log(document.images); //Gets all images

//? Selecting & Updating elements in the DOM //
//There are a number of ways to select elements in the DOM

//* Example - Gets a elements by ID
//! console.log(document.getElementById('header-title'));

//* Example - Updating a element by ID
//! let headerTitle = document.getElementById('header-title');
//! headerTitle.textContent = 'Hello'; 
//! headerTitle.innerText = 'Goodbye'; //innerText will apply CSS rules such as display none. eg. if the header-title was set to display none we would see nothing
//! headerTitle.innerHTML = '<h3>hello</h3>'; //Applies HTML

//* Example - Updating a elements style
//! let header = document.getElementById('main-header');
//! header.style.borderBottom = 'solid 3px #000';

//? Selecting elements by class name //
//When we get items by a class name we will get an array of all the items

//* Example - Array of elements with a particular class name
//! let items = document.getElementsByClassName('list-group-item');
//! console.log(items);
//! console.log(items[1]);
//! items[1].textContent = 'Hello 2';
//! items[1].style.fontWeight = 'bold';
//! items[1].style.backgroundColor = 'yellow';

//* Example - Formating all elements in the array
//If we try to format everything in the array like the example below we will get a error
//!items.style.backgroundColor = '#f4f4f4';

//We need to use a loop to loop over the array
//! for(var i = 0; i < items.length; i++){
//!   items[i].style.backgroundColor = '#f4f4f4';
//! }


//? Get element by tag name //
// This works basicly the same as get element by class name

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

//? Query selector //
// This works very similar to the jQuery query selector 
// However unlike jQuery it will only grab the first result not all results

// var header = document.querySelector('#main-header'); // This will allow you to use any CSS selector
// header.style.borderBottom = 'solid 4px #ccc'; 

// var input = document.querySelector('input');
// input.value = 'Hello World' // This will add a value to the input field

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// Query Selector All //
// The querySelector() only gets the first result 
// However querySelectorAll() gets all results
// The works much like getElementbyClassName() 

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

