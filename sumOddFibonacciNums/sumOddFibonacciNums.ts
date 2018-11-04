function sumOddFibonacciNums(num: number): number {
    var fibArr=[1,1]
    var oddSum=2;
    for(let i=0;i<num-2;i++){
         let nextFibNum=fibArr[i]+fibArr[i+1]
         fibArr.push(nextFibNum)
         if(nextFibNum%2!==0 && nextFibNum<num){
             oddSum +=nextFibNum;
         }
    }
    console.log(fibArr);
    return oddSum
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));