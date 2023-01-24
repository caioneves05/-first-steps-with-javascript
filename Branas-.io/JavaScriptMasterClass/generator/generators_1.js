function forever() {
	let value = 1;
	while (true) {
		console.log(value++);
	}
}

function today() {
	let date = new Date();
	console.log(date);
}

forever();
today();


//Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa.