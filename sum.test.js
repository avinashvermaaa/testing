const sum = require('./sum');

test('sum function', () => {
    expect(sum(1, 2)).toBe(3);
});

test('sum with non-numeric values', () => {
    expect(sum('1', '2')).toBe('12'); // string concatenation
}); 