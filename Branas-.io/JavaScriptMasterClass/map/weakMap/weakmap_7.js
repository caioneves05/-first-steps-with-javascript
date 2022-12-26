const areas = new WeakMap();

const rectangle1 = {
    x: 7,
    y: 4
};
const rectangle2 = {
    x: 5,
    y: 4
};
function calculateArea(rectangle){
    if(areas.has(rectangle)){
        console.log('Dados retirados do cache.')
        return areas.get(rectangle);
    }
    const area = rectangle.x * rectangle.y;
    areas.set(rectangle, area)
    return area;
};
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));



//Sem a referência para a chave não é possível acessar o valor.