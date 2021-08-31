const reverseString = require('./reverseString');

test('reverse string that is not empty', () => {
  expect(reverseString('abc')).toBe('cba');
})

test('reverse empty string', () => 
  expect(reverseString('')).toBe('')
)