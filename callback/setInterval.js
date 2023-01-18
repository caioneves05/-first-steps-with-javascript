setTimeout(() => {
    console.log("Testando o TimeOut");
}, 2000);
//Espera o tempo determinado e executa a instrução uma única vez.
console.log("Depois do TimeOut");

setInterval( ()=> {
    console.log("Testando o Interval");
  }, 2000);
//executa a função infinitamente após o tempo determinado.