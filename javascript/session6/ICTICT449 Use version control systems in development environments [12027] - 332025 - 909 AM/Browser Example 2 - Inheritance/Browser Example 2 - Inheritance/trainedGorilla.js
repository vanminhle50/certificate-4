import Gorilla from './gorilla.js';

export default class TrainedGorilla extends Gorilla {
    constructor(name, weight, hatColour) {
        super(name, weight);
        this.hatColour = hatColour;

    }

    removeHat() {
        return `${this.name} is removing his ${this.hatColour} hat.`;
    }

    putOnHat() {
        return `${this.name} is putting on his ${this.hatColour} hat.`;
    }

    //override
    dailyRoutine() {
        return `${super.wakeUp()} ${this.poundChest()} ${this.putOnHat()} ${super.eat()} ${this.removeHat()} ${super.sleep()}`;
    }

}