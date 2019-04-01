const produceDrivingRange = (block) => {
  return function (startingBlock, endingBlock) {
    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let dist = Math.abs(start - end);
    let blockDiff = block - dist;

    if (blockDiff > 0) {
      return `within range by ${blockDiff}`;
    } else {
      return `${Math.abs(blockDiff)} blocks out of range`;
    }
  }
}

const produceTipCalculator = (amount) => (rideFare) => rideFare * amount;

function createDriver(){
    let driverId = 0;
    return class {
        constructor(name){
            this.name= name;
            this.id = ++driverId;
        }
    }
}
