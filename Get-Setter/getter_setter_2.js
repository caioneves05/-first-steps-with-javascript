const rectangle = {
    set x(x){
        if(x >= 0){
        this .xx = x;
        }else{
            console.log('Número inválido para X.')
        }
    },
    set y(y){
        if(y >= 0){
        this .yy = y;
        }else{
            console.log('Número inválido para Y.')
        }
    },
    get area(){
        return this.xx * this.yy;
    }
};
rectangle.x = -10;
rectangle.y = -2;
console.log(rectangle.area);


//Utilizamos acima .y ou .x para acessar as propriedades internas de x e y e diferenciar as chaves.

//Uitilize chaves diferentes para a função setter e a propriedade do objeto.