function incorrectPasscodeAttempts(
  passcode: string,
  attempts: string[]
): boolean {
  var count = 0;
  for (let attempt of attempts) {
    if (attempt === passcode) {
      count = 0;
    } else {
      count++;
    }

    if (count === 10) {
      return true;
    }
  }

  return false;
}

console.log(
  incorrectPasscodeAttempts('1111', [
    '1111',
    '4444',
    '9999',
    '3333',
    '8888',
    '2222',
    '7777',
    '0000',
    '1111',
    '7285',
    '5555',
    '1111'
  ])
);
