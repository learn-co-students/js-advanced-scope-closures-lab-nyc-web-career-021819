function produceDrivingRange(num){
  return function(range1, range2){
    let range = parseInt(range2) - parseInt(range1)
    let difference = range - num
      if (difference > 0) {
        return `${difference} blocks out of range`
      } else {
        return `within range by ${Math.abs(difference)}`
      }
  }
}

function produceTipCalculator(tip){
  return function(num){
    return tip * num;
  }
}

function createDriver(name){
  let driverId = 0;
  return function(driver){
    this.name = driver;
    this.id = ++driverId;
  }
}
