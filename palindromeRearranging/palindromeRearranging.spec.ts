import { palindromeRearranging } from './palindromeRearranging';

describe(palindromeRearranging.name, () => {
  it('Test 1', () => {
    // arrange
    const inputString = 'aabb';

    // act
    const response = palindromeRearranging(inputString);

    // assert
    expect(response).toBe(true);
  });
});
