const retangule = {
    x: 10,
    y: 2,
    calculateArea: function(){
        return this.x*this.y;
    }
}
console.log(retangule.calculateArea());
//10



//This fz referência ao objeto global, que no caso é retangule.






//Exite uma variável implícita chamada de this que faz referência para o objeto responsável pela sua invocação.