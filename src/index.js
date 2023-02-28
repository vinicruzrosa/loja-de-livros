const express = require('express');
const app = express();
const port = 3000;

const bookRoutes = require('./routes/livroRouter');

app.use(express.json());

app.use('/livros', bookRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
