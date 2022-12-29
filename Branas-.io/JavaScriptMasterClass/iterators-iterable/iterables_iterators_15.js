const languages = ["Fortran", "Lisp", "COBOL"];
const iterator = languages[Symbol.iterator]();

//Cada vez que o next é executado ele retorna um elemento do Array.
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


//Todo iterable tem um propriedade de chave Symbol.iterator que define o protocolo de iteração para o projeto.