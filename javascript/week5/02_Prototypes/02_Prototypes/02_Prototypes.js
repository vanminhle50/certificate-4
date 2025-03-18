//! Prototypes and inheritance

//* Get a Objects Prototype
// Every object (except the root object) has a prototype (parent). 
// Think of the prototype as the parent of the object.
// To get the prototype of an object:
const obj = {
    propertyName: "testValue"
};
const ObjectPrototype = Object.getPrototypeOf(obj);
console.log(ObjectPrototype); //Here we are getting the parent of the obj Object

const myArray = []
console.log(myArray); //If you open up the [[Prototype]] for this array you will see all the methods an array inherits from the Array prototype




//! Property Descriptors
// To get the attributes of a property:
//Properties have something call property descriptors. 
//These descriptors control how the property behaves.
console.log(Object.getOwnPropertyDescriptor(obj, 'propertyName')); //Here you can see the descriptor

//* Change/Set a property on a object
// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
    configurable: false,    // cannot be deleted
    writable: false,    // cannot be changed
    enumerable: false // cannot be enumerated (Looped over to access the property)
});
console.log(Object.getOwnPropertyDescriptor(obj, 'propertyName'));





//! Add to the parent object
//* Add a property to a prototype
//1. It is possible to add a property to the prototype of an object
Object.prototype.test = 'test';
Array.prototype.test = 'test';
//2. This is not recommended to do, because it will be in the memory for all the objects
//3. You should only do this if you own/created the object
console.log(obj);

//* Link Prototypes
//1. All objects created with the same constructor will have the same prototype. 
//2. A single instance of this prototype will be stored in the memory and linked/shared
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 






/*
//! Adding properties to the prototype
//* Adding Properties to Prototypes
//1. When dealing with large number of objects, it's better to put their Methods on their prototype.
//eg. lets say I needed 100 Circles I would end up with a 1000 draw methods.
//An alternative would be to attach the draw method to the Circle prototype. This way we would only have one draw method.

//2. This way, a single instance of the methods
//3. Will be in the memory. 

function Circle(radius) {
    this.radius = radius; //Attaching the radius property to this object
    this.draw = function () { }
}
Circle.prototype.move = function () { console.log("move") }
console.log(Circle); //Here you can see move ont eh Circle prototype

let myCircle = new Circle(1);
myCircle.move();


//* Get instances properties 
//Instance properties are properties directly attached to the object
console.log(Object.keys(myCircle));

//* Get all properties of an object
//1. To get all the properties (instant + prototype properties) 
for (let key in myCircle) { console.log(key) }
//2. Remember that the prototype properties are not enumerable (can not be looped over) */