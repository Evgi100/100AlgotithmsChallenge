function reflectString(inputString: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reverseAlphabet = alphabet.split("").reverse();

  const dictionaryObj = {};

  for (let i = 0; i < alphabet.length; i++) {
    dictionaryObj[alphabet[i]] = i;
  }

  var reflection = "";
  for (let char of inputString) {
    let charIndex = dictionaryObj[char];
    let reflectionChar = reverseAlphabet[charIndex];
    reflection += reflectionChar;
  }

  return reflection;
}

console.log(reflectString("name"));

// Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

// Define a string reflection as the result of applying the alphabet reflection to each of its characters.

// Reflect the given string.

// **Example**

// For inputString = "name", the output should be
// reflectString(inputString) = "mznv".

// **Hints**
// -   split()
