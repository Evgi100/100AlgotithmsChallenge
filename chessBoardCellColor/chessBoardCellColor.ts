function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };

  let color1 = '';
  let color2 = '';

  if (board[cell1[0]] % 2 !== 0 && parseInt(cell1[1]) % 2 !== 0) {
    color1 = 'black';
  } else if (board[cell1[0]] % 2 !== 0 && parseInt(cell1[1]) % 2 === 0) {
    color1 = 'white';
  } else if (board[cell1[0]] % 2 === 0 && parseInt(cell1[1]) % 2 !== 0) {
    color1 = 'white';
  } else if (board[cell1[0]] % 2 === 0 && parseInt(cell1[1]) % 2 === 0) {
    color1 = 'black';
  }

  if (board[cell2[0]] % 2 !== 0 && parseInt(cell2[1]) % 2 !== 0) {
    color2 = 'black';
  } else if (board[cell2[0]] % 2 !== 0 && parseInt(cell2[1]) % 2 === 0) {
    color2 = 'white';
  } else if (board[cell2[0]] % 2 === 0 && parseInt(cell2[1]) % 2 !== 0) {
    color2 = 'white';
  } else if (board[cell2[0]] % 2 === 0 && parseInt(cell2[1]) % 2 === 0) {
    color2 = 'black';
  }

  console.log(parseInt(cell2[1]));
  console.log(board[cell1[0]]);

  console.log(color1);
  console.log(color2);

  return color1 === color2 ? true : false;
}

console.log(chessBoardCellColor('a1', 'c3'));
console.log(chessBoardCellColor('a1', 'h3'));
