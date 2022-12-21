const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.seal(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
//NÃO SERÁ DELETADO POIS O SELA NÃO PERMITIRÁ.
console.log(javascript);
console.log(Object.isExtensible(javascript));
//preventExtensible foi desabilitado.
console.log(Object.isSealed(javascript));
//Verifica se o Seal foi aplicado.
