//1. Run the following code and try and debug it
const button = document.getElementById('button')
const input = document.getElementById('textBox')

//2. The button variable is NULL. The element can not be found
console.log(button) //You can check this using a console log
//In this case it is because out button has a id of btn not button. One of the values need to be changed so they match
button.addEventListener('click', function(){
    console.log(input.value);
})
//3. The easiest way to solve a null error is to simple use a console.log to follow the data.
//Start up the top were the value should be set then simple follow the data as it follows through the script logging it as you go.