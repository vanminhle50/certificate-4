// Function declaration
function sayHello(){
    console.log("Hello");
}
sayHello();
//Print out Hello with no problems.
const sayGoodBye = function(){
    console.log("Goodbye!")
};
// We must have a semicolon at the end 
//This is because we are essentially loading a function in to a variable
sayGoodBye();
// Hoist raised to the top of the code
// This will work for all function declarations.
sayGoodNight();
function sayGoodNight(){
    console.log("GoodNight!");
}
// this function declaration get hoisted, i.e. at the top of the code.
//This will work as the sayGoodNight function will be hoisted.
// If we try this with a function expression, then we get an error;
// As the function has not yet been disclared
sayGoodMorning();
const sayGoodMorning = function(){
    console.log("Good Morning!")
};
//This function is not hoisted, so we get an error.
// Error is : Can not  call the function before declaretion 