//Inheritance 
class Shape {
    constructor(colour) {
        this.colour = colour
    }

    move(){
        console.log('move');
    }
}

//1. If we are using a constructor on a child class we need to call the constructor on the parent class
//2. We do this using super()
//3. We then pass in the value for the parents constructor into super
class Circle extends Shape{
    constructor(colour, radius) {
        super(colour)
        this.radius = radius;
    }

    draw(){
        console.log('draw');
    }
}

//4. When we create a object from the class we need to call pass in the values for the constructors  
const c = new Circle('red', 10);
console.log(c);