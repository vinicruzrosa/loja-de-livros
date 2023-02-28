const mongoose = require('mongoose')

const livroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    editora: String,
    ano_publicacao: Date,
    preco: Number,
    estoque: Number,
    generos: [String],
    avaliacoes: [{
        usuario: String,
        comentario: String,
        estrelas: Number
    }]
});

const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;