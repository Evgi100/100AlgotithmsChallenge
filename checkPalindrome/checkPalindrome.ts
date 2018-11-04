function checkPalindrome(inputString: string): boolean {
  const reversedString = inputString
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
  return reversedString === inputString ? true : false;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
