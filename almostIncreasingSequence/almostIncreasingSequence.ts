function almostIncreasingSequence(sequence: number[]): boolean {
  let counterE = 0;
  let prev = sequence[0];
  for (let i = 1; i < sequence.length; i++) {
    if(sequence[i] <= prev) {
      counterE++;
    }
    if (counterE === 2) {
      return false;
    }
    prev = sequence[i];
  }
  return true;
}

console.log(almostIncreasingSequence([1, 4, 3, 1]));
console.log(almostIncreasingSequence([4, 3, 5, 7]));
