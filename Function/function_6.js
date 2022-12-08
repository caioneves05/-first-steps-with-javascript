function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));
//4
console.log(sum(5));
//NaN
console.log(sum(1, 2, 5));
//3 (o último parâmetro foi ignorado)


//É possível invocar uma função com menos ou mais parâmetros, não necessariamente seguindo o que está declarado.