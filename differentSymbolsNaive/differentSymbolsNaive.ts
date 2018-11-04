// function differentSymbolsNaive(s: string): number {
//   let withoutRepeatString = [];
//   let count=0;

//   for(let i=0;i<s.split('').length;i++){
//       if(!withoutRepeatString.includes(s[i])){
//           withoutRepeatString.push(s[i])
//           count++
//       }
//   }

// return count;  
// }

function differentSymbolsNaive(s){
    const obj={};
    let count=0;

    for ( let char of s.split('')){
        if(!obj[char]){
            obj[char]=1
            count +=obj[char]
        }
    }
    return count
}


console.log(differentSymbolsNaive('cabca'));
