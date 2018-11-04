function flattenArray(arr: any[]): any[] {
  var flattArr = [];

  flatten(arr);

  function flatten(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        flattArr.push(item);
      }
    }
  }

  return flattArr;
}

console.log(flattenArray([[['a']], [['b']]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
