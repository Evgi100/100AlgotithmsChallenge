function findEmailDomain(address: string): string {
  var startPoint = address.lastIndexOf('@');
  var domain = '';
  for (let i = startPoint + 1; i < address.length; i++) {
    console.log(address[i]);
    domain += address[i];
  }
  return domain;
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
