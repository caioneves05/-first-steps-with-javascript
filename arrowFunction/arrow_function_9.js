const createPerson = (name,city,year) => ({name, city, year});
const person = createPerson('Caio Neves', 'Iraquara', 2003);

console.log(person)
//{ name: 'Caio Neves', city: 'Iraquara', year: 2003 }



//Sempre que for retornar um objeto dentro de uma Arrow Function temos que usar o parênteses nos parâmetros.