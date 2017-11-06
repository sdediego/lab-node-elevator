class Elevator {
  constructor() {
    this.MAX_FLOOR = 10;
    this.GROUND_FLOOR = 0;
    this.floor = 0;
    this.direction = '';
    this.requests = [];
    this.intervalId = 0;
  }

  start() {
      this.intervalId = setInterval(this.update, 1000);
  }

  stop() {
      clearInterval(this.intervalId);
  }

  update() {
      this.log();
  }

  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() {
      this.floor < 10 ? this.floor++ : this.floor;
      this.direction = 'up';
  }

  floorDown() {
      this.floor > 0 ? this.floor-- : this.floor;
      this.direction = 'down';
  }

  call() { }
  
  log() {
      console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
