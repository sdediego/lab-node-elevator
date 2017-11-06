const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator();

// Go to the top floor
let top = false;
while (!top) {
    elevator.floorUp();
    elevator.log();
    elevator.MAX_FLOOR === elevator.floor ? top = true : top;
}

// Go to the bottom floor
let ground = false;
while (!ground) {
    elevator.floorDown();
    elevator.log();
    elevator.GROUND_FLOOR === elevator.floor ? ground = true : ground;
}
