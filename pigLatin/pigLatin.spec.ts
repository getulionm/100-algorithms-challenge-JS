import { pigLatin } from './pigLatin';

describe(pigLatin.name, () => {
  it('Test 1', () => {
    // arrange
    const data = 'glove';

    // act
    const response = pigLatin(data);

    // assert
    expect(response).toBe('oveglay');
  });

  it('Test 2', () => {
    // arrange
    const data = 'eight';

    // act
    const response = pigLatin(data);

    // assert
    expect(response).toBe('eightway');
  });
});
