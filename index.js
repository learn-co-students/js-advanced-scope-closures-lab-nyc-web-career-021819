function produceDrivingRange(integer){
  return function(a,b) {
    if (Math.abs(parseInt(b,10) - parseInt(a,10)) <= integer) {
      return `within range by ${integer - Math.abs(parseInt(b,10) - parseInt(a,10))}`
    }
    else {
      return `${Math.abs(parseInt(b,10) - parseInt(a,10)) - integer} blocks out of range`
    };
  }
}


function produceTipCalculator(tip) {
  return function (fare) {
    return fare*tip
  }
}


function createDriver() {
 let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }


}
