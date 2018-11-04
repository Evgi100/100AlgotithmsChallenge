function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  var daysToReachHeight;

  return (daysToReachHeight = Math.floor(
    desiredHeight / (upSpeed - downSpeed)
  ));
}

console.log(growingPlant(100, 10, 910));
console.log(growingPlant(100, 90, 910));
