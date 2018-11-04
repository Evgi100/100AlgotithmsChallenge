function squareDigitsSequence(a0: number): number {
   var sequenceArr=[a0];
   var count=1;
    // sumDigitsSquare(a0);


    while(true){
        count++
        a0=sumDigitsSquare(a0);

        if(sequenceArr.includes(a0)){
            return count;
        }

        sequenceArr.push(a0);

    }
    

   function sumDigitsSquare(num){
   let nextNum=parseInt(num.toString().split('').reduce((a,b)=>Math.pow(a,2)+Math.pow(b,2)));
   return nextNum;
}


}


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));