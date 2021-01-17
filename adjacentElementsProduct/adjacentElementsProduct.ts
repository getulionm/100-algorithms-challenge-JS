export function adjacentElementsProduct(inputArray: number[]): number {
  let largest = 0;

  for (let i = 0; i <= inputArray.length; i++) {
    let current = inputArray[i] * inputArray[i + 1];
    largest = current > largest ? current : largest;
  }
  return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
