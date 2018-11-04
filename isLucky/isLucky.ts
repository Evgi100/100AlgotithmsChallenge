function isLucky(n: number): boolean {
  var stringifyNumber = n.toString();
  var firstHalf = stringifyNumber.substring(0, stringifyNumber.length / 2);
  var secondHalf = stringifyNumber.substring(
    stringifyNumber.length / 2,
    stringifyNumber.length
  );
  const reducer = (accumulator, currentValue) =>
    parseInt(accumulator) + parseInt(currentValue);

  var firstSum = firstHalf.split('').reduce(reducer);
  var secondSum = secondHalf.split('').reduce(reducer);

  if (firstSum === secondSum) {
    return true;
  } else {
    return false;
  }

  console.log(firstSum);
}

console.log(isLucky(1230));
console.log(isLucky(239017));
