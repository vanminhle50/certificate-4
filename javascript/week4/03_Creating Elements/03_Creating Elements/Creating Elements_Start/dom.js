//? createElement
//* Create a div
// TODO: Complete Examples Here
let newDiv = document.createElement('div');
console.log(newDiv);
//* Add class
// TODO: Complete Examples Here
newDiv.className='Hello';
//console.log(newDiv);
//* Add id
// TODO: Complete Examples Here
//console.log(newDiv);
newDiv.id='There';
//* Add attr
// TODO: Complete Examples Here
//console.log(newDiv);
newDiv.setAttribute('title','Hello there div');
//* Create text node
// TODO: Complete Examples Here
//console.log(newDiv);
let newDivText = document.createTextNode("Hello there!!");
newDiv.appendChild(newDivText);
//* Add text to div
// TODO: Complete Examples Here
//console.log(newDiv);

//? Adding the element to the DOM
// TODO: Complete Examples Here
let container =document.querySelector('header container');
let h1=document.querySelector('header h1');
newDiv.style.background='red';