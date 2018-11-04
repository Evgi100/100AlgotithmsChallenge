function firstDigit(inputString: string): string {
  const input = inputString.split('');
  var digitsArr = [];
  for (let i = 0; i < 10; i++) {
    digitsArr.push(i);
  }

  var digits = digitsArr.join(',');
  console.log(digits);
  console.log(input);
  for (let item of input) {
    if (digits.includes(item)) {
      return item;
    }
  }

  return null;
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
