function longestDigitsPrefix(inputString: string): string {
  var splitInput = inputString.split("");
  var digitsPrefix = [];
  var digitsArr = Array(9)
    .fill(0)
    .map((e, i) => i + 1);

  for (let item of splitInput) {
    if (digitsArr.includes(parseInt(item))) {
      digitsPrefix.push(item);
    } else {
        break;
    }
  }

  return digitsPrefix.join("");
}

console.log(longestDigitsPrefix("123aa1"));
