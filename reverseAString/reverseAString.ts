function reverseAString(str: string): string {
  // var reversedString=str.split('').reverse();
  // return reversedString.join('');

  var reversedString = "";
  for (let char of str) {
    reversedString = char + reversedString;
  }

  return reversedString;
}

console.log(reverseAString("hello"));
console.log(reverseAString("Howdy"));
