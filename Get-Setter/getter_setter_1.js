const retangule = {
    x:5,
    y:2,
    get area(){
        return this.x * this.y;
    }
};
console.log(retangule.area);
//O get possibilita area() agir como uma propriedade de retangule ao invés de um método.

//As funções do tipo getter e setter servem para interceptar o acesso as propriedades de determinado objeto.