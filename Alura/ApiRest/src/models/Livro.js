import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    autor: {type: String, require: true},
    editora: {type: String, require: true},
    paginas: {type: Number}
});
//Especificando a qual coleção pertence o Schema livroSchema
const livros = mongoose.model('livros', livroSchema);

export default livros;