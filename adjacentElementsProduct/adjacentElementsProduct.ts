function adjacentElementsProduct(inputArray) {
  let maxProduct = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let product = inputArray[i] * inputArray[i + 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}

console.log(adjacentElementsProduct([3, 20, -2, -5, 7, 10]));
