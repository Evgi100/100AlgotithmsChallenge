// function flattenArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {

//         }
//     }
// }


var t = JSON.stringify([5,[[6,4],[7,8]]]);
t = t.replace(/\[/g, "").replace(/\]/g, "");
console.log(t);
let joined = t.split(",");
console.log(joined)
t
// var res = str.replace(/blue/g, "red");

console.log(t);
console.log(JSON.stringify([5,4]));

console.log(""+56);

// console.log(flattenArray([[['a']], [['b']]]));
// console.log(flattenArray([1, [2], [3, [[4]]]]));

// -   steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

// -   steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]