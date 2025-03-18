//Declare a Classes (Classname allways begin a Capital character)
class Circle {
    //constructor 
    constructor(radius){
        this.radius = radius;
    }
    //method 
    draw(){
        console.log('draw...');
    }
}

const c1 = new Circle(1); // Circle with radius =1
const c2 = new Circle(10); // Circle with radius =10

