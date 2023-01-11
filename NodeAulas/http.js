let http = require('http');

http.createServer(function(req,res){
    //Mandando uma mensagem
    res.end('Servidor rodando!!!!')
}).listen(3333);

