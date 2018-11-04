function isCaseInsensitivePalindrome(inputString: string): boolean {
  const reversedString = inputString
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
    // console.log(reversedString);
    // console.log(inputString.toLowerCase());
  if (inputString.toLowerCase() === reversedString) {
    return true;
  } else {
    return false;
  }
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
