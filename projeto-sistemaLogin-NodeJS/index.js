const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser'); //permite interagir com os dados do formulário.

const port = 3000;
var path = require('path'); //Manipular e settar o diretório das views.
const app = express();

app.use(session({secret: 'caioneves05'})); //Segredo da sessão "palavra chave".


app.use(bodyParser.urlencoded({extended:true})); // Recuperar os dados do formulário
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

let admin = 'ncaio037@hotmail.com';
let password = '28481508';

app.post('/', (req,res) =>{
    if(req.body.password === password && req.body.login === admin){
        //Logado com sucesso
        req.session.login = admin;
        res.render('logado')
        console.log(`o usuário logado é ${admin}`)
    } else {
    //se as credenciais não estiverem corretas, ele recarrega o index.
    res.render('index');
    }
});


app.get('/', (req, res) =>{
    if(req.session.login){
        res.render('logado')
    }else{
        res.render('index')
    }
});


app.listen(port, () =>{
    console.log('Servidor funcionando corretamente!!!');
});
