function launchSequenceChecker(
  systemNames: string[],
  stepNumbers: number[]
): boolean {
  var systemSequenceObj = {};
  for (let i = 0; i < systemNames.length; i++) {
    if (systemSequenceObj.hasOwnProperty(systemNames[i])) {
        console.log(systemSequenceObj[systemNames[i]]);
      if (systemSequenceObj[systemNames[i]] >= stepNumbers[i]) {
        return false;
      }
      systemSequenceObj[systemNames[i]] = stepNumbers[i];
    } else {
      systemSequenceObj[systemNames[i]] = stepNumbers[i];
    }
  }
  return true;

  console.log(systemSequenceObj);
}

console.log(
  launchSequenceChecker(
    ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
    [1, 10, 11, 2, 12, 111]
  )
);
console.log(
  launchSequenceChecker(
    ["stage_1", "stage_1", "stage_2", "dragon"],
    [2, 1, 12, 111]
  )
);
