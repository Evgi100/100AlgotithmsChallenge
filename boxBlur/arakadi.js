function boxBlur2(image) {
  var result = [];
  var rowRes = [];
  var sum = 0;
  var avg;
  for (var i = 1; i <= image.length - 2; i++) {
    for (var j = 1; j < image[0].length - 1; j++) {
      sum += image[i - 1][j - 1];
      sum += image[i - 1][j];
      sum += image[i - 1][j + 1];
      sum += image[i][j - 1];
      sum += image[i][j];
      sum += image[i][j + 1];
      sum += image[i + 1][j - 1];
      sum += image[i + 1][j];
      sum += image[i + 1][j + 1];
      console.log(sum);
      avg = Math.floor(sum / 9);
      rowRes.push(avg);
    }
    result.push(rowRes);
    rowRes = [];
    sum = 0;
  }
  return result;
}
console.log(boxBlur2([[1, 1, 1], [1, 7, 1], [4, 7, 9], [1, 1, 1], [2, 8, 3]]));

function boxBlur(image) {
  const res = [];
  //   let sum = 0;
  //   let count = 0;
  //   let newArr = [];
  //   let answer = [];

  // console.log(image[1][1]);

  for (let y = 0; y < image.length - 2; y++) {
    const line = [];
    let count = 0;
    for (let x = 0; x < image[y].length - 2; x++) {
      // console.log(image[y]);
      let sum = 0;
      let count = 0;
      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          sum += image[a][b];
          count++;
        }
      }
      line.push(Math.floor(sum / count));
    }
    res.push(line);
  }

  return res;
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [4, 7, 9], [1, 1, 1], [2, 7, 3]]));
