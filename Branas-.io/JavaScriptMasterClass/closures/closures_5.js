const v1 = 10;
fn1 = () =>{
    console.log(v1)
}
fn2 = (fn1) => {
    const v1 = 1000;
    fn1();
}
fn2(fn1);

//O valor no console será 10 ou 1000?
//10 