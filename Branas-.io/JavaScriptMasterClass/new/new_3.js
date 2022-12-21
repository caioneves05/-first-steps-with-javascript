const createPerson = function(name, city, year) {
    return {
        name,
        city,
        year,
        getAge() {
            return (new Date()).getFullYear() - this.year
        }
    }
};
const person1 = createPerson('Linux Torvalds', 'Helsinki', 1969);
const person2 = createPerson('Bill Gates', 'Seatle', 1955);

console.log(person1);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());

//A função fábrica, que é um tipo de padrão, retorna um novo objeto após ser invocada diretamente.