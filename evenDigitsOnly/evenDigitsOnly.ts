function evenDigitsOnly(n: number): boolean {
  const numberArray = n.toString().split('');
  return numberArray.every(num => parseInt(num) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
