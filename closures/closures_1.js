const v1 = 10;
fn1 = () =>{
    fn2 = () =>{
        console.log(v1);
    }
    fn2();
};
fn1();

//Na linguagem JavaScript, toda função permite a utilização de variáveis que não foram declaradas e nem passadas por parâmetro.