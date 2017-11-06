class Elevator {
  constructor() {
    this.floor = 0;
    this.direction = '';
    this.MAXFLOOR = 10;
    this.requests = [];
    this.intervalId = 0;
  }

  start() {
      this.intervalId = setInterval(this.update, 1000);
  }

  stop() {
      clearIterval(this.intervalId);
  }

  update() {
      this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() {
      console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
