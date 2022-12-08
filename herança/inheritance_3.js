const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
};
const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
};
console.log(functionalLanguage);
console.log(scheme);
console.log(javascript);


//Porque não foi exibida a prorpiedade paradigm no exemplo acima???????

// A propriedade __proto__ é uma referêmcia para o protótipo do objeto.
