const obj = {};
obj[10] = "Number";
obj["10"] = "String";
console.log(obj);

//As chaves em objeto são convertidas para STRING ou SYMBOL.