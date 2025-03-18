//? Note: Class based OOP VS Prototype based OOP
//1. ES6 introduced classes. Most programming languages have classes.
//2. This made JavaScript a little easier to work with for programmers who are familiar with other languages.
//3. But in JavaScript classes are just syntactic sugar over prototypes.
//4. Class based code is converted to prototype based code at runtime.
//5. It is important to understand that in JavaScript we do not have classes only objects

//? Note: How dose inheritance work then
//1. In JavaScript, we can inherit from other objects.
//3. Inherited objects are added as prototypes to the child objects.
//4. A prototype refers to the parent object. (Links to parent object)
//5. This links to the parent object if the parent is changed then the child object will be affected.
//6. In the following activity we will take a look at JavaScript Objects and prototypes  

//! Objects and Prototypes

//* Objects
//1. The simplest way to create an object is using an object literal 
const circle = {
   radius: 1,
   draw: function () { }
};
//2. You can also create a new object using the new keyword
const circle2 = new Object();
circle2.radius = 1;
circle2.draw = function () { };
//3. This the above is true for other objects in JavaScript
const myArray = [1, 2, 3]; //object literal 
const myArray2 = new Array(1, 2, 3);
//4. It is best practice to use the object literal syntax to create these objects

//* Prototypes Inheritance
//1. When you create a new object it will inherit the properties and methods of the object it is based on
const myObject = {}
myObject.toString();
//2. The toString() method is a method in inherited from the Object prototype
//3. If you open the console. Under the object you can see the prototype chain containing the method toString
console.log(myObject);


//* Factory Functions
//1. Factory functions are functions that return objects
//2. To create multiple objects with the same structure and behavior (methods), we use a factory or a constructor function. 

//3. Factory function 
function createCircle(radius) {
   return {
      radius,
      draw: function () { }
   }
}
const factoryFunctionCreateCircle = createCircle(1);
factoryFunctionCreateCircle.draw()

//* Constructor function
//1. To create multiple objects with the same structure and behavior (methods), we use a factory or a constructor function. 
//2. Here we have constructor function
//3. The this keyword allows us to add properties and methods to the object we are creating

function Circle(radius) {
   this.radius = radius; //Attaching the radius property to this object
   this.draw = function () { }
}
const constructorFunctionCreateCircle = new Circle(1);
constructorFunctionCreateCircle.draw()
//4. Both constructor functions and factory functions return an object and are simple different approaches to create objects

//* Constructors
// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
//const x = {};
//x.constructor; // returns Object() 

// In JavaScript, functions are objects. They have properties and methods. 
console.log(Circle);
console.log(constructorFunctionCreateCircle);
Circle.name;
Circle.length;
Circle.constructor; // returns Function()
Circle.toString()

//* Value types VS Reference types
//0. When we create variables we have value types and reference types
//1. Value types are primitives and store the actual value.
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
//2. Reference types are objects and store a reference to the object in memory.
// Value types are copied by their value, reference types are copied by their reference. 
// Reference types are: Object, Function and Array 

//* Objects are dynamic 
//1. In JavaScript objects are dynamic we can add properties and methods to them at anytime.
//? Note: This is not the case in most programming languages. 
// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {}; //Add location to circle
circle['location'] = {};   // Add location to circle. This is the same as the above line. //But we use this approach if we do not know what we want to call the property until runtime.

delete circle.location; //Delete location

//* Enumerating properties
//? Note: An enumeration is used in any programming language to define a constant set of values. 
// Loop over a objects properties
for (let key in circle) console.log(key, circle[key]);
console.log(Object.keys(circle)); // Returns an array of the object's keys

//* Check for property
// To see if an object has a given property
if ('location' in circle) {
   console.log('circle has a location property');
} else {
   console.log('circle does not have a location property');
}

//* Abstraction
// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 

function CirclePublicPrivate(radius) {
   // Public member 
   this.radius = radius; // If we attach a property to this object, it will be accessible from outside the object.

   // Private member                       
   let defaultLocation = {};
}

//* Getters and Setters
//1. Getters and setters can be used to control access to an object's properties.
//2. Maybe you want to get a Property but not set it.
//3. You could even add in some validation before the property is set.
Object.defineProperty(this, 'defaultLocation', {
   get: function () { return defaultLocation; },
   set: function (value) { defaultLocation = value; }
});

//Getter and setter example
function Fish() {
   let speed = 0;
   this.get = function () { return speed; } //Getter
   this.set = function (value) { speed = value; }  //Setter
}
const fish1 = new Fish(); //Create a new fish
console.log(fish1.get()); //Get the speed
fish1.set(2) //Set the speed to 2
console.log(fish1.get()); //Get the speed
fish1.speed = 3 //Will not work as speed is private
