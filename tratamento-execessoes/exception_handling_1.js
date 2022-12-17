const Rectangle = function (x,y){
    this.x = x;
    this.y = y;
    this.calculateArea = function(){
        if(this.x > 0 && this.y > 0){
        return this.x+ this.y;
        }else{
            throw "Um dos números está inválido";
        }
    }
}
try {
    const rectangle = new Rectangle(0,0);
    console.log(rectangle.calculateArea());
} catch (f){
    console.log(f);
};

//A "variável" f indentifica o throw como tratamento de erro no else.

//Qualquer tipo de dado pode ser lançado como um erro interrompendo o fluxo de execução na linguagem JavaScript.
//Arrow function não reconhece função construtora.