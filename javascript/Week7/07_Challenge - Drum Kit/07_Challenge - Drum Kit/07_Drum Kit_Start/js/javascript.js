//* Challenge - Drum Kit
//Create digital Drum Kit that plays the sound of a drum when a key is pressed.

//! Pseudo code
//? Note: Every key on the keyboard is assigned a key code. eg. j = 74
//? Note: If you take a look at the HTML, you will see that each key has a data-key attribute with the key code for the key.
//? Note: The audio element is assigned a data-key attribute with the key code for the key. This way we know what key will play what sound. Eg. J has a key code of 74 and an audio element with a data-key attribute of 74 has the sound to play when J is pressed.

//1. Add a keydown event listener to the window. eg. window.addEventListener("keydown", playSound);
//2. Create a function that will be called when a key is pressed. eg. function playSound(e) {
//Note: e is the event object and will store the keycode of the key that was pressed. eg. e.keyCode
//3. Create a variable that will store the key element that was pressed. eg. const keyCode = e.keyCode

//4. Check if the key pressed is one of the keys we are interested in. J,B,V,H,G,F,E,R,I,K
//You check if the key press was J,B,V,H,G,F,E,R,I,K using a query selector and a if statement
//eg. keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
//if (!keyElement) return; //return stops the function from running if the key pressed is not one of the keys we are interested in.

//5. Find the appropriate audio element to play based on the keycode using a query selector and load it into a variable
//6. Play the audio element
//? Note: You may need to look up how to play a audio element.
//? Note: You may also want to reset the currectTime of the audio element to 0 before playing it. This will play the sound from the start.
//7. Test your code by pressing the keys J,B,V,H,G,F,E,R,I,K.
//8. Happy DRUMMING! 🥁 


