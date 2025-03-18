//Inheritance 
class Shape {
    move(){
        console.log('move');
    }
}

//1. Here we see Circle extends Shape 
//2. So Circle will have all the properties and methods of Shape
//3. We could say then that Circle is a Shape - Polymorphism  
class Circle extends Shape{
    draw(){
        console.log('draw');
    }
}

const c = new Circle();
c.draw();
c.move();