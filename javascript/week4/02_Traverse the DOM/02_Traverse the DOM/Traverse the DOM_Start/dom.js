//? TRAVERSING THE DOM //

//? Examples - Selecting parentsNodes
var itemList = document.querySelector('#items');
//* parentNode allows us to select the parent of an element. In this case the parent of the <ul id='#items'>
// TODO: Complete Examples Here
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='red';
console.log(itemList.parentNode.parentNode.parentNode);
//? Examples - Selecting childNodes
//* childNodes will get all the children of a elements as an array including text and white space
console.log(itemList.childNodes);
//* children will get all the html child elements as an array
// TODO: Complete Examples Here
itemList.children[1].style.backgroundColor='yellow';
//? Examples - firstElementChild
//* firstElementChild will get the first html child element 
console.log(itemList.firstElementChild);
// TODO: Complete Examples Here
itemList.firstElementChild.style.backgroundColor='blue';

//? Examples - lastElementChild
//* lastElementChild will get the last html child element
console.log(itemList.lastElementChild);
// TODO: Complete Examples Here
itemList.lastElementChild.textContent='Number4';
//? Examples - nextSibling
//* nextElementSibling will get the next html sibling
console.log(itemList.nextElementSibling);
//itemList.nextElementSibling.style.backgroundColor='seagreen';
//This is not working because Next Element Sibling =null;

//? Examples - previousSibling
//* previousElementSibling will get the previous html sibling
//console.log(itemList.previousElementSibling);
// TODO: Complete Examples Here

