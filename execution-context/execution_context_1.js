const v1 = 10;
const fn1 = () => {
    const v1 = 100;
    const fn2 = () =>{
        const v1 = 1000;
       console.log(v1); 
    }
    fn2();
}
fn1();
//1000

// O execution context é o ambiente onde o código é executafo, sendo composto pelo variable object, scope chain e this.
//Dentro de uma função é possível acessar variáveis existentes fora dela, por mei da scope chain.