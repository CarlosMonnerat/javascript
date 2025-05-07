//Servidor simples usando Express
const express = require('express');
const app = express();
const porta = process.env.PORT;

app.get('/', (req, res) =>{
   res.send('Seja bem-vindo(a)');
});

app.get('/canal', (req, res) =>{
   res.json({canal: 'CFB Curso'});
});

app.listen(porta || 3000, () => {console.log('Servidor Rodando!')});