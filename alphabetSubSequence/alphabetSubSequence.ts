function alphabetSubsequence(s: string): boolean {
  const string = s.split('');
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i].charCodeAt(0) >= string[i + 1].charCodeAt(0)) {
      return false;
    }
  }

  return true;
}
console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
