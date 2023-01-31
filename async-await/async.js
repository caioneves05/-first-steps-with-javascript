function primaryFuntion() {
  return new Promise((resolve) => {
      setTimeout(()=>{
          console.log("Esperou isso aqui!");
          resolve()
      }, 1000);
  })
}

async function secondFunction() {
  console.log("iniciou")


  await primaryFuntion()


  console.log("terminou")
}

secondFunction()


// Caso de uso

const getUser = (id) => {
  return fetch(`http://reqres.in/api/users?=${id}`)
  .then(data => data.json())
}