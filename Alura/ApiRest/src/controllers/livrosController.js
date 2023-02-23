import livros from "../models/Livro.js";

class LivroController {
    //Retornando todos os livros.
    static listarLivros = (req, res) => {
        livros.find((error) => {
            res.status(200).json(livros);
        });
    }

};

export default LivroController;