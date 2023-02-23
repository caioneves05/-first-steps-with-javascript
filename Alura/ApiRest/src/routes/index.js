//Unindo todas as rotas de todas as coleções possíveis em um único arquivo.

import express from "express";
import livrosRoutes from "./livrosRoutes.js"


const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send('Bem vindo ao curso de NodeJS e APIs Rest');
    });

    app.use(
        express.json(),
        livrosRoutes
    )
}

export default routes;