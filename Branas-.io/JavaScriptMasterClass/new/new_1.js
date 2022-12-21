const person1 = {
    name: 'Linux Torvalds',
    city: 'Helsinki',
    year: 1969,
    getAge() {
        return (new Date()).getFullYear() - this.year;
    }
}
const person2 = {
    name: 'Bill Gates',
    city: 'Seatle,',
    year: 1955,
    getAge() {
        return (new Date()).getFullYear() - this.year;
    }
}
console.log(person1.getAge());
console.log(person2.getAge());

