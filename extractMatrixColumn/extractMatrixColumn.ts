function extractMatrixColumn(matrix: number[][], column: number): number[] {
    var kColumn=[];
    for(let row of matrix){
        kColumn.push(row[column])
    }

    return kColumn;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));