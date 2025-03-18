var newDiv =  document.createElement('div');
// Add class
newDiv.className= 'hello';
// Add id
newDiv.id = 'hello1';
// Add attr
newDiv.setAttribute('title', 'Hello Div');
// Create text node
var newDivText = document.createTextNode('Hello World');
// Add text to div
newDiv.appendChild(newDivText);
