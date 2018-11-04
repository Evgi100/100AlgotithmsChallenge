function findClosestPair(numbers: number[], sum: number): number {
  var distance = -1;
  var min = null;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length - 1; j++) {
      let pairSum = numbers[i] + numbers[j + 1];
      if (pairSum === sum) {
        distance = Math.abs(i - (j + 1));
        if (distance < min || !min) {
          min = distance;
        }
      }
    }
  }

  return min || -1;
}

console.log(findClosestPair([1, 4, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
