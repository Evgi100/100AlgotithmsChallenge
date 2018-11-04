function validTime(time: string): boolean {
     var splitTime=time.split('');
     const hours=(splitTime[0])+(splitTime[1]);
     const min=splitTime[3]+splitTime[4];
     if(parseInt(hours)>=0 && parseInt(hours)<=24 && parseInt(min)>=0 && parseInt(min)<=60 ){
         return true;
     }else {
         return false
     }
} 

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));