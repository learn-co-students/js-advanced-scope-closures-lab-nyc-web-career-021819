function produceDrivingRange(distance) {
  return function(a, b) {
    let start = a.slice(0, -2)
    let destination = b.slice(0, -2)
    if (distance >= destination - start) {
      return `within range by ${distance - (destination - start)}`
    } else {
      return `${Math.abs(distance - (destination - start))} blocks out of range`
    }
  };
}

function produceTipCalculator(pct) {
  return function(fare) {
    return fare * pct
  }
}

function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
