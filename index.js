
const produceDrivingRange = function(num){
  return function(a, b){
    const distance = Math.abs(parseInt(a.slice(0,-2)) - parseInt(b.slice(0,-2)))

    if (distance <= num){
      return `within range by ${num - distance}`
    } else {
      return `${distance - num} blocks out of range`
    };
  };
};


const produceTipCalculator = function(rate){
  return function(fare){
    return fare * rate
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name;
    }
  }
}
