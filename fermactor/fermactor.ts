function fermactor(n: number): number[] {
  var numbersArray = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (Math.pow(i, 2) - Math.pow(j, 2) === n) {
        numbersArray.push(i, j);
        return numbersArray;
      }
    }
  }
}

console.log(fermactor(15));
