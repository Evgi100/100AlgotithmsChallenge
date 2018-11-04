function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
    const colDIff=nCols-(col-1);
    const rowDff=nRows-row;

    console.log(colDIff);
    
    return colDIff*rowDff;

    
}

console.log(seatsInTheater(16, 11, 5, 3));