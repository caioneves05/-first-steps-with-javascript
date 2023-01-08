import {PI as pi, pow} from './math';
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return pi * pow(this.radius, 2);
    }
}
const circle = new Circle(10);
console.log(circle);
console.log(circle.area);

//O uso do "as" renomeia o modulo exportado.