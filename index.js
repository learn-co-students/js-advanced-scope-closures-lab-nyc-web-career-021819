function produceDrivingRange(integer) {
  return function(range1, range2) {
    const difference = Math.abs(parseInt(range2)-parseInt(range1))
      if (difference > integer) {
        return `${difference - integer} blocks out of range`
      } else {
        return `within range by ${integer - difference}`
      }
  }
}

function produceTipCalculator(integer) {
  return function(fare) {
    return fare * integer
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
