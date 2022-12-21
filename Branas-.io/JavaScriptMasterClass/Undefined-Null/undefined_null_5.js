const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
delete book.available;
//Deletando apenas a propriedade available do objeto book.
console.log(book);
console.log("available" in book);

// As propriedades de um objeto podem ser apagadas por meio de um operador delete.