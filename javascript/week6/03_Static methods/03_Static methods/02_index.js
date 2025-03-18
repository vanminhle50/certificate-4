class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw(){
        console.log("Draw");
    }

    static parse(str){
        //2. In this example we are passing in a radius and returning a new instance of the Circle Object
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }

}

//1. here we have anther example I'm accessing the Circle class directly and calling the static parse method
const circle = Circle.parse('{ "radius":1 }');
console.log(circle);

//3. One example of this is the Math class
Math.random();
//4. Here we are accessing the class directly. 


//5. We are not going
//let myMathObject = new Math();
//myMathObject.random();