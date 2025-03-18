//! Prototypes and Inheritance
console.log(this)

//! Creating Your Own Prototypical Inheritance

//* Create parent object
//Create a Shape constructor
function Shape(colour) {
    this.colour = colour;
}
//Attach a method to its prototype
Shape.prototype.move = function () {
    console.log('move');
}

console.log (Shape);
//* Create child object
//Create a Circle constructor
function Circle(radius, colour) {
    //Call super constructor
    Shape.call(this, colour); //Call that Shape constructor.(THis lets us set properties for the shape constructor) passing in the colour and this object
    this.radius = radius;
}

//* Prototypical Inheritance 
function extend(Child, Parent) {
    // We can have circle inherit from shape using the following code
    Child.prototype = Object.create(Parent.prototype) //We are attaching the Shape prototype to the Circle prototype
    //The line above overwrites the Circle prototype object with the Shape prototype object.
    Child.prototype.constructor = Child; //As a result we need to reattach the Circle constructor to the Circle prototype.
}
extend(Circle, Shape);
const c1 = new Circle(1, 'red');
console.log(c1); //You can see the structure in the console.





//! Add a method to the circle prototype
//* Defining methods on the prototype. Why?
//1. By attaching the method to the Circle prototype object every time we create a new circle we have access to the draw method
//2. If we attached it to the circle object itself then we would have to attach it to every new circle we create.
//3. By attaching it to the Circle Prototype we free up memory as it is a link.
//4. This is only beneficial if you are creating a lot of circles.
Circle.prototype.draw = function () {
    console.log('draw');
}




//! Override move
//* Method Overriding
//Sometimes you may want to override a method in the parent
//This overrides the move method in shape and extends it
Circle.prototype.move = function () {
    //Sometimes you may with to extended the method in the parent
    Shape.prototype.move.call(this); //This calls the move method in the shape prototype
    console.log('move circle'); //New logic
}

//* View the Prototypical Inheritance in action
const c = new Circle(1, 'red');
//If you view the c in the console you will see it gets the move method from the Shape prototype. (Prototypical Inheritance)
console.log(c);






//!Polymorphism
//* Polymorphism
//Create a Square constructor
function Square(size, colour) {
    Shape.call(this, colour); //Call the Shape constructor
    this.size = size;
}
//Inherit from Shape
extend(Square, Shape);
//Override Move
Square.prototype.move = function () {
    console.log('move square');
}
//Create a array storing circles and squares
const shapes = [new Circle(1, 'red'), new Square(1, 'blue')];
//Loop over array
for (let shape of shapes) {
    //Each method has there own move method for shape. (Polymorphism = Many forms)
    shape.move(); //Call the move method for the shape
}


//? Note: When should you use inheritance?
// Keep things simple do not use inheritance if you do not need it.
// If you notice that some of your object have the same properties and methods then you should use inheritance.
// Avoid Inheritance unless you need 