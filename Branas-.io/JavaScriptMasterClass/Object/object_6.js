const book = {};
book.title = "Clean Code";
book.author = "Robert C. Martin";
book["number-of-pages"] = 464; 
//Utilizando os [] para definir uma propriedade sem afetar a sintaxe da linguagem.
book.language = "English";
book.available = true;
console.log(book["number-of-pages"]);
console.log(book.title);
console.log(book.author)
