function characterParity(symbol: string): string {


  let num = parseInt(symbol);
  console.log(num);

  if(isNaN(num)){
      return 'not a digit'
  }

  if (num % 2 === 0) {
    return 'even';
  } else (num % 2 !== 0) {
    return 'odd';
  }
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
