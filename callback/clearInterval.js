let x = 0;

let varTimer = setTimeout(()=>{
  console.log(`O X é : ${x}`); 
}, 2000)

x = 5;

if(x != 0){
  clearTimeout(varTimer);
  console.log("O X passou de 0.")
}

let myInterval = setInterval(()=>{
    console.log("Imprimindo Interval...")
  }, 500);
  
  setTimeout(()=>{
    console.log("Não precisamos mais repetir");
    clearInterval(myInterval);
  }, 2000);