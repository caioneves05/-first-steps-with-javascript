import {PI, pow} from './math';
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return PI * pow(this.radius, 2);
    }
}
const circle = new Circle(10);
console.log(circle);
console.log(circle.area);

//Para utilizar modules no Node.js os arquivos devem ter a extensão ;mjs além de executar com a tag --experimental-modules