const javascript = {
    name: 'JavaScript',
    year: 1987,
    paradigm: 'OO and functional'
};
Object.preventExtensions(javascript);
console.log(Object.isExtensible(javascript));
javascript.name = 'ECMAScript';
javascript.author = "Caio neves";
console.log(javascript.name)
console.log(javascript.author)
//O preventExtensions não deixar criar propriedades, apenas alterá-las.





/*
PREVENT EXTENSIONS, SEAL E FREZE

preventExtensions - Impede que o objeto tenha novas propriedades, mas permite modificar ou remover as propriedades existentes.

seal - Impede que o objeto tenha novas propriedades ou apague propriedades existentes, mas permite modificar propriedades existentes

freeze - Impede que o objeto tenha novas propriedades, apague ou modifique propriedades existentes.
*/