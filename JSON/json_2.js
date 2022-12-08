JSON.parse('10');
JSON.parse('"JavaScript"');
JSON.parse('true');
JSON.parse('false');
JSON.parse('{"name": "Self","paradigm": "OO"}');
JSON.parse('[1,2,3,4,5,6,7,8,9]');
JSON.parse('null');

//O método JSON.parse converte um JSON para um determinado tipo de dado.
console.log(JSON.parse('{"name": "Self","paradigm": "OO"}'))