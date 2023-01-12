const express = require('express');
const app = express();

//Função de callback é executada sempre que algum evento acontece.

//ROTA SÃO OS CAMINHOS PARA A SUA APLICAÇÃO.

//O EXPRESS É UM FRAMEWORK ORIENTADO A ROTAS.


//Porta principal "/"
app.get('/', function(req, res){
    res.send("Seja bem vindo ao meu app!")
});

app.get('/sobre', function(req, res){
    res.send("Minha página sobre.")
})

app.get('/blog', function(req,res){
    res.send("Bem vindo ao meu blog!");
});

app.listen(3333, function(){
    console.log('Servidor rodando!!')
});
