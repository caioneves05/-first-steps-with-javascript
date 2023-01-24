// sintaxe 

function primaryFunction() {
  return new Promise((resolve)=> {
    setTimeout(() => {
      console.log('ESPEROU ISSO AQUI')
      resolve()
    }, 3000);
  });
};

async function secondFunction() {
  console.log("PRIMEIRO PASSO");

  await primaryFunction()

  console.log("SEGUNDO PASSO")
}

secondFunction()

// prático

const getUser = (id) => {
  return fetch(`https://reqres.in/api/users=?id=${id}`)
     .then(data => data.json())
     .catch(err => console.log(err))
};

async function showUserName(id){
  
  const user = await getUser(id);

  console.log(`O nome do usuário é ${user.data.first_name}`)

}

showUserName(3)