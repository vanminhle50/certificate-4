//* Challenge - Stop Watch
//This activity is for anyone that is feeling really confident and want to push themselves a little further.
//This challenge requires you to create a stop watch
//Before you start you may with to take a look at how stop watch works.
//Take a look at one on your phone or have a look and the finished example in the browser

//! This is a trick activity so you may need to refer to the finished activity for some clues.

//? Note: To complete this activity you will need to understand how setInterval() works and clearInterval() works.
// I suggest you take some time to look at how they work

//! Pseudo code 
//1. Create variables to store seconds, tens eg. var seconds = 00; var tens = 00;
//2. Find the element with the id "tens" and store it in a variable eg. var appendTens = document.getElementById("tens");
//3. Find the element with the id "seconds" and store it in a variable eg. var appendSeconds = document.getElementById("seconds");
//5. Find all the buttons in the DOM and add an event listener to each button.
//6. When the start button is pressed clear the interval and set the interval to run every 10 milliseconds. eg. Interval = setInterval(startTimer, 10);
//7. When the stop button is pressed clear the interval.
//8. When the reset button is pressed clear the interval and set the seconds and tens variables to 00. eg. seconds = 00; tens = 00; Also don't forget to update the DOM for tens and seconds.
//9. Create a function called startTimer that will be called every 10 milliseconds.
//10. Inside the function increase the tens variable by 1.
//11. If the tens variable is < 9 (i.e. less than 9) add a 0 to the front of the tens variable eg. if (tens < 9) { appendTens.innerHTML  = "0" + tens; }
//12. If the tens variable is > 9 (i.e. greater than 9) set the tens variable to the current tens variable. eg. if (tens > 9) { appendTens.innerHTML  = tens; }
//13. If tens is > 99 add 1 to seconds and set tens to 0. eg. if (tens > 99) { seconds++; appendSeconds.innerHTML  = "0" + seconds; tens = 0; appendTens.innerHTML = "0" + 0;}
//14. if seconds is > 9 append seconds to the DOM. eg. if (seconds > 9) { appendSeconds.innerHTML  = seconds; }