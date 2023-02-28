const express = require("express");
const router = express.Router();

const livroController = require("../controller/LivroController");

router.get("/livros", livroController.getAllBooks);
router.get("livros/:id", livroController.getBookById);
router.post("livros", livroController.createBook);
router.put("livros/:id", livroController.updateBook);
router.delete("livros/:id", livroController.deleteBook);

module.exports = router;