function crossingSum(matrix: number[][], a: number, b: number): number {
  let sumRow = 0;
  let sumColumn = 0;
  let sum = 0;
  for (let num of matrix[a]) {
    sumRow += num;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i !== a) {
      sumColumn += matrix[i][matrix[i][b]];
    }
  }

  sum = sumRow + sumColumn;
  return sum;
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));
