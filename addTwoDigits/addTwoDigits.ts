export function addTwoDigits(n: number): number {
  let chars = n.toString().split('');
  let numbers = chars.map((n) => parseInt(n));

  const reducer = (acc, cur) => acc + cur;

  return numbers.reduce(reducer);
}

// export function addTwoDigits(n: number): number {
//   const nums = n.toString().split('');

//   return parseInt(nums[0]) + parseInt(nums[1]);
// }

console.log(addTwoDigits(29));
console.log(addTwoDigits(44));
console.log(addTwoDigits(123));
console.log(addTwoDigits(90000000001));
