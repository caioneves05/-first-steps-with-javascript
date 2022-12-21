const date = new Date ();
console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);


//true, true, false.
//Na cadeia de protótipo não existe array.


//Com o operador instanceof é possível verificar se um objeto foi criado por meio de uma determinada função construtora analisando a sua cadeia de protótipos.