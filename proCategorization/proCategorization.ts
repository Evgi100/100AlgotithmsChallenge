function proCategorization(
  pros: string[],
  preferences: string[][]
): string[][][] {
  var listProsPerCategory = [];
  var prosObj = {};
  var preferencesArr = [];

//   for (let arr of preferences) {
//     for (let item of arr) {
//       preferencesArr.push(item);
//     }
//   }

//   var uniqueArray = preferencesArr.filter(function(item, pos) {
//     return preferencesArr.indexOf(item) === pos;
//   });


//   for(let pref of uniqueArray){
//       listProsPerCategory.push(pref);
//   }

  
  for (let i = 0; i < pros.length; i++) {
    for(let j=0;j<preferences.length;j++){
        if(prosObj.hasOwnProperty(preferences[i][j])){
            prosObj[preferences[i][j]].push(pros[i])
        }else{
            prosObj[preferences[i][j]]=[pros[i]]
        }
    }
  }
  console.log(prosObj);

   return prosObj;

}
console.log(
  proCategorization(
    ["Jack", "Leon", "Maria"],
    [
      ["Computer repair", "Handyman", "House cleaning"],
      ["Computer lessons", "Computer repair", "Data recovery service"],
      ["Computer lessons", "House cleaning"]
    ]
  )
);

// For pros = ["Jack", "Leon", "Maria"] and

// preferences = [["Computer repair", "Handyman", "House cleaning"],
//                ["Computer lessons", "Computer repair", "Data recovery service"],
//                ["Computer lessons", "House cleaning"]]

//                the output should be

// proCategorization(pros, preferences) = [[["Computer lessons"], ["Leon", "Maria"]],
//                                         [["Computer repair"], ["Jack", "Leon"]],
//                                         [["Data recovery service"], ["Leon"]],
//                                         [["Handyman"], ["Jack"]],
//                                         [["House cleaning"], ["Jack", "Maria"]]]

// **Hints**
// -   hasOwnProperty()
// -   push()
// -   toLowerCase()
// -   sort()

// var objects = new Array();

// for (var i = 0; i < howmany; i++)
// {
//     objects[i] = new Object();

// }
