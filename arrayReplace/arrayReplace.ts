function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  let newArr = [];
  for (let num of inputArray) {
    console.log(num);
    if (num === elemToReplace) {
      num = substitutionElem;
      newArr.push(num);
    } else {
      newArr.push(num);
    }
  }

  return newArr;

  //   newArr = inputArray.map(num => {
  //     if (num === elemToReplace) {
  //       num = substitutionElem;
  //       newArr.push
  //     }
  //   });
}

console.log(arrayReplace([1, 2, 1], 1, 3));
