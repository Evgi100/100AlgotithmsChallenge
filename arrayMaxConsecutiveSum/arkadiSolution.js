function blatt(array, k) {
  var sum = 0;
  var max = 0;

  for (let i = 0; i < k; i++) {
    max += array[i];
    console.log(max);
  }

  for (let j = 1; j <= array.length - k; j++) {
    for (i = 0; i < k; i++) {
      sum += array[j + i];
      console.log(sum);
    }
    if (sum > max) {
      max = sum;
    }
    sum = 0;
  }
  return max;
}

console.log(blatt([2, 10, 5, 8, 6, 6], 3));
