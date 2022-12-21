const Person = function(name, city, year) {
    this.name = name,
    this.city = city,
    this.year = year,
    this.getAge = function(){
        return (new Date()).getFullYear() - this.year;
    }
}
//O new criado um novo objeto e associa as propriedades a this.

//Geralmente são denominadas com a primeira letra maiúscula e utilizadas com o NEW antes de seu nome.
const person1 = new Person("Linus Torvald", "Helsinki", 1969);
const person2 = new Person("Bill Gates", "Seattle", 1955);
console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.__proto__);
console.log(person2.getAge());
console.log(person1.__proto__ === person2.__proto__);




//A função construtora retorna um novo objeto ao ser invocada por meio do operador new.