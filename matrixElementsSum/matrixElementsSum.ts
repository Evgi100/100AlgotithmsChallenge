function matrixElementsSum(matrix: any[][]): number {
  var priceTotal = 0;
  const hauntedIndex = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        hauntedIndex.push(j);
        console.log(hauntedIndex);
      } else if (!hauntedIndex.includes(j)) {
        priceTotal += matrix[i][j];
      }
    }
  }
  return priceTotal;
}

console.log(matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]));
