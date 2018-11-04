function houseNumbersSum(inputArray: number[]): number {
  var count = 0;

  for (let num of inputArray) {
    if (num === 0) {
      break;
    }

    count += num;
  }

  return count;
}

console.log(houseNumbersSum([5, 1, 3, 3, 0, 1, 5, 0, 2]));
