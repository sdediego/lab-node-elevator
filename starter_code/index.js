const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator();
const personJuan = new Person('Juan', 2, 4);
const personMarta = new Person('Marta', 5, 7);


elevator.call(personJuan);
elevator.call(personMarta);
elevator.start(update, 1000);

function update() {
    if (elevator.direction === 'up' && elevator.floor < elevator.MAX_FLOOR) {
        elevator.floorUp();
        elevator.log();
        elevator.MAX_FLOOR === elevator.floor ? elevator.direction = 'down' : elevator.direction;
    } else if (elevator.direction === 'down' && elevator.floor > elevator.GROUND_FLOOR) {
        elevator.floorDown();
        elevator.log();
        elevator.GROUND_FLOOR === elevator.floor ? elevator.direction = 'up' : elevator.direction;
    }

    for (let i = 0; i < elevator.requests.length; i++) {
        if (elevator.requests.indexOf(elevator.floor) !== -1) {
            elevator._passengersEnter();
        }
    }

    elevator._passengersLeave();
}
