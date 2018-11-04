function integerToStringOfFixedWidth(number: number, width: number): string {
  var length;
  var zerosToAdd=[];
  if (number.toString().length > width) {
    length = number.toString().substring(number.toString().length-width, number.toString().length);
    return length;
  } else if (number.toString().length === width) {
    length = number.toString().substring(0, width);
    return length;
  }
   else if (number.toString().length < width) {
    for(let i=0;i<width-number.toString().length;i++){
       zerosToAdd.push(0)
    }

    length=zerosToAdd.concat(number).join('');

    return length;
  }
}

;

console.log(integerToStringOfFixedWidth(1234567, 3));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
