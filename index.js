function produceDrivingRange(blockRange) {
  return function(blockOne, blockTwo) {
    const distance = blockRange - Math.abs(parseInt(blockOne.slice(0,-2)) - parseInt(blockTwo.slice(0,-2)))

    if(distance >= 0) {
      return `within range by ${distance}`
    } else {
      return `${Math.abs(distance)} blocks out of range`
    };
  };
};

function produceTipCalculator(rate) {
  return function(fare) {
    return fare * rate
  };
};

function createDriver() {
  let ItemId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++ItemId
    }
  }
};
