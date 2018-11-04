function alternatingSums(a: number[]): number[] {
  const firstTeam = [];
  const secondTeam = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 !== 0) {
      secondTeam.push(a[i]);
    } else {
      firstTeam.push(a[i]);
    }
  }

  const reducer = (acc, next) => acc + next;

  const firstTeamWeight = firstTeam.reduce(reducer);
  const secondTeamWeight = secondTeam.reduce(reducer);

  return [firstTeamWeight, secondTeamWeight];
  //   console.log(firstTeamWeight);
  //   console.log(secondTeamWeight);
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
