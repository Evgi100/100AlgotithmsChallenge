function boxBlur(image: number[][]): number[][] {
  let sum = 0;
  let count = 0;
  let newArr = [];
  let answer = [];

  // console.log(image[1][1]);

  for (let y = 0; y < image.length - 2; y++) {
    for (let x = 0; x < image[y].length - 2; x++) {
      // console.log(image[y]);
      for (let a = 0; a < 3; a++) {
        for (let b = 0; b < 3; b++) {
          sum += image[a][b];
          count++;
        }
      }
      newArr.push(Math.floor(sum / count));
    }
    answer.push(newArr);
  }

  return answer;
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1], [2, 2, 3]]));

// In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = ~rounded down~ = 1.
