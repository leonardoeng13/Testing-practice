const capitalizer = require('./capitalizer');

test('capitalizer test', () => 
  {
    let testString = 'abcdefgh';
    let capitalizeLeter = 'Abcdefgh';

    expect(capitalizer(testString)).toEqual(capitalizeLeter);
  }
);