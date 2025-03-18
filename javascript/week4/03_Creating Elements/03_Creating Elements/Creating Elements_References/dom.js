//? createElement
//* Create a div
var newDiv =  document.createElement('div');
//console.log(newDiv);
//* Add class
newDiv.className= 'hello';
//console.log(newDiv);
//* Add id
newDiv.id = 'hello1';
//console.log(newDiv);
//* Add attr
newDiv.setAttribute('title', 'Hello Div');
//console.log(newDiv);
//* Create text node
var newDivText = document.createTextNode('Hello World');
//console.log(newDiv);
//* Add text to div
newDiv.appendChild(newDivText);
//console.log(newDiv);

//? Adding the element to the DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';
console.log(newDiv);

//* insertBefore takes the element you want to inset and the element you want to insert before
container.insertBefore(newDiv, h1);
