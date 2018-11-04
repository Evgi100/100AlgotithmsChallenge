function chunkyMonkey(arr: any[], size: number): any[][] {
  console.log(arr.slice(0, size));
  const newArr = [];
  let chunk = [];
  for (let i = 0; i < arr.length; i + size) {
    chunk = arr.slice(i, size);
  }
  newArr.push(chunk);
  return newArr;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
