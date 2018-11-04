function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
  var result = [];

  var obj = {};

  for (let i = 0; i < arr2.length; i++) {
    obj[arr2[i]] = i;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!obj.hasOwnProperty(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  return result;

  //    return  result=arr1.filter(num=> ! arr2.includes(num));
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));

// **Example**
// -   seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]) should return [1]
// -   seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]) should return [1, 5, 1]

// **Hints**
// -   filter()
// -   includes()
