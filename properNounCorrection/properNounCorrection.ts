function properNounCorrection(noun: string): string {
  var properNoun = "";
   var reversed='';
  for (let i = 0; i < noun.length; i++) {
    var firstChar = noun[0].toUpperCase();
    let otherChar = noun[i].toLowerCase();
    reversed=noun[i]+reversed;
    console.log(reversed);
    properNoun += otherChar;
  }
  console.log(reversed);
  properNoun = firstChar.concat(properNoun);

  return properNoun;
}

console.log(properNounCorrection("pARiS"));
// console.log(properNounCorrection("John"));

// -   For noun = "pARiS", the output should be
// properNounCorrection(noun) = "Paris";

// -   For noun = "John", the output should be
// properNounCorrection(noun) = "John".

// **Hints**
// -   toUpperCase()
// -   toLowerCase()
// -   concat()
// -   slice()
