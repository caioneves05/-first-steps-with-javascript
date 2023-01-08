const mergeSortedArray = require('./day07')

test('mergeSortedArray([1,2,3,0,0,0], [2,5,6]) return [ 1, 2, 2, 3, 5, 6 ]', () => {
    expect(mergeSortedArray([1,2,3,0,0,0], [2,5,6])).toStrictEqual([ 1, 2, 2, 3, 5, 6 ]);
});