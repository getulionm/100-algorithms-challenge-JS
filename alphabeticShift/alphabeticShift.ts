export function alphabeticShift(inputString: string): string {
  const alphabet: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let inputSplit = inputString.split('');

  let shifted = inputSplit.map((each) => {
    let newIndex = alphabet.indexOf(each);
    return (each = alphabet[newIndex + 1] || alphabet[0]);
  });

  return shifted.join('');
}

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('abcdefghijklmnopqrstuvwxyz'));
