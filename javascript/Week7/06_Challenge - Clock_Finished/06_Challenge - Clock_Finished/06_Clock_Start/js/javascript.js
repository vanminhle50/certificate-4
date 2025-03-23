//* Challenge - Clock
//Create a clock that shows the current time eg. hh:mm:ss AM/PM

//! Pseudo code
//? Note: We will need to create a function that is called every second (1000 milliseconds)
//? Note: To do this we will need to use a setTimeout function
//1. Look up an example of the setTimeout function
//2. Create a function that will be called every second (1000 milliseconds)
//3. Test the function runs every second
//4. Inside the function, create a variable that stores a Date object. eg. var date = new Date();
//5. Use the getHours method on the date object to get the current hour. eg. var hour = date.getHours();
//6. Use the getMinutes method on the date object to get the current minute. eg. var minute = date.getMinutes();
//7. Use the getSeconds method on the date object to get the current second. eg. var second = date.getSeconds();
//8. Create a variable to store AM or PM. eg. var session = "AM";
//9. If the hour is greater than 12, set the session variable to PM. eg. if (hour > 12) {
//10. Else, set the session variable to AM. eg. } else {
//11. If the hour is greater than 12, subtract 12 from the hour. eg. 22 - 12 = 10    (10pm)
//? Note: Look up hoe to use "ternary operator" in javascript
//? Note: Since we are creating a digital clock it would be nice to add a 0 in front of the hour if it is less than 10.
//12. If the hour is less than 10, add a 0 in front of the hour. Try using a  "ternary operator" instead of a if statement  eg. if (hour < 10) {
//13. If the minute is less than 10, add a 0 in front of the minute. eg. if (minute < 10) {
//14. If the second is less than 10, add a 0 in front of the second. eg. if (second < 10) {
//15. Create a variable to store the time. eg. var time = hour + ":" + minute + ":" + second + " " + session;
//16. Use the innerText property to display the time in element with the id "MyClockDisplay" eg. document.getElementById("MyClockDisplay").innerText = time;
//17. Test App  
