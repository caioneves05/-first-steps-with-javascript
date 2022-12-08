const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    value: "JavaScript",
    writable: true
});
javascript.name = "ECMAScript";
delete javascript.name;
//Mesmo usando o DELETE, não conseguimos deletar a propriedade do objeto.

console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));
