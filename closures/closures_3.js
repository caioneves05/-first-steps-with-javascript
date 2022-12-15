fn1 = () =>{
    const v1 = 10;
    return function() {
        console.log(v1);
    }
};
const fn2 = fn1();
const v1 = 10000;
fn2();
//10




//As funções de primeira classe, dependendo da situação poderia existir uma ambiguidade e isso foi resolvido com o conceito de closure.