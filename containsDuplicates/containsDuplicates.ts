function containsDuplicates(a: number[]): boolean {
  let numObj = {};

  for (let i = 0; i < a.length; i++) {
    if (!numObj[a[i]]) {
      numObj[a[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1, 2, 2]));
