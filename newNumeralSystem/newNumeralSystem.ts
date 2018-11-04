function newNumeralSystem(number: string): string[] {
  const numerals = [];
  let startChartCount = 65;
  let endCharCount = number.charCodeAt(0);

  let numericalVal = endCharCount - startChartCount;

  while (startChartCount <= endCharCount) {
    const numeral = `${String.fromCharCode(
      startChartCount
    )}+${String.fromCharCode(endCharCount)}`;
    console.log(numeral);
    numerals.push(numeral);
    startChartCount++;
    endCharCount--;
  }
  return numerals;
}

console.log(newNumeralSystem("G"));
