class Ball {
    constructor(colour, diameter, weight){
        this.colour = colour;
        this.diameter = diameter;
        this.weight = weight;
    }

    roll(){
        console.log("Roll");
    }

    //Static Method
    //1. We create static methods by using the static keyword
    static bounce(){
        console.log("Bounce");
    }

}

const tennisBall = new Ball("green", 5, 100);

//2. I can access the roll method using.
tennisBall.roll();
//3. But I can not access the bounce method like this
//tennisBall.bounce();

//4. This is because it belongs to the class
Ball.bounce();
//5. So to call static methods we do not need to create a instance of a class
