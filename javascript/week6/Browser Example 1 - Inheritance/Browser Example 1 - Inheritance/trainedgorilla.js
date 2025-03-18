import Gorilla from './gorilla.js';

export default class TrainedGorilla extends Gorilla {
    constructor(name, weight, hatcolour) {
        super(name, weight);
        this.hatcolour = hatcolour;
    }

    putOnHat() {
        return `${this.name} is putting on his ${this.hatcolour} hat!`; 
    }

    removeHat() {
        return `${this.name} is removing his ${this.hatcolour} hat!`; 
    }

    dailyRoutine() {
        return `${super.wakeUp()} ${super.poundChest()} ${this.putOnHat()} ${super.eat()} ${this.removeHat()} ${super.sleep()}`;
    }
}
