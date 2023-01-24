function* doSomething() {
	const msg = yield "Awesome!";
	console.log(msg);
};

function main() {
	const generator = doSomething();
  const result = generator.next();
  generator.next(`Realy ${result.value}`)

  console.log(result);
}
main()

//O DONE MOSTRA SE O PROCESO A FUNÇÃO FOI CONCLUÍDO OU NÃO.
//Facilita a troca de informações entre as funções durante a aexecução.
