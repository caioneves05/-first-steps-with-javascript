//Importando o framework express.
const express = require('express');
const server = express();

//Criando uma função para reconhecer informções JSON.
server.use(express.json());

const cursos = ['Javascript puro', 'Python 2022', 'FullStack 2022', "NodeJS com express."];

//retornando um curso
server.get('/cursos/:index', (req, res) => {
    const {index} = req.params;

    return res.json(cursos[index]);
});


//retornar todos os cursos
server.get('/cursos', (req, res) =>{
    return res.json(cursos);
});

//criando um novo curso

server.post('/cursos', (req, res) => {
    const {nome} = req.body;
    cursos.push(nome);

    return res.json(cursos); 
});

//Atualizar um curso

server.put('/cursos/:index', (req, res) => {
    const {index} = req.params;
    const {nome} = req.body;

    cursos[index] = nome;

    return res.json(cursos);
})

//deletar algum curso

server.delete('/cursos/:index', (req, res) => {
    const {index} = req.params;
    
    cursos.splice(index, 1);

    return res.json({message: "O curso foi deletado."});
});








//especificando a porta que será utilizada.
server.listen(3000);