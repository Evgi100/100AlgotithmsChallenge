function firstDuplicate(a: number[]): number {
  var distance = -1;
  var minDistance = null;
  var firstDup;
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      if (a[i] === a[j + 1]) {
        distance = Math.abs(i - (j + 1));
        if (minDistance > distance || !minDistance) {
          minDistance = distance;
          firstDup = a[i];
        }
      }
    }
  }

  return firstDup || -1;
}

console.log(firstDuplicate([4, 6, 6, 5, 1, 4]));
// console.log(firstDuplicate([2, 4, 3, 5, 1]));

// function firstDuplicate(a: number[]): number {
//   const firstDup = {};

//   for (let num of a) {
//     if (firstDup.hasOwnProperty(num)) {
//       return num;
//     }

//     firstDup[num] = num;
//   }

//   return -1;
// }

// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
// console.log(firstDuplicate([2, 4, 3, 5, 1]));
