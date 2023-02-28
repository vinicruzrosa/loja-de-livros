const { json } = require("express");
const Livro = require("../database/Livro");


exports.getAllBooks = async () =>{
    return await Livro.find();
};

exports.getBookId = async (id) =>{
    return await Livro.findById(id);
}

//Criar o bookData
exports.createBook = async (bookData) =>{
    const book = new Livro(bookData);
    return await book.save();
}

exports.updateBook = async (id, bookData) =>{
    const book = await Livro.findById(id);

    if(!book){
        throw new Error('Livro Não Encontrado')
    }

    book.set(bookData)
}

exports.deleteBook = async (id)=>{
    try{
        const book = await Livro.findByIdAndDelete(id);
        if(!book){
            throw new Error('Livro Não Encontrado')
        }
        return book;
    }catch (error) {
        throw new Error(error);
      }
    
}