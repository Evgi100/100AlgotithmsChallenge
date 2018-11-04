function sumAllPrimes(num: number): number {
  var sum = 0;

  for (let i = 2; i < num; i++) {
      console.log(i);
    for (let j = 2; j <= i; j++) {
        console.log(j);
      if (i === j) {
        sum += i;
      }

      if (i % j === 0) {
        break;
      }
    }
  }

  return sum;
}

console.log(sumAllPrimes(6));
// console.log(sumAllPrimes(977));

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only div
