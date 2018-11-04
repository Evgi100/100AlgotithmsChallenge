function centuryFromYear(year: number): number {
  let answer;
  console.log(Math.floor(year / 100 + 1));
  console.log(year % 100);
  if (year % 100 !== 0) {
    answer = Math.floor(year / 100 + 1);
    return answer;
  } else {
    answer = year / 100;
    return answer;
  }
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
