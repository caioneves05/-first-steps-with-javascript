import express from "express"
const app = express();
const port = process.env.PORT || 3000;
//Conseguindo interpretar informações recebidas via JSON
app.use(express.json())

const livros = [
    {id: 1, nome: "Shrek 2"},
    {id: 2, nome: "Shrek 3"},
    {id: 3, nome: "O Mundo de Coraline"},
]

function buscaLivro(id){
  return livros.findIndex(livro => livro.id == id);
};

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node')
})

app.get('/livros', (req,res) =>{
    res.status(200).json(livros);
});

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