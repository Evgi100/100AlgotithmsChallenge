function depositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let count = 0;

  while (deposit < threshold) {
    deposit = +deposit * (1 + rate / 100);
    count++;
  }

  return Math.floor(count);
}

console.log(depositProfit(100, 20, 170));
