const languages = [
    {
    name: "Python",
    year: 1991
    },

    {
    name: "C",
    year: 1972
    },

    {
    name: "Java",
    year: 1995
    }
];
languages.sort(function(a,b){
    return a.year - b.year;
});
//Se a função retornar 0 ou -1 os elementos retornam com a posição padrão.
console.log(languages);
