function composeRanges(nums: number[]): string[] {
  var newArr = [];
  let currentRangeStart = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let currentRangeEnd;
    if (Math.abs(nums[i + 1] - nums[i]) !== 1 && i !== nums.length - 1) {
      currentRangeEnd = nums[i];
      let currentRange = `${currentRangeStart}->${currentRangeEnd}`;
      newArr.push(currentRange);
      currentRangeStart = nums[i + 1];
    }
    if (
      Math.abs(nums[i + 1] - nums[i]) !== 1 &&
      nums[i + 1] === nums[nums.length - 1]
    ) {
      currentRangeStart = nums[i + 1];
      let currentRange = `${currentRangeStart}`;
      newArr.push(currentRange);
    }
  }
  return newArr;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
