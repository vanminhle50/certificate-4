//* Challenge - Random Background Colour
//Write some code to change the background colour of the body to a random colour from the array every time the button is clicked. is pressed

//! Pseudo code
//1. Find the button in the DOM and load it into a variable
//2. Find the body in the DOM and load it into a variable
//3. Create and array storing a list of colours as strings. eg. ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
//4. Add a click event to the button
//5. Generate and random number between 0 and the length of the array every time the button is clicked
//6. Use the random number to select a colour from the array
//7. Change the background colour of the body to the selected colour
//8. Test!

let colourArray =["#D9043D","#033E8C","#F2B705","#F28705","#D90404"];
function changeBackgroundColour(colourArray){
let min=0;
let max=colourArray.length;
const changBackgroundColourButton=document.getElementById('btn btn-outline-secondary');
function getRandomInt(min,max){
        return Math.floor(Math.random()*(max-min+1)+1);
}
let colour=colourArray[getRandomInt(min,max)];
document.getElementById('bodyID').style.backgroundColor=colour;
}
