let array = [10, 10, 10];
console.log(array);
console.log(array.length);

//Eliminado a duplicação dos valores desse Array, trasnformando-o em Set.
let set = new Set(array);
console.log(set);

//Transformando-o novemente em um Array, sem os elementos duplicados.
array = Array.from(set);
console.log(array)
console.log(array.length)
