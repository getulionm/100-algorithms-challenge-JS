export function allLongestStrings(inputArray: string[]): string[] {
  let lengths = inputArray.map((i: string) => i.length);

  const maxLength = Math.max(...lengths);

  return inputArray.filter((i: string) => (i.length === maxLength ? i : null));
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
