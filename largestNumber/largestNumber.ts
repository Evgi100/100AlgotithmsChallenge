function largestNumber(n: number): number {
  //   var largestArr = [];

  //   var largestNum = 9;

  //   for (let i = 0; i < n; i++) {
  //     largestArr.push(largestNum);
  //   }

  //   return parseInt(largestArr.join(""));

  let largestNum = "";

  return parseInt((largestNum = "9".repeat(n)));
}

console.log(largestNumber(3));
