//1. Run the following code and try and debug it
const button = document.getElementById('button')
const input = document.getElementById('textBox')

console.log(button) 
button.addEventListener('click', function(){
    console.log(input.value);
})
