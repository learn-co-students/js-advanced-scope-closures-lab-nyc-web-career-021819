
function produceTipCalculator(percent){
  return function(num){
    return percent * num
  }
}

function createDriver(){
  let DriverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++DriverId;
    }
  }
}
function produceDrivingRange(range){
  return function(starting, ending){
    let start = parseInt(starting)
    let end = parseInt(ending)
    let difference = Math.abs(end - start)
    let total = difference - range
    if (total > 0){
      return `${total} blocks out of range`
    } else {
      return `within range by ${Math.abs(total)}`
    }
  }
}
