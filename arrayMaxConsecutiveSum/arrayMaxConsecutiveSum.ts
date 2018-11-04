function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let max = 0;
  if (k === 2) {
    k = 1;
  }
  for (let i = 0; i < inputArray.length; i += k) {
    let sum = inputArray[i] + inputArray[i + 1];
    console.log(sum);
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6, 6], 2));
