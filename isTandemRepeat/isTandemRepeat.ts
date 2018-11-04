function isTandemRepeat(inputString: string): boolean {
  if (inputString.length % 2 !== 0) {
    return false;
  }

  var firstHalf = inputString.slice(0, inputString.length / 2);
  var secondHalf = inputString.slice(
    inputString.length / 2,
    inputString.length
  );

  if (firstHalf === secondHalf) {
    return true;
  }
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));
