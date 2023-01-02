class Square {
    constructor(side) {
        this.side = side;
    }
    
    toString() {
        return `side: ${this.side}`;
    }
}
const square = new Square(4);
console.log(square.toString());


//Os prototype methods dependem de uma instÂncia para serem invocados.