/* 
-JSON é uma forma de converter um objeto em texto, ou um texto em objeto.

-Utilizado para transmitir dados entre sistemas.

JSON.parse() -> converte texto no padrão JSON em objetos
JSON.stringify() -> converte objetos em texto padrão JSON.

*/

const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    motor: ["1.6","1.4","V8"]
};
//CONVERTENDO OBJETO EM TEXTO

let texto = JSON.stringify(carro);

document.getElementById('area').innerHTML = texto;
//CONVERTENDO TEXTO EM OBJETO

let obj = JSON.parse(texto);

console.log(obj.motor[2]);