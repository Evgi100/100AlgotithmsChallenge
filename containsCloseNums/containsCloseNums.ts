function containsCloseNums(nums: number[], k: number): boolean {
  let numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!numsObj[nums[i]]) {
      numsObj[i] = {
        indexOfFirst: i,
        indexOfLast: i
      };
    } else {
      numsObj[nums[i]].indexOfLast = i;
    }

    // if(numsObj[nums[i]].indexOfFirst===numsObj[nums[i]].indexOfLast){
    //   return true
    // }else {
    //   return false
    // }
  }
  console.log(numsObj);

  for (let obj in numsObj) {
    console.log(numsObj[obj]);
    if (Math.abs(numsObj[obj].indexOfFirst - numsObj[obj].indexOfLast) === k) {
      return true;
    }
  }

  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
