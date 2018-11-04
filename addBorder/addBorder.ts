function addBorder(picture: string[]): string[] {
  const solution = [];
  const size = picture[0].length + 2;
  const stars = '*'.repeat(size);
  console.log(stars);
  picture.forEach(pic => {
    solution.push(`*${pic}*`); // stars.splice(0);
  });

  solution.push(stars);
  solution.unshift(stars);

  return solution;
}

console.log(addBorder(['abc', 'ded']));
