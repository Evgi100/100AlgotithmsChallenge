function houseOfCats(legs: number): number[] {
  const numLegs = [];
  var catsLegs = Math.floor(legs / 4);
  if (catsLegs > 0) {
    numLegs.push(catsLegs);
  }
  var humanLegs = Math.floor(legs / 2);
  if (humanLegs > 0) {
    numLegs.push(humanLegs);
  }

  return numLegs;
}

console.log(houseOfCats(9));
console.log(houseOfCats(4));
