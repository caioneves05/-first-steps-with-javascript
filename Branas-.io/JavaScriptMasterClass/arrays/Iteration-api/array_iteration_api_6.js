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
const result = frameworks.map((framework) => framework.name);
//[ 'Angular.js', 'Ember.js', 'Vue.js' ]
//retornou um array apenas com os nomes dos frameworks.
console.log(result);
