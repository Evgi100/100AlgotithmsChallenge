function pagesNumberingWithInk(
  current: number,
  numberOfDigits: number
): number {
  var nextNum =current;
  var digitsCount = numberOfDigits - current.toString().split("").length;

  function print(nextNum) {
    let digitsDecrease = nextNum.toString().split("").length;
    digitsCount -= digitsDecrease;
  }

  while (digitsCount >= nextNum.toString().split("").length) {
    print(nextNum);
    nextNum++
  }

  return nextNum;
}

console.log(pagesNumberingWithInk(8, 4));
