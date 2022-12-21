//importando o express
const express = require('express');
//inicializando o express
const app = express();
// requisição(get), rota, recebe uma requisição e devolve uma resposta.
app.get('/users', (req, res) => {
    const {nome} = req.query;
    res.json({mensagem: `${nome}`})
})
//3001/users?nome=caio

app.get('/contato/:id', (req, res) => {
    const {id} = req.params;
    res.json({id: `${id}`})
});
//3001/contato/2




//Escolhendo a rota do servidor.
app.listen(3001);


/* 
FORMAS DE CAPTURAR INFORMAÇÕES

Query params = ?nome=Caio
Route params = http://localhost:3001/users/1
Request body = req.body {"id": 1}

*/