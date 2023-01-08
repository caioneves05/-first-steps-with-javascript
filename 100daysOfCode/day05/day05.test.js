const Socks = require('./day05');
const pairSocks = new Socks("CABBACCC");

test('new Socks("CABBACCC") return 4 ', () => {
    expect(pairSocks.countPairs()).toBe(4);
});