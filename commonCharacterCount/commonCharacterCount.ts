function commonCharacterCount(s1: string, s2: string): number {
  const obj1 = {};
  const obj2 = {};
  let commonCharacters = 0;

  for (let char of s1) {
    if (!obj1[char]) {
      obj1[char] = 1;
    } else {
      obj1[char]++;
    }
  }

  for (let char of s2) {
    if (!obj2[char]) {
      obj2[char] = 1;
    } else {
      obj2[char]++;
    }
  }

  console.log(obj2);
  console.log(obj1);

  for (let char in obj1) {
    if (obj2.hasOwnProperty(char)) {
      if (obj2[char] < obj1[char]) {
        commonCharacters += obj2[char];
      } else {
        commonCharacters += obj1[char];
      }
    }
  }
  return commonCharacters;
  //   console.log(commonCharacters);
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
