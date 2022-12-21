const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

const circle = {
    radius:10,
    calculateArea
}
console.log(calculateArea.call(circle));

//Por meio das operações call e apply é possível invocar uma função passando o this por parâmetro.