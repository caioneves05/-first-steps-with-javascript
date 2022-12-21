function fn1() {
    const v1 = 10;
    return function() {
        console.log(v1);
    };
};
const fn2 = fn1();
const v1 = 100;
fn2();

//Closure tem um scope cahin estático que é definido no momento em que a função é criada, por isso, todas as funções na linguagem JavaScript são closures.
