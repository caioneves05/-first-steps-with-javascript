function fn1() {
    import Circle from './circle';
    const circle = new Circle(10);
    console.log(circle);
    console.log(circle.area);
}
fn1();


// NÃO É PERMITIDO REALIZAR IMPORTAÇÕES E EXPORTAÇÕES DENTRO DE BLOCOS.