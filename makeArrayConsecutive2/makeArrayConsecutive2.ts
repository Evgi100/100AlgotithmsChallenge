function makeArrayConsecutive2(statues: number[]): number {
  var count = 0;

  var sortedStatues = statues.sort();

  console.log(sortedStatues);

  for (let i = 0; i < sortedStatues.length-1; i++) {
    if (sortedStatues[i + 1] - sortedStatues[i] !== 1) {
      count += sortedStatues[i + 1] - sortedStatues[i] - 1;
    }
  }

  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
