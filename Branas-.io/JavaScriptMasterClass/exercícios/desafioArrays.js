//Escreva uma função que receba dois arrays como parâmetros e retorne true caso exista um elemento em comum entre esses dois Arrays. caso contrário retorne false.

function ArraysInCommom(arr1, arr2){
  const isArrayEqualElement = arr1.some(element => arr2.includes(element));
  console.log(isArrayEqualElement);

}
ArraysInCommom([1,2,3,4,5,"caio"], [6,7,8,9,"caio"]);