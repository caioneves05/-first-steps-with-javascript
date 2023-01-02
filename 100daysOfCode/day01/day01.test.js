const calculationAge = require('./day01')

test('Age(65) return 23725', () => {
    expect(calculationAge(65)).toBe(23725)
});