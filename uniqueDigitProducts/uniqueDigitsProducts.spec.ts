import { uniqueDigitProducts } from './uniqueDigitsProducts';

describe(uniqueDigitProducts.name, () => {
  it('Test 1', () => {
    // arrange
    const data = [2, 8, 121, 42, 222, 23];

    // act
    const response = uniqueDigitProducts(data);

    // assert
    expect(response).toBe(3);
  });
});
