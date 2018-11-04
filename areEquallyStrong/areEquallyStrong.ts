function areEquallyStrong(yourLeft: number,yourRight: number,friendsLeft: number,friendsRight: number): boolean {
  const yourStrongest=yourLeft >= yourRight? yourLeft : yourRight;
  const yourWeakest=yourLeft <= yourRight? yourRight : yourLeft;
//   const friendsWeakest=frindLeft <= yourRight? yourRight : yourLeft;
//   const friendsStrongest=yourLeft <= yourRight? yourRight : yourStrongest

/* repeat for friends hands */

console.log(areEquallyStrong(25, 0, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
