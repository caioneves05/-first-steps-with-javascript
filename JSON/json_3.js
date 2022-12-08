const book1 = {
    name: "Refactoring",
    author: 'Caio Neves'
};
const book2 = {
    name: "Refactoring",
    author: 'Caio Neves'
};
console.log(JSON.stringify(book1) === JSON.stringify(book2));
//true

//Usando o JSON.stringify para transformar os objetos em JSON e então compará-los.

console.log(book1 === book2)
//false