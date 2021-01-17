export function alternatingSums(a: number[]): number[] {
  let [evenSum, oddSum] = [0, 0];

  a.forEach((el, i) => {
    if (i % 2 === 0) evenSum += el;
    else oddSum += el;
  });

  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
