function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let max = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    let difference = Math.abs(inputArray[i + 1] - inputArray[i]);
    if (difference > max) {
      max = difference;
    }
  }

  return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
