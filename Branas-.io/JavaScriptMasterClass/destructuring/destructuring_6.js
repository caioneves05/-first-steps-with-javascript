const language = "C;Dennis Ritchie".split(";");
const [name = "-", author = "-", year = "-"] = language;
console.log(name, author, year);

// = "-" define um valor default(valor "padrão" caso não haja outro) para cada posição.