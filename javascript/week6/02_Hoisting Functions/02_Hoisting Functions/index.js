//Function Declaration
function sayHello(){
    console.log("Hello");
}
sayHello();
//Function Expression
const sayGoodbye = function (){
    console.log("Goodbye");
}; //Function Expression must have a semicolon at the end. This is because we are essentially loading a function into a variable

//1. In JavaScript we can declare a function in one of two ways
//2. Function Declaration or Function Expression

//3. There is one important difference between these 2 function declarations 
//4. Function Declaration are hoisted
//5. Hoisted = rased to the top of the code 
//6. This allows a Function Declaration to be called before they are declared 
//7. Example 

sayGoodNight();
function sayGoodNight(){
    console.log("Good Night");
}

//8. If I tried to do this with a Function Expression I would get a error
//9. As the function has not yet been declared 
sayGoodMorning(); // Call the function before declaration the function.
const sayGoodMorning = function (){
    console.log("Good Morning");
};