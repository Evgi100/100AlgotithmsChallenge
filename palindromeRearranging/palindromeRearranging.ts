// function palindromeRearranging(inputString: string): boolean {
//   const splitString = inputString.split("");
//   var stringObj = {};
//   let oddCount = 0;

//   for (let char of splitString) {
//       console.log(char);
//     if (stringObj.hasOwnProperty(char)) {
//       stringObj[char]++;
//     } else {
//       stringObj[char] = 1;
//     }
//   }

//   for (let val in stringObj) {
//     if (stringObj[val] % 2 !== 0) {
//         oddCount++
//     }
//   }

//   return oddCount>1?false:true;

// }

// console.log(palindromeRearranging("soros"));

function palindrome(str) {
  var reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }

  // if (reversed === str) {
  //   return true;
  // } else {
  //   return false;
  // }

  // return reversed === str ? true : false;


  return reversed;
}

console.log(palindrome("abba"));
console.log(palindrome("abcdefg"));
