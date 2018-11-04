function avoidObstacles(inputArray: number[]): number {
  let max = 0;
  let minObstacle = 0;
  let firstPoint = inputArray[0];
  inputArray.sort((a, b) => a - b);
  console.log(inputArray);
  max = inputArray[inputArray.length - 1];
  minObstacle = max - firstPoint;

  return minObstacle;
}

console.log(avoidObstacles([5, 3, 6, 9, 8]));
