function circleOfNumbers(n: number, firstNumber: number): number {
  const numArr = [];
  const halfway = n / 2;
  for (let i = 0; i < n; i++) {
    numArr.push(i);
  }
  if (firstNumber < halfway) {
    return numArr[firstNumber + halfway];
  }

  return numArr[firstNumber - halfway];
}

console.log(circleOfNumbers(10, 2));
