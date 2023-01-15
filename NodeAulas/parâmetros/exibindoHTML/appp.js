const express = require('express');
const app = express();

//Função de callback é executada sempre que algum evento acontece.

//ROTA SÃO OS CAMINHOS PARA A SUA APLICAÇÃO.

//O EXPRESS É UM FRAMEWORK ORIENTADO A ROTAS.


//Porta principal "/"
app.get('/', function(req, res){
    //Só podemos utilizar o SEND uma vez para cada rota.
    res.sendFile(__dirname + "/html/index.html")
});

app.get('/sobre', function(req, res){
    res.send("Minha página sobre.")
})

app.get('/blog', function(req,res){
    res.send("Bem vindo ao meu blog!");
});

app.get('/ola/:cargo/:nome', function(req,res){
    res.send(`Ola ${req.params.nome}. <br> Seu cargo: ${req.params.cargo}`);
})



app.listen(3030, function(){console.log('Servidor rodando!!')});