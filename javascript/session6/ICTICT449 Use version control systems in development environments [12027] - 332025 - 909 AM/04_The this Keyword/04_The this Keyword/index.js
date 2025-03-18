class Circle {
    draw(){
        console.log(this);
    }
}

const c = new Circle();
c.draw(); //1. This is being executed a method and will output the Circle Object.

const draw = c.draw;

draw(); //2. This is being executed a function and will output undefined.

//3. This effectively dose this
/*
const draw = draw(){
    console.log(this);
}
*/
//4. It's taking the method out of the class and running it as a function
//5. It no longer has any part of the class