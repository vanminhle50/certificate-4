//? EXAMINE THE DOCUMENT OBJECT //

//The document;
! console.dir(document);
//This will give us a list of all the things that are in the document.
//This is a very large tree of properties and methods
//All for example stores all the html elements on the html page

//* Examples - Read properties
! console.log(document.domain);
! console.log(document.URL);
! console.log(document.title);
! console.log(document.doctype);

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
let headerTitle = document.getElementById('header-title');
//Write examples

//* Example - Updating a elements style
//let header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 9px #000';

//? Selecting elements by class name //
//When we get items by a class name we will get an array of all the items

//* Example - Array of elements with a particular class name
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello too!';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';
// TODO: Complete Examples Here

//* Example - Formating all elements in the array
//If we try to format everything in the array like the example below we will get a error
//items.style.backgroundColor = '#f4f4f4';

//We need to use a loop to loop over the array
// TODO: Complete Examples Here
for (let i=0; i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}

//? Get element by tag name //
// This works basicly the same as get element by class name

/* var li = document.getElementsByTagName('li');
// TODO: Complete Examples Here
for (let i=0; i<li.length;i++){
    li[1].textContent='Hello too!';
    li[1].style.fontWeight='bold';
    li[1].style.backgroundColor='yellow';
    li[i].style.backgroundColor='seagreen';
}
 */
//? Query selector //
// This works very similar to the jQuery query selector 
// However unlike jQuery it will only grab the first result not all results

var header = document.querySelector('#main-header'); // This will allow you to use any CSS selector
// TODO: Complete Examples Here
console.log(header);
header.style.borderBottom='solid 29px #cccccc';
// var input = document.querySelector('input');
// TODO: Complete Examples Here

// var submit = document.querySelector('input[type="submit"]');
// TODO: Complete Examples Here

var item = document.querySelector('.list-group-item');
// TODO: Complete Examples Here
// Will give us one element only, the first one found.
item.style.color ='red';

var lastItem = document.querySelector('.list-group-item:last-child');
// TODO: Complete Examples Here
lastItem.style.color='seagreen';
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='blue';
// TODO: Complete Examples Here

// Query Selector All //
// The querySelector() only gets the first result 
// However querySelectorAll() gets all results
// The works much like getElementbyClassName() 
// TODO: Complete Examples Here

let title=document.querySelectorAll('.title');
console.log(title);
title[1].textContent='Hello My Pig';
let odd =document.querySelectorAll('li:nth-child(odd)');
let even =document.querySelectorAll('li:nth-child(even');
for (let i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#cccccc';
}