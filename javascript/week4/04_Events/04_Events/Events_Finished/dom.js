//? EVENTS //

//? addEventListener //
//* using addEventListener is the best way to add detect events
var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
    console.log('Button clicked');
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    
    //* The event param stores a bunch of different information about the event
    console.log(e);
    console.log(e.target); //* e.target - The actual element that was clicked
    console.log(e.target.id); //* e.target.id - Gets the id of the element
    console.log(e.target.className); //* e.target.className - Any classes attached to the element
    console.log(e.target.classList); //* e.target.className - Any classes attached to the element as an array
    console.log(e.type); //* type of event eg. click

    console.log(e.clientX); //* position of the mouse X in relation to the document
    console.log(e.clientY); //* position of the mouse Y in relation to the document

    console.log(e.offsetX); //* position of the mouse in relation to the element
    console.log(e.offsetY); //* position of the mouse in relation to the element
}

//? Different Types Of Events //
var button = document.getElementById('button');
var box = document.getElementById('box');
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);
//box.addEventListener('mouseenter', runEvent);  //Only for the element itself 
//box.addEventListener('mouseleave', runEvent); //Only for the element itself 
//box.addEventListener('mouseover', runEvent); //For the element itself and any child elements
//box.addEventListener('mouseout', runEvent); //For the element itself and any child elements


//? Input Events //
var itemInput = document.querySelector('input[type="text"]');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent); //When a element like a text box is clicked in it comes into focus
// itemInput.addEventListener('blur', runEvent); //Blur is the opposite to focus 
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);

//? Select Events //
var select = document.querySelector('select');
 select.addEventListener('change', runEvent);
 select.addEventListener('input', runEvent);

//? Form Events //
//* Runs when a form submit button is pressed
var form = document.querySelector('form');
//form.addEventListener('submit', runEvent);



function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE: '+e.type);
  //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}


//? Form Events //
/*
//* Mouse move will listen for any mouse movement
box.addEventListener('mousemove', runEventMouseMove);

function runEventMouseMove(e){
    //* Gets the mouse position and displays it
    output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
    //* Changes the RGB value of the background colour based on the mouses position
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
  }
*/