const findNemo = require('./day02');

test('findNemo("I am finding Nemo !") return "I found Nemo at 4!" ', () => {
    expect(findNemo("I am finding Nemo !")).toBe("I found Nemo at [4]!");
});
