const obj1 = {
    p1: 10,
    getp1: function() {
        const fn1 = () => { 
            return this.p1;
        }
        return fn1()
    }
};
console.log(obj1.getp1())
//10


//Toda função tem uma variável this que contém a referência para o objeto responsável pela sua invocação.