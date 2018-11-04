function arrayConversion(inputArray: number[]): number {
  const newArr = [];
  for (let i = 0; i < inputArray.length - 1; i += 2) {
    let sum = inputArray[i] + inputArray[i + 1];
    newArr.push(sum);
    console.log(newArr);
  }

  const newArr2 = [];
  for (let i = 0; i < newArr.length - 1; i += 2) {
    let sum = newArr[i] * newArr[i + 1];
    newArr2.push(sum);
    console.log(newArr2);
  }
  const reducer = (acc, next) => acc + next;
  return newArr2.reduce(reducer);
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6]));
