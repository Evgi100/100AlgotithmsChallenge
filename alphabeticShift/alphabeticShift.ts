// function alphabeticShift(inputString: string): string {
//   const inputArr = inputString.split('');

//   for (let i = 0; i < inputArr.length; i++) {
//     let index = 0;

//     if (inputArr[i] !== 'z') {
//       index = inputArr[i].charCodeAt(0) + 1;
//       console.log(index);
//       inputArr[i] = String.fromCharCode(index);
//     } else {
//       inputArr[i] = String.fromCharCode(97);
//     }
//   }
//   return inputArr.join('');
// }

// console.log(alphabeticShift('crazy'));

function alphabeticShift(inputString: string): string {
  const inputArr = inputString.split('');

  const newArr = [];

  inputArr.forEach(input => {
    let index = 0;
    if (input !== 'z') {
      index = input.charCodeAt(0) + 1;
      input = String.fromCharCode(index);
      newArr.push(input);
    } else {
      input = String.fromCharCode(97);
      newArr.push(input);
    }
  });

  return newArr.join('');
}

console.log(alphabeticShift('crazy'));
