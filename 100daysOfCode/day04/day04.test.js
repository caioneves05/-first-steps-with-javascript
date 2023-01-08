const monthlyRaceProgress = require('./day04');

test('monthlyRaceProgress("[3,4,1,2]" return "your progress during the days covered was 2 days" ', () => {
    expect(monthlyRaceProgress([3,4,1,2])).toBe("your progress during the days covered was 2 days");
});
