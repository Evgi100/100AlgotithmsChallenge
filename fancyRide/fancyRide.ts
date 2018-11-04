function fancyRide(l: number, fares: number[]): string {
  var budget = 40;
  var count = -1;
  for (let fare of fares) {
    let costOfDrive = fare * l;
    console.log(costOfDrive);
    if (budget > costOfDrive) {
      count++;
    }
  }
  switch (count) {
    case 0:
      return 'UberX';
      break;
    case 1:
      return 'UberXL';
      break;
    case 2:
      return 'UberPlus';
      break;
    case 3:
      return 'UberBlack';
      break;
    case 4:
      return 'UberSuv';
      break;
  }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));

// UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV"
