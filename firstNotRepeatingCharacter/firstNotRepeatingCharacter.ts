function firstNotRepeatingCharacter(s: string): string {
  const chars = s.split('');
  var firstNoRepeatingChar = '/';
  var charsObj = {};

  for (let i = 0; i < chars.length; i++) {
    if (!charsObj[chars[i]]) {
      charsObj[chars[i]] = 1;
    } else if (charsObj.hasOwnProperty(chars[i])) {
      charsObj[chars[i]]++;
    }
  }

  for (let char in charsObj) {
    if (charsObj[char] === 1) {
      return (firstNoRepeatingChar = char);
    }
  }
  return firstNoRepeatingChar;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
