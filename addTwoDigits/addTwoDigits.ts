function addTwoDigits(n: any): number {
  const reducer = (acc, currentVal) => acc + currentVal;
  const a = n.toString().split('');
 const  numArr= a.map(num => parseInt(num);
 return numArr.reduce(reducer));
}

console.log(addTwoDigits(31));


