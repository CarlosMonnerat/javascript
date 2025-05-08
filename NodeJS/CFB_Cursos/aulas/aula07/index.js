const express = require('express');
const rotas = require('./rotas/rotas');
const porta = process.env.PORT || 3000;

const app = express();

app.use('/', rotas);

// app.get('*', (req, res) =>{
//    res.send('CFB Cursos');
// });

app.use((req, res) => {
   res.status(404).send('Rota não encontrada - CFB Cursos');
});

app.listen(porta, () => {console.log(`Servidor rodando na porta ${porta}`)});