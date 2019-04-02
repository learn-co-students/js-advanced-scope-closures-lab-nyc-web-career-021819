const produceDrivingRange = function (blockRange) {
  return function (ar1, ar2) {
    let start = parseInt(ar1)
    let end = parseInt(ar2)
    let distance = Math.abs(end - start);
    let diff = blockRange -  distance;
    if (diff > 0) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`;
    }
  }
}


const produceTipCalculator = function (percentage) {
  return function (money) {
    return money * percentage;
  };
}


function createDriver() {
  let driverId = 0
  return class{
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  };
}
