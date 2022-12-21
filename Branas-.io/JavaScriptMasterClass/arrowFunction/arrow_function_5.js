const person = {
    name: 'Caio Neves',
    city: 'Iraquara',
    year: 2003,
    getYear: () => {
        return new Date().getFullYear() - this.year;
    }
};
console.log(person.getYear());
//19



//As Arrow Funcitions não possuem as suas prorias variáveis this e arguments.
