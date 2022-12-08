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
for (let key in javascript) {
    console.log(key, scheme.hasOwnProperty(key));
}

// O método hasOwnProperty pode ser utilizado para determinar se uma propriedade pertence ao objeto.