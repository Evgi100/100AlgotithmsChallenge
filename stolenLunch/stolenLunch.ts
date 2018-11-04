function stolenLunch(note: string): string {
  {
    var cipherObj = {
      0: "a",
      1: "b",
      2: "c",
      3: "d",
      4: "e",
      5: "f",
      6: "g",
      7: "h",
      8: "i",
      9: "j"
    };


    var newNote = "";
    for (let letter of note.split("")) {
      if (cipherObj.hasOwnProperty(letter)) {
          let replace=cipherObj[letter];
          newNote += replace;
      }else{
          newNote +=letter;
      }
    }

    return newNote
  }
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));

// Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.

// The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.

// **Example**
// For note = "you'll n4v4r 6u4ss 8t: cdja", the output should be
// stolenLunch(note) = "you'll never guess it: 2390".

// **Hints**
// -   split()
// -   hasOwnProperty()

// alphabet = 'abcdefghijklmnopqrstuvwxyz'
