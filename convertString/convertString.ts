function convertString(s: string, t: string): boolean {
  const firstString = s.split('');
  //   const secondString = t.split('');
  var word = '';
  var tIndex = 0;

  for (let i = 0; i < firstString.length; i++) {
    console.log(t[i]);

    if (firstString[i] === t[tIndex]) {
      word = word.concat(firstString[i]);
      tIndex++;
    }
  }

  //   console.log(word);
  //   console.log(t);
  if (word === t) {
    return true;
  } else {
    return false;
  }
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
