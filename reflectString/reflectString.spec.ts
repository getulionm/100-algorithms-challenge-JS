import { reflectString } from './reflectString';

describe(reflectString.name, () => {
  it('Test 1', () => {
    // arrange
    const inputString = 'name';

    // act
    const response = reflectString(inputString);

    // assert
    expect(response).toBe('mznv');
  });
});
