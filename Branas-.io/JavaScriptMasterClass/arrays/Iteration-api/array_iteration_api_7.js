const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.reduce(function (total, framework) {
    return total + framework.contributors;
}, 2584);
//2584
console.log(result);
