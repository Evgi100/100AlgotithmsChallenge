function sumOfTwo(a: number[], b: number[], v: number): boolean {
  for (let aNum of a) {
    for (let bNum of b) {
      let sum = aNum + bNum;
      if (sum === v) {
        return true;
      }
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
