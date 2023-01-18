const myPromise = new Promise((resolve, reject)=> {
    const nome = 'Caio';
  
    if(nome === 'Caio'){
      resolve("usuário Caio encontrado!")
    }else{
      reject("O usuário Caio NÃO foi encontrado.")
    }
  });
  
  myPromise.then((data) => {
    console.log(data);
  });



  //Encadeamento de then's



  const myPromise2 = new Promise((resolve, reject)=> {
    const nome = 'Caio';
  
    if(nome === 'Caio'){
      resolve("usuário Caio encontrado!")
    }else{
      reject("O usuário Caio NÃO foi encontrado.")
    }
  });
  
  myPromise2.then((data) => {
    return data.toLowerCase()
  }).then((stringModificada) => {
    console.log(stringModificada);
  });


  
//Tratando os erros com o CATCH



const myPromise3 = new Promise((resolve, reject)=> {
    const nome = 'murilo';
  
    if(nome === 'Caio'){
      resolve("usuário Caio encontrado!")
    }else{
      reject("O usuário Caio NÃO foi encontrado.")
    }
  });
  
  myPromise3.then((data) => {
    return data.toLowerCase()
  }).catch((err)=> {
    console.log(`Aconteceu um erro, ${err}`)
  });
  


//Resolvendo várias promessas de uma vez só.



