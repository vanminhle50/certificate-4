//! Inheritance vs Mixins(Composition)
//1. A big problem with in inheritance is that there structure of the inheritance is not flexible.
//2. Say you create the following inheritance hierarchy:
//? Animal (Object)
//* walk()
//* eat()
//? Animal (Object) -> Dog (Object)
//? Animal (Object) -> GoldFish (Object)

//3. Dogs walk but GoldFish do not
//4. You would need to change your structure to add in fish

//! Mixins
//1. A mixin is a way to add functionality to an object without modifying it.
//2. This allows you to flexibly mix and match features

//* Can Eat Object
const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating.');
        console.log(this.hunger);
    }
}
//* Can Walk Object
const canWalk = {
    walk: function () {
        console.log('walking.');
    }
}
//* Can Swim Object
const canSwim = {
    swim: function () {
        console.log('swimming.');
    }
};

//* Can Fly Object
const canFly={
    fly:function(){
        console.log('flying');
    }
}

//* Cat Object
function Cat(name) {
    this.name = name
    this.hunger = 10;
    this.play = function () {
        console.log('playing');
    }
}

//* Fish Object
function Fish(name){
    this.name = name;
    this.hunger=1;
}
//* Mixin or (Composition)
//Add the canEat and canWalk objects to the prototype of Cat
//...mixinSources - The ... operator will allow us to pass in as many objects as we want. (They will be stored in an array)
function mixin(objectTarget, ...mixinSources) {
    Object.assign(Cat.prototype, ...mixinSources); //... will spread 
    Object.assign(Fish.prototype, ...mixinSources); //... will spread 
    // the array into the arguments
}
mixin(Cat.prototype, canEat, canWalk);
mixin(Fish.prototype,canEat, canSwim);

//* Use Mixins
const rainbow = new Cat('Rainbow');
console.log(rainbow);
rainbow.eat();
rainbow.walk();
rainbow.play();

const nemo = new Fish('Nemo');
console.log(nemo);
nemo.swim();
nemo.eat();


//? Note: This approach is very flexible