function missingLetters(str: string): string {
  const splitStr = str.split("");

  for (let i = 0; i < splitStr.length - 1; i++) {
    // console.log(splitStr[i].charCodeAt(0));
    if (splitStr[i + 1].charCodeAt(0) - splitStr[i].charCodeAt(0) !== 1) {
      return String.fromCharCode(splitStr[i].charCodeAt(0) + 1);
    }
  }

  return undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
