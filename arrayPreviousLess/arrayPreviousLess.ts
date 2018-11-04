function arrayPreviousLess(items: number[]): number[] {
  let newArr = [];

  for (let i = items.length - 1; i >= 0; i--) {
    console.log(items[i]);
    if (items[i] > items[i - 1]) {
      newArr.unshift(items[i - 1]);
    } else {
      newArr.unshift(-1);
    }
  }

  return newArr;
}

console.log(arrayPreviousLess([3, 8, 9, 10, 11]));
