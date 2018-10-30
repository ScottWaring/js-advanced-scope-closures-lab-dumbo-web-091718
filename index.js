function produceDrivingRange(blockRange) {
  return function(start, finish){
    let begin = parseInt(start);
    let end = parseInt(finish);
    let travel = Math.abs(end-begin)
    let overUnder = blockRange-travel

    if (overUnder > 0) {
      return `within range by ${overUnder}`
    } else {
      return `${overUnder*-1} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(fare) {
    return fare*percent;
  }
}

function createDriver() {
  let driverId = 0
  return class{
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
