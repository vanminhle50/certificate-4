//Method Overriding
//1. Sometime you may be extending a class and on of the parents classes methods may not do exactly what your child class needs them to do.
//2. Lets say our parent class Shape has a move() method 
//3. But the  child class circle needs the move() method to behave a bit differently.
//4. E.G. Maybe the circle move() Method roles instead of sliding.

class Shape {
    move(){
        console.log('move');
    }
}

class Circle extends Shape{
    draw(){
        console.log('draw');
    }

    //5. We simple need to add a move() method to the child class
    //6. This will bes used instead of the parent method
    move(){
        //9. To call the parent move() method we use super
        super.move(); //10. This allows us to use the code in the parent class 
        console.log('Circle Role Move'); //11. and then extend it with our code in our class.
    }
}

const c = new Circle();
//7. You should see 'Circle Role Move' in the console
c.move();


//8. But what if we want to run the code in the parent method move() and the code in the child method move()
