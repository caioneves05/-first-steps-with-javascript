const retangule = {};
    Object.defineProperty(rectangle,"area", {
        get(){
            return this.x + this.y;
        }
});
retangule.y = 5;
retangule.y = 2;
console.log(rectangle.area);




//Por meio da operação defineProperty da ObjectAPI, também é possível definir funções do tipo getter e setter.
