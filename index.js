function produceDrivingRange(range) {
return function(string1, string2) {
  const string1num = parseInt(string1, 10)
  const string2num = parseInt(string2, 10)
  const distance = string2num - string1num
  const rangeVar = range - distance
  if (rangeVar >= 0) {
    return `within range by ${rangeVar}`
  } else {
    return `${-rangeVar} blocks out of range`
  }
}
}

function produceTipCalculator(tipRate) {
  return function(fare) {
    return tipRate * fare
  }
}

function createDriver() {
  let driverId = 0
  return class Driver {
    constructor(name, driverId) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
