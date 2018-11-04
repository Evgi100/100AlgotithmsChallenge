function pigLatin(str: string): string {
  const vowels = "a, e, i, o, u";
  const constantRegex = "b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, x, z";
  var letters = str.split("");

  for (let char of vowels.split("")) {
    if (str[0] === char) {
      return (str += "way");
    }
  }

  for(let char of constantRegex.split('')){
      if(str.hasOwnProperty(char)){
          console.log(char);
      }
  }

}

console.log(pigLatin("glove"));
// console.log(pigLatin("eight"));

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// **Example**
// -   pigLatin("glove") should return "oveglay".
// -   pigLatin("eight") should return "eightway".

// **Hints**
// -   split()
// -   test()
// -   join()
// -   push()
