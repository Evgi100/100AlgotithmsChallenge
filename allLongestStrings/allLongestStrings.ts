function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  const newArr = [];

  inputArray.forEach(input => {
    if (input.length > longestLength) {
      longestLength = input.length;
    }
  });

  inputArray.forEach(input => {
    if (input.length === longestLength) {
      newArr.push(input);
    }
  });

  return newArr;
}

console.log(allLongestStrings(['aba', 'aa', 'adam', 'vcdh', 'aba']));

// * For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
