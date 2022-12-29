const ws1 = new WeakSet();
const obj1 = {};
const obj2 = {};
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);
/*
add: adiciona um elemento.
has: retorna true se o elemento existir.
delete: remove um elemento.
*/