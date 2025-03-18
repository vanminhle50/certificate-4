import Animal from './animal.js';

export default class Gorilla extends Animal {
    constructor(name, weight) {
        super(name, weight);
    }

    climbTrees() {
        return `${this.name} is climbing trees!`;
    }

    poundChest() {
        return `${this.name} is pounding its chest!`;
    }

    showVigour() {
        return `${super.eat()} ${this.poundChest()}`;
    }

    dailyRoutine() {
        console.log(`${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`);
    }

}
