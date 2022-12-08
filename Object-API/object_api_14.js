const javascript = {};
Object.defineProperty(javascript, "name", {
    configurable: true,
    //Permite deletar uma propriedade de uma classe.
    enumerable: true,
    value: "JavaScript",
    writable: true
});
javascript.name = "ECMAScript";
delete javascript.name;
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));

