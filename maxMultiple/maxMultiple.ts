function maxMultiple(divisor: number, bound: number): number  {

    var maxMultiplier=0;

for(let i=bound;i=>0;i--){
    if(i%divisor===0){
        maxMultiplier=i
        break;
    }
}

return maxMultiplier;
}

console.log(maxMultiple(3,10));