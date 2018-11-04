function electionsWinners(votes: number[], k: number): number {
  const sortedArray = votes.sort();
  const maxNum = Math.max(...sortedArray);
  var count = 0;

  for (let num of sortedArray) {
    if (num + k > maxNum) {
      count++;
    }
  }

  return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
