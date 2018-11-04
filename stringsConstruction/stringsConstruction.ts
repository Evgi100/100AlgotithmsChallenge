function stringsConstruction(a: string, b: string): number {
 var stringObj={};
 var numOfAppearance=[];

 for(let i=0;i<b.length;i++){
     if(!stringObj[b[i]]){
         stringObj[b[i]]=1;
     }else{
         stringObj[b[i]]++
     }
 }

for(let letter of b){
    if(stringObj.hasOwnProperty(letter)){
        numOfAppearance.push(stringObj[letter])
    }
}

return Math.min(...numOfAppearance);

}

console.log(stringsConstruction('abc', 'abccbabca'));

// -   hasOwnProperty()
// -   push()
// -   Math.floor()
// -   Math.min()
// -   split()
