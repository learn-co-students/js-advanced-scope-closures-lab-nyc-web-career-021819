function produceDrivingRange(int) {
  return function(range1, range2) {
    const diff = Math.abs(parseInt(range2) - parseInt(range1))
    if (diff > int) {
      return `${diff - int} blocks out of range`
    } else {
      return `within range by ${(int - diff)}`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  }
}

function createDriver() {
  let driverId = 0;
    return class {
      constructor(name) {
        this.name = name;
        this.id = ++driverId
      }
    }
}
