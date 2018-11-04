function candies(n: number, m: number): number {
  const answer = Math.floor(m - (m % n));
  console.log(m % n);
  return answer;
}

console.log(candies(2, 5));

function dylan(n, m) {
  const candy = Math.floor(m / 3);
  return candy * n;
}

console.log(dylan(2, 5));
