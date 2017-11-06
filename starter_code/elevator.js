class Elevator {
  constructor() {
    this.MAX_FLOOR = 10;
    this.GROUND_FLOOR = 0;
    this.floor = 0;
    this.direction = 'up';
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
    this.intervalId = 0;
  }

  start(update) {
      this.intervalId = setInterval(update, 1000);
      setTimeout(() => this.stop(), 15000);
  }

  stop() {
      clearInterval(this.intervalId);
  }

  update() {
      this.log();
  }

  _passengersEnter() {
      for (let i = 0; i < this.waitingList.length; i++) {
          let passenger = this.waitingList[i];
          if (this.floor === passenger.originFloor) {
              this.passengers.push(passenger);
              this.waitingList.splice(i, 1);
              this.requests.splice(this.requests.indexOf(passenger.originFloor), 1);
              console.log(`${passenger.name} has enter the elevator`);
          }
      }
  }

  _passengersLeave() {
      for (let i = 0; i < this.passengers.length; i++) {
          let passenger = this.passengers[i];
          if (this.floor === passenger.destinationFloor) {
              this.passengers.splice(i, 1);
              console.log(`${passenger.name} has left the elevator`);
          }
      }
  }

  floorUp() {
      this.floor < 10 ? this.floor++ : this.floor;
      this.direction = 'up';
  }

  floorDown() {
      this.floor > 0 ? this.floor-- : this.floor;
      this.direction = 'down';
  }

  call(person) {
      this.waitingList.push(person);
      if (this.requests.indexOf(person.originFloor) === -1) {
            this.requests.push(person.originFloor);
      }
  }

  log() {
      console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
