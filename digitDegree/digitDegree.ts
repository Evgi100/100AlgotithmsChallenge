function digitDegree(n: number): number {
  var count = 0;
  // var splitNum = n.toString().split('');
  var sum = n;
  var sum2 = n;

  // if (n <= 9) {
  //   return count;
  // }

  while (n > 9) {
    count++;
    sum2 = sum;
    sum = 0;
    while (sum2 > 0) {
      sum += sum2 % 10;
      sum2 = Math.floor(sum2 / 10);
    }
    console.log(sum, sum2);
    if (sum <= 9) {
      break;
    }
    n = sum;
  }

  // for (let i = 0; i < splitNum.length; i++) {
  //   if (sum > 9) {
  //     sum = parseInt(splitNum[i]) + parseInt(splitNum[i + 1]);
  //     console.log(sum);
  //     count++;
  //   }
  // }

  return count;
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(9486));
