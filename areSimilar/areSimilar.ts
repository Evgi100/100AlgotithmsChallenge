function areSimilar(a: number[], b: number[]): boolean {
  let counter = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      counter++;
    }
    if (counter > 2) {
      return false;
    }
  }
  if (counter === 1) {
    return false;
  }
  console.log('here counter 0 or 2');
  return true;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 2, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(2+5)
