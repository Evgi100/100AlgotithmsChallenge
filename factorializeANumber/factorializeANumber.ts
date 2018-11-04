function factorializeANumber(num: number): number {
  var factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
