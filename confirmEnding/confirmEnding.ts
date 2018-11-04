function confirmEnding(str: string, target: string) {
  //   console.log(str.substr(str.length - target.length, target.length));

  if (str.substr(str.length - target.length, target.length) === target) {
    return 'true';
  } else {
    return false;
  }
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Opensesame', 'pen'));
