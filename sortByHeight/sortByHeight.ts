function sortByHeight(a: number[]): number[] {
    var filteredArea=a.filter(num=>num!==-1).sort();
    console.log(filteredArea);
     var arrayObj={};
     for(let i=0;i<a.length;i++){
         arrayObj[i]=a[i]
     }
     var resultArray=[];

     var index=0;
     var filterIndex=0;
     for(let num in arrayObj){
         if(arrayObj[num]===-1){
            resultArray[num]=-1;
            index++
         }else{
             resultArray[index]=filteredArea[filterIndex]
             filterIndex++
             index++
         }
     }

     return resultArray

     
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// array.splice(index, howmany, item1, ....., itemX)
