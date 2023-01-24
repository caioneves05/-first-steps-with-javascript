function* forever() {
	let value = 1;
	while (true) {
		console.log(value++);
		yield;
	}
}

function today() {
	let date = new Date();
	console.log(date);
}

const foreverGenerator = forever();
foreverGenerator.next();
today();


//Ao encontrar um yield, a execução da função é pausada até o método next ser invocado novamente.