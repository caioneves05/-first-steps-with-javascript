import express from "express"
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";



db.on("Error", console.log.bind(console, 'Erro de Conexão.'));
db.once("open", () => {
  console.log('Conexão com o banco de dados realizada com sucesso.')
});


const app = (express.json);

routes(app);

const port = process.env.PORT || 3000;
//Conseguindo interpretar informações recebidas via JSON
app.use(express.json())


function buscaLivro(id){
  return livros.findIndex(livro => livro.id == id);
};

app.get('/livros/:id', (req,res) =>{

  let {id} = req.params;
  let index= buscaLivro(id);

  res.json(livros[index]);
});

app.post('/livros', (req,res)=>{
  livros.push(req.body);
  
  res.status(201).send('Livro cadastrado com sucesso!!!');
});

app.put('/livros/:id', (req,res) =>{

  let {id} = req.params;
  let index= buscaLivro(id);

  livros[index].nome = req.body.nome;

  res.json(livros);
});

app.delete('/livros/:id', (req,res)=>{

  let {id} = req.params;
  let index= buscaLivro(id);

  livros.splice(index, 1);

  res.json(livros);
});



export default app;