const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};
wm1.set(obj1, obj2, "obj1", "obj2");

console.log(wm1.has(obj1));
//true

/* 
set: adiciona um par de chave e valor.
has: retorna true se a chave existir.
get: retorna o valor de uma determinada chave.
dele: remove um par de chave e valor.
*/