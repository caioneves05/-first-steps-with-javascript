const skewerCounterTest = require('./day03');

test('skewerCounter("--xo--x--ox--","--xx--x--xx--","--oo--o--oo--","--xx--x--ox--","--xx--x--ox--") return "the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer" ', () => {
    expect(skewerCounterTest()).toBe("the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer");
});