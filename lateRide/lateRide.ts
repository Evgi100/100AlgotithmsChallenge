function lateRide(n: number): number {
  var minutes = "";
  if (n % 60 === 0) {
    minutes = "" + n / 60;
  } else {
    minutes = ("" + Math.floor(n / 60)).concat("" + (n % 60));
  }

  if (minutes.length > 1) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let minutesArr = minutes.split("").map(num => parseInt(num));
    minutes = minutesArr.reduce(reducer);
    return parseInt(minutes);
  } else {
    return parseInt(minutes);
  }
}

console.log(lateRide(240));
console.log(lateRide(808));
