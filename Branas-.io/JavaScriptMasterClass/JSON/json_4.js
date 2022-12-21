const book1 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
const book2 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
const book3 = JSON.parse(JSON.stringify(book2));
//Copiando propriedades de objetos por meio do JSON.
console.log(book3)

//JSON E Object são conceitos completamente diferentes.
