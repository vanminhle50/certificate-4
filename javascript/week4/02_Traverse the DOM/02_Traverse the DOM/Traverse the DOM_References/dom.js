//? TRAVERSING THE DOM //

//? Examples - Selecting parentsNodes
var itemList = document.querySelector('#items');
//* parentNode allows us to select the parent of an element. In this case the parent of the <ul id='#items'>
//console.log(itemList.parentNode); 
//itemList.parentNode.style.backgroundColor = 'gray';
//console.log(itemList.parentNode.parentNode.parentNode);

//? Examples - Selecting childNodes
//* childNodes will get all the children of a elements as an array including text and white space
//console.log(itemList.childNodes);
//* children will get all the html child elements as an array
//console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//? Examples - firstElementChild
//* firstElementChild will get the first html child element 
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


//? Examples - lastElementChild
//* lastElementChild will get the last html child element
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//? Examples - nextSibling
//* nextElementSibling will get the next html sibling
// console.log(itemList.nextElementSibling);

//? Examples - previousSibling
//* previousElementSibling will get the previous html sibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

